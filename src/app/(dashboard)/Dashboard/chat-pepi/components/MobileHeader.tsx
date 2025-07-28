"use client";

import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

interface MobileHeaderProps {
  setDrawerOpen: (open: boolean) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ setDrawerOpen }) => {
  return (
    <div className="flex items-start justify-between lg:hidden">
      <button onClick={() => setDrawerOpen(true)}>
        <HiOutlineMenuAlt2 className="txt-48 text-[#224674] cursor-pointer" />
      </button>
    </div>
  );
};

export default MobileHeader; 