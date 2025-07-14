// components/ScrollButton.tsx
'use client';
import React from 'react';


const ScrollButton = () => {

  return (
    <button
     
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
        }
      }}
      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white z-30 txt-16 font-medium hover:bg-gray-800 transition rounded-lg shadow-md cursor-pointer"
      style={{
        writingMode: 'vertical-rl',
        padding: '2rem 0.75rem',
        letterSpacing: '0.1rem',
        borderLeft: '4px solid #94C4ED', // light blue stripe (adjust color as needed)
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: '8px',
        fontFamily: " 'Afacad Flux' , sans-serif",
      }}
    >
      Scroll

      {/* Smoothed inner blue curved corner */}
        <span
          className="absolute bottom-0 left-0 w-[5px] h-7 bg-[#94C4ED] rounded-full"
          style={{
            transform: 'translate(-245%, 12%) rotate(135deg)',
          }}
        ></span>
    </button>
  );
};

export default ScrollButton;
