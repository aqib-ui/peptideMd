"use client";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "next/navigation";
import DosageRemoteService from "@/services/remote/modules/dosage";
import ShareDialog from "../components/ShareDialog";
import ChatSidebar from "./components/ChatSidebar";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import MobileHeader from "./components/MobileHeader";

// Define type for dosage item
interface DosageItem {
  peptide_title: string;
  dosage: string;
  goals: string;
  date: string;
}

const AiAssistantPage = () => {
  // ========================
  // Read URL params
  const params = useSearchParams();
  const start = params.get("start");
  const end = params.get("end") || params.get("start");
  const isSingle = start === end;

  // ========================

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    {
      id: string;
      title: string;
      createdAt: string;
      updatedAt?: string;
      chatIdentifier: string;
    }[]
  >([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // If no chat is active, create a new chat and add the first message
    if (!activeChat) {
      const newChatId = uuidv4();
      const now = new Date().toISOString();

      // Check if this chat already exists to prevent duplicates
      const chatExists = chatHistory.some(
        (chat) => chat.chatIdentifier === newChatId
      );
      if (chatExists) {
        console.log("Chat already exists, preventing duplicate creation");
        return;
      }

      // Create new chat with proper title
      const chatTitle =
        inputValue.split(" ").slice(0, 8).join(" ") +
        (inputValue.split(" ").length > 8 ? " ..." : "");

      const newChat = {
        id: newChatId,
        title: chatTitle,
        createdAt: now,
        updatedAt: now,
        chatIdentifier: newChatId,
      };

      setChatHistory((prev) => [newChat, ...prev]);
      setActiveChat(newChatId);

      // 1. Set first message
      const firstMsg = {
        text: inputValue,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([firstMsg]);

      // 2. Call OpenAI and append response to current messages
      generateResponseWithAppend(inputValue, [firstMsg]);
      setInputValue("");
      return;
    }

    // Existing chat logic
    const userMsg = { text: inputValue, isUser: true, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    // Update chat title if it's still "New Chat"
    setChatHistory((prev) =>
      prev.map((chat) =>
        chat.chatIdentifier === activeChat && chat.title === "New Chat"
          ? {
              ...chat,
              title:
                inputValue.split(" ").slice(0, 8).join(" ") +
                (inputValue.split(" ").length > 8 ? " ..." : ""),
            }
          : chat
      )
    );

    generateResponseWithAppend(inputValue);
    setInputValue("");
  };

  
  // == Call OpenAI and append response to current messages ====
  const generateResponseWithAppend = async (
    userMessage: string,
    baseMessages?: any[]
  ) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...(baseMessages || prev),
        {
          text: data.result,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...(baseMessages || prev),
        {
          text: "Sorry, something went wrong. Please try again.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
    setIsLoading(false);
  };

  // New chat button
  const handleNewChat = () => {
    // if click new chat set input value to empty
    setInputValue("");

    const newChatId = uuidv4();
    const now = new Date().toISOString();

    // Check if this chat already exists to prevent duplicates
    const chatExists = chatHistory.some(
      (chat) => chat.chatIdentifier === newChatId
    );
    if (chatExists) {
      console.log("Chat already exists, preventing duplicate creation");
      return;
    }

    // Check if there's already an active "New Chat" to prevent multiple empty chats
    const hasActiveNewChat = chatHistory.some(
      (chat) => chat.title === "New Chat" && chat.chatIdentifier === activeChat
    );

    if (hasActiveNewChat) {
      console.log("Already have an active new chat, switching to it");
      setActiveChat(activeChat);
      setMessages([]);
      return;
    }

    const newChat = {
      id: newChatId,
      title: "New Chat",
      createdAt: now,
      updatedAt: now,
      chatIdentifier: newChatId,
    };

    setChatHistory((prev) => [newChat, ...prev]);
    setActiveChat(newChatId);
    setMessages([]);
  };

  // Fetch user chats
  useEffect(() => {
    const fetchUserChats = async (): Promise<void> => {
      const userToken = localStorage.getItem("peptide_user_token");
      const res = await fetch(
        "https://peptide-backend.mazedigital.us/chats/v1_get-by-user",
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      const data = await res.json();
      let chats: any[] = [];
      if (data.data && typeof data.data === "object") {
        Object.values(data.data).forEach((arr: any) => {
          if (Array.isArray(arr)) {
            chats = chats.concat(
              arr.map((chat: any) => {
                // Parse history and get first user message for title
                let title = "New Chat";
                try {
                  const hist = JSON.parse(chat.history);
                  if (Array.isArray(hist) && hist.length > 0) {
                    const firstUserMsg = hist.find((m: any) => m.isUser);
                    if (firstUserMsg && firstUserMsg.text) {
                      const words = firstUserMsg.text.split(" ");
                      title = words.slice(0, 8).join(" ");
                      if (words.length > 8) title += " ...";
                    }
                  }
                } catch {}
                return {
                  id: chat.id,
                  title,
                  createdAt: chat.createdAt,
                  updatedAt: chat.updatedAt,
                  chatIdentifier: chat.chatIdentifier,
                };
              })
            );
          }
        });
      }

      // Remove duplicates based on chatIdentifier
      const uniqueChats = chats.filter(
        (chat, index, self) =>
          index ===
          self.findIndex((c) => c.chatIdentifier === chat.chatIdentifier)
      );

      console.log(
        "Fetched chats:",
        uniqueChats.map((c) => c.chatIdentifier)
      ); // Debug: log all identifiers
      setChatHistory(uniqueChats);
    };
    fetchUserChats();
  }, []);

  // Load chat by identifier
  const loadChatByIdentifier = async (
    chatIdentifier: string
  ): Promise<void> => {
    const userToken = localStorage.getItem("peptide_user_token");
    const res = await fetch(
      `https://peptide-backend.mazedigital.us/chats/v1_mobile_get-by-identifier/${chatIdentifier}`,
      {
        headers: { Authorization: `Bearer ${userToken}` },
      }
    );
    const data = await res.json();
    if (data.data && data.data.history) {
      try {
        const parsed = JSON.parse(data.data.history);
        if (Array.isArray(parsed)) {
          // First set loading to false
          setIsChatLoading(false);
          // Then set messages in the next frame to ensure container is ready
          requestAnimationFrame(() => {
            setMessages(parsed);
          });
        } else {
          setMessages([]);
          setIsChatLoading(false);
        }
      } catch {
        setMessages([]);
        setIsChatLoading(false);
      }
    } else {
      setMessages([]);
      setIsChatLoading(false);
    }
  };

  // Only load conversation when user clicks a chat
  useEffect(() => {
    if (activeChat) {
      loadChatByIdentifier(activeChat);
    }
  }, [activeChat]);

  // Save chat to backend with debouncing
  const saveChatToBackend = async (
    chatIdentifier: string,
    messages: any[]
  ): Promise<void> => {
    if (!chatIdentifier || messages.length === 0) return;

    const userToken = localStorage.getItem("peptide_user_token");
    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/chats/v1_mobiel_create-or-update",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({
            chatIdentifier,
            history: JSON.stringify(messages),
          }),
        }
      );

      if (!response.ok) {
        console.error("Failed to save chat to backend");
      }
    } catch (error) {
      console.error("Error saving chat to backend:", error);
    }
  };

  // Debounced save effect
  useEffect(() => {
    if (messages.length > 0 && activeChat) {
      const timeoutId = setTimeout(() => {
        saveChatToBackend(activeChat, messages);
      }, 1000); // Wait 1 second before saving

      return () => clearTimeout(timeoutId);
    }
  }, [messages, activeChat]);

 

  // Handle new chat click and reset state of chat
  const handleChatClick = (chatIdentifier: string) => {
    setActiveChat(chatIdentifier);
    setIsChatLoading(true);
    setMessages([]);
    loadChatByIdentifier(chatIdentifier);
  };

  // Bilal useEffect to fetch dosages
  useEffect(() => {
    if (!start) return;
    setIsLoading(true);

    const fetchDosages = async () => {
      try {
        const res = isSingle
          ? await DosageRemoteService.getPeptideDosageByDate(start)
          : await DosageRemoteService.getPeptideDosageByDateRange(start, end!);

        if (res.status === "success") {
          console.log(res);
          // Type assertion for the response data
          const dosageData = res.data as DosageItem[];
          console.log(dosageData);
          // dosageData.reverse();

          // 1. Extract unique peptide names
          const uniquePeptides = Array.from(
            new Set(dosageData.map((item) => item.dosage + " " + item.goals))
          ).join(", ");

          // 2. Format dates for display
          const formatDate = (dateStr: string) => {
            const date = new Date(dateStr + "T00:00:00"); // Add time to prevent UTC conversion

            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
          };

          let dateRange = "";
          if (isSingle) {
            dateRange = `[${formatDate(start)}]`;
          } else {
            // Get unique sorted dates
            const dates = Array.from(
              new Set(dosageData.map((item) => item.date))
            ).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

            dateRange = `[${dates.map((d) => formatDate(d)).join(", ")}]`;
          }

          // 3. Set the input value with the default prompt
          setInputValue(
            ` (${uniquePeptides}) from ${dateRange} Based on available research and studies, please provide an informational overview of this peptide's typical effects, safety profile, and usage practices.`
            // `Can you review my dosage plan for (${uniquePeptides}) from ${dateRange} and suggest any improvements?`
          );

          // Please review this dosage and provide feedback on its safety, effectiveness, and potential side effects.
        } else {
          setInputValue(
            "Based on available research and studies, please provide an informational overview of this peptide's typical effects, safety profile, and usage practices."

            // "Can you review my dosage plan and suggest any improvements?"
          );
        }
      } catch (err) {
        console.error(err);
        setInputValue(
          "Can you review my dosage plan and suggest any improvements?"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchDosages();
  }, [start, end, isSingle]);

  // Copy to clipboard
  const copyToClipboard = () => {
    const lastResponse = messages.filter((m) => !m.isUser).pop();
    if (lastResponse) {
      // Create temporary element to strip HTML tags
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = lastResponse.text;
      const plainText = tempDiv.textContent || tempDiv.innerText || "";

      navigator.clipboard.writeText(plainText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Share button
  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };
  return (
    <div className="flex  min-h-[calc(100vh+10px)]  2xl:min-h-[calc(100vh-100px)] w-full max-sm:px-2 px-4 sm:px-6  py-8 md:py-9 gap-6.5 max-sm:gap-0">
      {/* Sidebar Component */}
      <ChatSidebar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        chatHistory={chatHistory}
        activeChat={activeChat}
        handleNewChat={handleNewChat}
        handleChatClick={handleChatClick}
      />

      {/* Mobile Header */}
      <MobileHeader setDrawerOpen={setDrawerOpen} />

      <div
        className="p-[2px] w-full rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] relative"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        <div className="bg-white rounded-[3rem] h-full p-6 sm:p-10 flex flex-col relative">
          {/* Chat Messages Component (scrollable area) */}
          <div className="flex-1  ">
            {" "}
            {/* pb-[90px] = ChatInput ki height + padding */}
            <ChatMessages
              messages={messages}
              isLoading={isLoading}
              copied={copied}
              copyToClipboard={copyToClipboard}
              handleShare={handleShare}
              isChatLoading={isChatLoading}
            />
          </div>

          {showShareOptions && (
            <ShareDialog
              onClose={() => setShowShareOptions(!showShareOptions)}
            />
          )}

          {/* Chat Input fixed at bottom */}
          <div className="sticky bottom-1">
            <ChatInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistantPage;
