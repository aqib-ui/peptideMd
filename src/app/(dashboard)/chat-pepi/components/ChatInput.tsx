"use client";

import React from "react";
import Image from "next/image";

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  inputValue,
  setInputValue,
  handleSubmit,
  isLoading,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4 w-full mt-6 ">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ask about peptides..."
        className="bg-gray-100 px-6 w-full py-1 text-base sm:text-lg font-medium rounded-full placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#224674]"
        disabled={isLoading}
      />

      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className={`flex justify-center items-center text-white text-xl font-medium p-3 rounded-full ${
          isLoading || !inputValue.trim()
            ? "bg-[#D8DFE0] cursor-not-allowed"
            : "bg-[#224674] hover:bg-[#1a3559] cursor-pointer"
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
  );
};

export default ChatInput; 