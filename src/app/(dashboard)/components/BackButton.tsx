"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="cursor-pointer">
      <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
    </div>
  );
}
