// components/FaviconLoader.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setFavicon } from "@/utils/favicon";

export default function FaviconLoader() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setFavicon("/icons8-loading-circle.ico");
    };

    const handleComplete = () => {
      setFavicon("/icons8-medicine-100.png");
    };

    // Listen to navigation
    window.addEventListener("next-navigate-start", handleStart);
    window.addEventListener("next-navigate-end", handleComplete);

    return () => {
      window.removeEventListener("next-navigate-start", handleStart);
      window.removeEventListener("next-navigate-end", handleComplete);
    };
  }, []);

  return null;
}
