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

  // Function to generate a response based on user input from chatgpt
  const generateResponse = async (userMessage: string) => {
    setIsLoading(true);

    try {
      console.log("USER MESSAGE ON BUTTON PRESS, ", userMessage);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      console.log("🔁 data ===>", data);

      setMessages((prev) => [
        ...prev,
        {
          text: data.result,
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, something went wrong. Please try again.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }

    setIsLoading(false);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // If no chat is active, create a new chat and add the first message
    if (!activeChat) {
      const newChatId = uuidv4();
      const now = new Date().toISOString();
      
      // Check if this chat already exists to prevent duplicates
      const chatExists = chatHistory.some(chat => chat.chatIdentifier === newChatId);
      if (chatExists) {
        console.log("Chat already exists, preventing duplicate creation");
        return;
      }
      
      // Create new chat with proper title
      const chatTitle = inputValue.split(" ").slice(0, 8).join(" ") +
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

  // New helper to always append AI response to current messages
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
    const newChatId = uuidv4();
    const now = new Date().toISOString();
    
    // Check if this chat already exists to prevent duplicates
    const chatExists = chatHistory.some(chat => chat.chatIdentifier === newChatId);
    if (chatExists) {
      console.log("Chat already exists, preventing duplicate creation");
      return;
    }
    
    // Check if there's already an active "New Chat" to prevent multiple empty chats
    const hasActiveNewChat = chatHistory.some(chat => 
      chat.title === "New Chat" && chat.chatIdentifier === activeChat
    );
    
    if (hasActiveNewChat) {
      console.log("Already have an active new chat, switching to it");
      setActiveChat(activeChat);
      setMessages([]);
      setInputValue(""); // Clear input when switching to existing new chat
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
    setInputValue(""); // Clear input when creating new chat
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
      const uniqueChats = chats.filter((chat, index, self) => 
        index === self.findIndex(c => c.chatIdentifier === chat.chatIdentifier)
      );
      
      console.log(
        "Fetched chats:",
        uniqueChats.map((c) => c.chatIdentifier)
      ); // Debug: log all identifiers
      setChatHistory(uniqueChats);
    };
    fetchUserChats();
  }, []);

  // Bilal useEffect - Only run when coming from dosage section
  useEffect(() => {
    // Only run if we have start parameter AND no active chat (fresh visit from dosage)
    if (!start || activeChat) return;
    
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

          // 3. Set the input value with the default prompt ONLY if no active chat
          if (!activeChat) {
            setInputValue(
              ` (${uniquePeptides}) from ${dateRange} Based on available research and studies, please provide an informational overview of this peptide's typical effects, safety profile, and usage practices.`
            );
          }

        } else {
          if (!activeChat) {
            setInputValue(
              "Based on available research and studies, please provide an informational overview of this peptide's typical effects, safety profile, and usage practices."
            );
          }
        }
      } catch (err) {
        console.error(err);
        if (!activeChat) {
          setInputValue(
            "Can you review my dosage plan and suggest any improvements?"
          );
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchDosages();
  }, [start, end, isSingle, activeChat]);

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
        if (Array.isArray(parsed)) setMessages(parsed);
        else setMessages([]);
      } catch {
        setMessages([]);
      }
    } else {
      setMessages([]);
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

  // ===========================================

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

  const handleChatClick = (chatIdentifier: string) => {
    setActiveChat(chatIdentifier);
    setMessages([]); // Clear previous messages immediately for UI feedback
    setInputValue(""); // Clear input when switching chats
    loadChatByIdentifier(chatIdentifier);
  };

  return (
    <div className="flex min-h-[calc(100vh+10px)]  2xl:min-h-[calc(100vh-100px)] w-full max-sm:px-2 px-4 sm:px-6 py-8 md:py-9 gap-6.5 max-sm:gap-0">
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

      {/* Right Side */}
      <div
        className="p-[2px] w-full rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        <div className="bg-white rounded-[3rem] h-full p-6 sm:p-10 flex flex-col">
          {/* Chat Messages Component */}
          <ChatMessages
            messages={messages}
            isLoading={isLoading}
            copied={copied}
            copyToClipboard={copyToClipboard}
            handleShare={handleShare}
          />

          {showShareOptions && (
            <ShareDialog
              onClose={() => setShowShareOptions(!showShareOptions)}
            />
          )}

          {/* Chat Input Component */}
          <ChatInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default AiAssistantPage;
