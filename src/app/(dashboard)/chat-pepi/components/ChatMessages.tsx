"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface ChatMessagesProps {
  messages: any[];
  isLoading: boolean;
  copied: boolean;
  copyToClipboard: () => void;
  handleShare: () => void;
  isChatLoading?: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  copied,
  copyToClipboard,
  handleShare,
  isChatLoading = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Always scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages, isChatLoading]);

  // Show loading state when chat is being loaded from history
  if (isChatLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p>Loading chat history...</p>
        {/* <div className="flex max-sm:flex-col items-center gap-4">
          <div className="flex space-x-2 bg-[#F0F4F5] p-2 rounded-[6px]">
            <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce delay-75"></div>
            <div className="w-3 h-3 rounded-full bg-[#D6F0F5] animate-bounce delay-150"></div>
          </div>
        </div> */}
        {/* <Image src="/homePage/loader.gif" alt="Pepi" width={40} height={40} className="h-10 w-10" />  */}
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="flex max-sm:flex-col items-center gap-4 ">
          <div className="w-10 h-10 rounded-full  flex items-center justify-center">
            <Image
              src="/Dashboard/pep-logo.svg"
              alt="Pepi"
              width={40}
              height={40}
              className="h-10 w-10"
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
    );
  }

  // Only render messages container after loading is complete
  if (!isChatLoading) {
    return (
      <div ref={containerRef} className="flex-1 overflow-y-auto pb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-6 ${message.isUser ? "text-right" : "text-left"}`}
          >
            {message.isUser ? (
              <div className="inline-block bg-[#F2F5F6] text-[#25292A] rounded-xl p-[12px_16px] max-w-full break-words">
                <div className="font-medium">You</div>
                <div className="text-xl break-words">{message.text}</div>
              </div>
            ) : (
              <div className="block text-[#25292A] border-b border-[#D8DFE0] pb-8 max-w-full break-words">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F2F5F6]">
                    <Image
                      src="/Dashboard/pep-logo.svg"
                      alt="Pepi"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Pepi</div>
                    <div className="mt-1 text-lg break-words">
                      <ReactMarkdown
                        components={{
                          hr: () => null,
                        }}
                      >
                        {message.text}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
        ))}
        {/* Invisible div for scroll-to-bottom */}
        <div ref={messagesEndRef} />
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
      </div>
    );
  }
};

export default ChatMessages;
