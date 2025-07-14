"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BsArrowUp, BsArrowUpSquare, BsFillShareFill } from "react-icons/bs";
import { HiOutlineMenuAlt2, HiX, HiOutlineTrash } from "react-icons/hi";
import { FiCopy } from "react-icons/fi";
import { pepiResponses } from "@/data/pepiResopnses";
import ShareDialog from "../components/ShareDialog";

const AiAssistantPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { id: "1", title: "New Chat" },
  ]);
  const [activeChat, setActiveChat] = useState("1");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [copied, setCopied] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Pre-defined responses for common questions

  // Function to generate a response based on user input
  const generateResponse = (userMessage: string) => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      let foundResponse = false;

      // Check if user's question matches any predefined responses
      for (const item of pepiResponses) {
        if (item.question.test(userMessage)) {
          setMessages((prev) => [
            ...prev,
            {
              text: item.response,
              isUser: false,
              timestamp: new Date(),
              type: "formatted",
            },
          ]);
          foundResponse = true;
          break;
        }
      }

      // Default response if no match found
      if (!foundResponse) {
        setMessages((prev) => [
          ...prev,
          {
            text: "I'm Pepi, your peptide expert assistant! I can help you with information about peptides for muscle recovery, fat loss, skin health, joint pain, and sleep improvement. Ask me anything about peptides!",
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      }

      setIsLoading(false);
      scrollToBottom();
    }, 1500); // 1.5 seconds delay to simulate processing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { text: inputValue, isUser: true, timestamp: new Date() },
    ]);

    // Generate response
    generateResponse(inputValue);

    // Clear input
    setInputValue("");
  };

  const handleNewChat = () => {
    setMessages([]);
    const newChatId = `chat-${Date.now()}`;
    setChatHistory((prev) => [
      { id: newChatId, title: "New Chat" },
      ...prev.slice(0, 50),
    ]);
    setActiveChat(newChatId);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleShare = () => {
    setShowShareOptions(!showShareOptions);
  };

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

  return (
    <div className="flex min-h-[calc(100vh+10px)]  2xl:min-h-[calc(100vh-100px)] w-full max-sm:px-2 px-4 sm:px-6 py-8 md:py-9 gap-6.5 max-sm:gap-0">
      {/* Sidebar / Drawer */}
      <div
        className={`fixed  inset-y-0 left-0 z-20 w-4/5 max-w-xs bg-[#F2F5F6] rounded-3xl p-4 gap-4 flex-col items-start overflow-auto transform
           transition-transform duration-300 lg:static lg:translate-x-0 lg:flex lg:w-[20%] lg:h-auto  lg:gap-4 lg:p-6 lg:overflow-auto
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close Button (mobile) */}
        <div className="lg:hidden w-full flex justify-end">
          <button onClick={() => setDrawerOpen(false)}>
            <HiX className="text-2xl text-[#224674]" />
          </button>
        </div>

        <button
          onClick={handleNewChat}
          className="bg-[#224674] text-white txt-18 font-semibold px-3 py-2.5 rounded-full  cursor-pointer max-lg:mb-6 w-full max-w-[108px]"
        >
          New Chat
        </button>

        <p className="txt-16 text-[#626D6F] font-medium">Today</p>

        <div className="w-full space-y-2">
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`p-2 rounded-md cursor-pointer ${
                activeChat === chat.id
                  ? "bg-[#224674] text-white"
                  : "bg-[#E9EDEE] text-[#626D6F] hover:bg-[#D8DFE0]"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="truncate max-w-[80%]">{chat.title}</span>
                {/* <button className="text-red-500 hover:text-red-700">
                  <HiOutlineTrash />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay (mobile) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Top bar for mobile with menu button */}
      <div className="flex items-start justify-between mt-2 md:mt-10 lg:hidden">
        <button onClick={() => setDrawerOpen(true)}>
          <HiOutlineMenuAlt2 className="txt-48 text-[#224674]" />
        </button>
      </div>

      {/* Right Side */}
      <div
        className="p-[2px] w-full rounded-[3rem] bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]"
        style={{ fontFamily: "'Afacad', sans-serif" }}
      >
        <div className="bg-white rounded-[3rem] h-full p-6 sm:p-10 flex flex-col">
          {messages.length === 0 ? (
            // Initial state - greeting
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="flex max-sm:flex-col items-center gap-4 ">
                <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                  <Image
                    src="/Dashboard/pep-logo.svg"
                    alt="Pepi"
                    width={40}
                    height={40}
                  />
                </div>
                <h2 className="text-2xl text-[#224674] font-semibold">
                  Hi, I am Pepi! Your AI friend
                </h2>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#224674] to-[#DD6F94] bg-clip-text text-transparent mt-4">
                How can I help you?
              </h2>
            </div>
          ) : (
            // Chat messages
            <div className="flex-1 overflow-y-auto pb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-6 ${
                    message.isUser ? "text-right" : "text-left"
                  }`}
                >
                  {message.isUser ? (
                    <div className="inline-block  bg-[#F2F5F6] text-[#25292A] rounded-xl p-[12px_16px] ">
                      <div className="font-medium">You</div>
                      <div className="text-xl ">{message.text}</div>
                    </div>
                  ) : (
                    <div className="inline-block   text-[#25292A] border-b border-[#D8DFE0] pb-8">
                      <div className="flex items-start gap-3 ">
                        <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                          <Image
                            src="/Dashboard/pep-logo.svg"
                            alt="Pepi"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Pepi</div>
                          {message.type === "formatted" ? (
                            <div
                              className="mt-1 text-xl"
                              dangerouslySetInnerHTML={{ __html: message.text }}
                            />
                          ) : (
                            <div className="mt-1 text-lg ">{message.text}</div>
                          )}
                        </div>
                      </div>

                      {index === messages.length - 1 && (
                        <div className="mt-4 flex justify-end gap-4">
                          {/* Copy button */}
                          {copied ? (
                            <button className="flex items-center gap-1  cursor-pointer  ">
                              <Image
                                src="/Dashboard/peptide-copied-tick.svg"
                                alt="share"
                                width={24}
                                height={24}
                              />
                              <span className="text-[#25292A] text-xl font-semibold ">
                                Copy
                              </span>
                            </button>
                          ) : (
                            <button
                              onClick={copyToClipboard}
                              className="flex items-center gap-1 cursor-pointer"
                            >
                              <Image
                                src="/Dashboard/peptide-copy.svg"
                                alt="share"
                                width={24}
                                height={24}
                              />
                              <span className="text-[#25292A] text-xl font-semibold">
                                Copy
                              </span>
                            </button>
                          )}
                          {/* Share button */}
                          <button
                            onClick={handleShare}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <Image
                              src="/Dashboard/peptide-share.svg"
                              alt="share"
                              width={24}
                              height={24}
                            />
                            <span className="text-[#25292A] text-xl font-semibold">
                              Share
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex mb-6">
                  <div className="inline-block">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                        <Image
                          src="/Dashboard/pep-logo.svg"
                          alt="Pepi"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div className="flex space-x-2 bg-[#F0F4F5] p-1 rounded-[6px]">
                        <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce"></div>
                        <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce delay-75"></div>
                        <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce delay-150"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}

          {showShareOptions && (
            <ShareDialog
              onClose={() => setShowShareOptions(!showShareOptions)}
            />
          )}
          {/* Input and Button */}
          <form onSubmit={handleSubmit} className="flex gap-4 w-full mt-6">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about peptides..."
              className="bg-gray-100 px-6 w-full p-4 text-base sm:text-lg font-medium rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#224674]"
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className={`flex justify-center items-center text-white text-xl font-medium p-6 rounded-full ${
                isLoading || !inputValue.trim()
                  ? "bg-[#D8DFE0] cursor-not-allowed"
                  : "bg-[#224674] hover:bg-[#1a3559]"
              }`}
            >
              {isLoading ? (
                <Image
                  src="/Dashboard/stop.svg"
                  alt="send"
                  width={40}
                  height={40}
                />
              ) : (
                <Image
                  src="/Dashboard/arrow-up.svg"
                  alt="send"
                  width={40}
                  height={40}
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
{
  /* <Image src="/Dashboard/stop.svg" alt="send" width={20} height={20} />; */
}
export default AiAssistantPage;
