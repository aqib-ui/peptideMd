"use client";

import React from "react";
import { HiX } from "react-icons/hi";
import Image from "next/image";

interface ChatSidebarProps {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  chatHistory: any[];
  activeChat: string | null;
  handleNewChat: () => void;
  handleChatClick: (chatIdentifier: string) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  drawerOpen,
  setDrawerOpen,
  chatHistory,
  activeChat,
  handleNewChat,
  handleChatClick,
}) => {
  // Helper to check if a date is today
  const isToday = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  // Group chats by 'Today' or date
  const groupedChats: Record<string, any[]> = chatHistory.reduce(
    (groups: Record<string, any[]>, chat) => {
      const dateStr =
        chat.createdAt || chat.updatedAt || new Date().toISOString();
      const dateObj = new Date(dateStr);
      const dateLabel = isToday(dateStr)
        ? "Today"
        : dateObj.toLocaleDateString();
      if (!groups[dateLabel]) groups[dateLabel] = [];
      groups[dateLabel].push(chat);
      return groups;
    },
    {}
  );

  return (
    <>
      {/* Sidebar / Drawer */}
      <div
        className={`fixed  inset-y-0 left-0 z-20 w-4/5  max-w-[260px] bg-[#F2F5F6] ${
          drawerOpen ? "rounded-none" : "rounded-3xl"
        } p-4 gap-4 flex-col items-start overflow-x-hidden overflow-y-auto transform
           transition-transform duration-300 lg:static lg:translate-x-0 lg:flex  lg:h-auto  lg:gap-4 lg:p-6 lg:overflow-auto
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          overflowX: "hidden",
        }}
      >
        {/* Close Button (mobile) */}
        <div className="lg:hidden w-full flex justify-end ">
          <button onClick={() => setDrawerOpen(false)}>
            <HiX className="text-2xl text-[#224674] cursor-pointer" />
          </button>
        </div>

        {/* New Chat Button */}
        <button
          onClick={handleNewChat}
          className="bg-[#224674] text-white txt-18 font-semibold px-3 py-2 rounded-full  cursor-pointer max-lg:mb-6 w-full max-w-[108px]"
        >
          New Chat
        </button>

        {Object.entries(groupedChats as Record<string, any[]>).map(
          ([date, chats]) => (
            <div key={date} className=" flex flex-col  ">
              <p className="txt-16 text-[#626D6F] font-medium">{date}</p>
              {chats.map((chat: any, index) => {
                return (
                  <div
                    key={chat.chatIdentifier + index}
                    onClick={() => handleChatClick(String(chat.chatIdentifier))}
                    className={` shrink  p-2 rounded-md cursor-pointer my-1 w-full    ${
                      activeChat === chat.chatIdentifier
                        ? "bg-[#224674] text-white"
                        : "bg-[#E9EDEE] text-[#626D6F] hover:bg-[#D8DFE0]"
                    } overflow-x-hidden`}
                  >
                    <div className="flex flex-col ">
                      <span className="truncate  font-semibold w-[200px] ">
                        {chat.title || "New Chat"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>

      {/* Overlay (mobile) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default ChatSidebar; 