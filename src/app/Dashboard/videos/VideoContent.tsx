"use client";
import Image from "next/image";
import Link from "next/link";
import { videos } from "@/data/videos";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function VideoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromViewAll = searchParams.get("viewAll");
  return (
    <div className="p-4 md:py-10 bg-white max-w-[1128px] mx-auto">
      <div className="flex gap-4">
        <div onClick={() => router.back()} className="cursor-pointer" >
          <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
        </div>
        <h1 className="text-3xl font-semibold">
          {fromViewAll === "true" ? "Recommended Videos" : "Videos"}
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {videos.map((video) => (
          <Link href={`/Dashboard/videos/${video.id}`} key={video.id}>
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <Image
                src={video.poster}
                alt={video.title}
                width={400}
                height={250}
                className="w-full h-70 object-cover"
              />
              {video.recommended && fromViewAll !== "true" && (
                <span className="absolute bottom-18 left-3 bg-[rgba(200,228,252,0.24)] rounded-xl text-xs font-medium text-white px-2 py-1">
                  Recommended
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4" />
              <div className="absolute bottom-3 left-4 right-3 flex justify-between items-center gap-3">
                <p className="text-white text-xl font-medium leading-snug">
                  {video.title}
                </p>
                <button className="cursor-pointer bg-[#C8E4FC] rounded-full p-3 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 19V5L19 12L8 19ZM10 15.35L15.25 12L10 8.65V15.35Z"
                      fill="#224674"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="basis-[342px] h-[48px] bg-blue-100 text-[#224674] rounded-full text-base font-semibold hover:bg-blue-200 transition-all">
          Load more videos
        </button>
      </div>
    </div>
  );
}
