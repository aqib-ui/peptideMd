// components/CustomLink.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CustomLink({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.dispatchEvent(new Event("next-navigate-start"));
    router.push(href);
    // Fallback in case navigation fails
    setTimeout(() => {
      window.dispatchEvent(new Event("next-navigate-end"));
    }, 2000);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
