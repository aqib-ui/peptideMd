// components/ScrollButton.tsx
'use client';
import React from 'react';


const ScrollButton = () => {

  // const handleScroll = () => {
  //   console.log("Scroll button clicked");
  //   if (typeof window !== "undefined") {
  //     // window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  //     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
  //   }
  // }

  return (
    <button
      // onClick={() => handleScroll
      // }
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
      }}
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white txt-16 font-medium hover:bg-gray-800 transition rounded-lg shadow-md cursor-pointer"
      style={{
        writingMode: 'vertical-rl',
        padding: '2rem 0.75rem',
        letterSpacing: '0.1rem',
        borderLeft: '4px solid #94C4ED', // light blue stripe (adjust color as needed)
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        fontFamily: "Afacad Flux , sans-serif",
      }}
    >
      Scroll
    </button>
  );
};

export default ScrollButton;
