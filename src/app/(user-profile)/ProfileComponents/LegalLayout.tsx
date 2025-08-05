"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  title: string;
  children: ReactNode;
};

export default function LegalLayout({ title, children }: Props) {
  const router = useRouter();
  return (
    <div className="max-w-[1128px] mx-auto px-2 xl:px-4 py-10 md:py-16">
      <div className="flex items-center mb-8 gap-4">
        {/* Back button */}
        <div onClick={() => router.back()} className="cursor-pointer  ">
          <Image
            src="/profileIcons/profileBackBtn.svg"
            height={24}
            width={24}
            alt="back"
            className="h-10 w-10"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-[#25292A]">
          {title}
        </h1>
      </div>
      <div className="space-y-4 leading-relaxed">{children}</div>
    </div>
  );
}
