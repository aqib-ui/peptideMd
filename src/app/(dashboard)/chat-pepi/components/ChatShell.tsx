// ✅ CLIENT COMPONENT: app/chat-pepi/components/ChatShell.tsx
"use client";

import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DosageRemoteService from "@/services/remote/modules/dosage";
import ChatSidebar from "./ChatSidebar";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import MobileHeader from "./MobileHeader";
import ShareDialog from "../../components/ShareDialog";
import {
  fetchUserChats,
  saveChatToBackend,
  loadChatByIdentifier,
} from "@/services/chatPepi/chatService";
import { formatDate } from "@/utils/dateUtils";
import { copyToClipboard } from "@/utils/clipboard";

interface DosageItem {
  peptide_title: string;
  dosage: string;
  goals: string;
  date: string;
}

const ChatShell = ({
  start,
  end,
}: {
  start: string | null;
  end: string | null;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isChatLoading, setIsChatLoading] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("peptide_user_token");
    if (!userToken) return;
    fetchUserChats(userToken).then(setChatHistory);
  }, []);

  useEffect(() => {
    if (!start) return;
    setIsLoading(true);
    const fetchDosages = async () => {
      try {
        const res =
          start === end
            ? await DosageRemoteService.getPeptideDosageByDate(start)
            : await DosageRemoteService.getPeptideDosageByDateRange(
                start!,
                end!
              );

        if (res.status === "success") {
          const dosageData = res.data as DosageItem[];
          const uniquePeptides = Array.from(
            new Set(dosageData.map((item) => item.dosage + " " + item.goals))
          ).join(", ");

          const dateRange =
            start === end
              ? `[${formatDate(start)}]`
              : `[${Array.from(new Set(dosageData.map((item) => item.date)))
                  .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
                  .map((d) => formatDate(d))
                  .join(", ")}]`;

          setInputValue(
            `(${uniquePeptides}) from ${dateRange} Based on available research and studies, please provide an informational overview of this peptide's typical effects, safety profile, and usage practices.`
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
  }, [start, end]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const now = new Date().toISOString();
    const newChatId = uuidv4();

    if (!activeChat) {
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

      const firstMsg = {
        text: inputValue,
        isUser: true,
        timestamp: new Date(),
      };
      setMessages([firstMsg]);
      generateResponseWithAppend(inputValue, [firstMsg]);
      setInputValue("");
      return;
    }

    const userMsg = { text: inputValue, isUser: true, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

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

  const handleNewChat = () => {
    setInputValue("");
    const newChatId = uuidv4();
    const now = new Date().toISOString();

    const chatExists = chatHistory.some(
      (chat) => chat.chatIdentifier === newChatId
    );
    if (chatExists) return;

    const hasActiveNewChat = chatHistory.some(
      (chat) => chat.title === "New Chat" && chat.chatIdentifier === activeChat
    );
    if (hasActiveNewChat) {
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

  const handleChatClick = (chatIdentifier: string) => {
    setActiveChat(chatIdentifier);
    setIsChatLoading(true);
    setMessages([]);
    const userToken = localStorage.getItem("peptide_user_token");
    if (!userToken) return;
    loadChatByIdentifier(chatIdentifier, userToken).then((msgs) => {
      setIsChatLoading(false);
      setMessages(msgs);
    });
  };

  useEffect(() => {
    if (messages.length > 0 && activeChat) {
      const userToken = localStorage.getItem("peptide_user_token");
      if (!userToken) return;
      const timeoutId = setTimeout(() => {
        saveChatToBackend(activeChat, messages, userToken);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [messages, activeChat]);

  const handleCopyToClipboard = () => {
    const lastResponse = messages.filter((m) => !m.isUser).pop();
    if (lastResponse) {
      copyToClipboard(lastResponse.text, setCopied);
    }
  };

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  return (
    <div className="flex min-h-[calc(100vh+10px)] 2xl:min-h-[calc(100vh-100px)] w-full max-sm:px-2 px-4 sm:px-6 py-8 md:py-9 gap-6.5 max-sm:gap-0">
      <ChatSidebar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        chatHistory={chatHistory}
        activeChat={activeChat}
        handleNewChat={handleNewChat}
        handleChatClick={handleChatClick}
      />

      <MobileHeader setDrawerOpen={setDrawerOpen} />

      <div
        className="p-[2px] w-full rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] relative"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        <div className="bg-white rounded-[3rem] h-full p-6 sm:p-10 flex flex-col relative">
          <div className="flex-1">
            <ChatMessages
              messages={messages}
              isLoading={isLoading}
              copied={copied}
              copyToClipboard={handleCopyToClipboard}
              handleShare={handleShare}
              isChatLoading={isChatLoading}
            />
          </div>

          {showShareOptions && (
            <ShareDialog onClose={() => setShowShareOptions(false)} />
          )}

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

export default ChatShell;
