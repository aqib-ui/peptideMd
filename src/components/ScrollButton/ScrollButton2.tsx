'use client';
import Image from 'next/image';
import React from 'react';

interface ScrollButton2Props {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
}

const ScrollButton2: React.FC<ScrollButton2Props> = ({ showSearch, setShowSearch, searchQuery }) => {
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setShowSearch(!showSearch); // toggle for mobile
      } else {
        console.log("Searching:", searchQuery); // instant for desktop
      }
    }
  };

  return (
    <button
      className="relative z-20 w-16 h-16 [@media(min-width:1600px)]:w-20 [@media(min-width:1600px)]:h-20 bg-[#88D3FF] rounded-full flex items-center justify-center"
      onClick={handleScroll} // <-- fixed here
    >
      <Image
        src="/blue-search.png"
        alt="Search"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </button>
  );
};

export default ScrollButton2;
