"use client";
import { podcast } from "@/data/podcast";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { RiPlayMiniLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
export default function PodcastContent() {
    const router = useRouter();
  const searchParams = useSearchParams();
  const fromViewAll = searchParams.get("viewAll");
  const [archives, setArchives] = useState<{ [key: number]: boolean }>({});

  const toggleArchive = (e: React.MouseEvent, index: number) => {
    e.stopPropagation(); // ✅ Stop event bubbling
    setArchives((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="p-4 md:py-10 bg-white max-w-[1128px] mx-auto">
      <div className="flex gap-4">
        <div onClick={() => router.back()} className="cursor-pointer">
          <img src="/Dashboard/videos/left-arrow.svg" alt="left-arrows" />
        </div>
        <h1 className="text-3xl font-semibold">
          {fromViewAll === "true" ? "Recommended Podcast" : "Podcast"}
        </h1>
      </div>

      <div className="flex flex-col w-full gap-3 mt-6">
        {podcast.map((pod, index) => (
          <div key={index} className="w-full relative">
            {/* card section */}
            <Link href={`/Dashboard/podcast/${pod.id}`}>
              <div
                key={index}
                className="bg-[#F2F5F6] w-full h-[124px] rounded-lg flex p-3 gap-3"
              >
                {/* video player */}
                <div className="relative w-[100px] h-full rounded-[12px] overflow-hidden flex-shrink-0">
                  <Image
                    src={pod.poster}
                    alt={pod.title}
                    className="w-full h-full object-cover rounded-[12px]"
                    width={100}
                    height={100}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white rounded-[12px]">
                    <button className="relative z-10 w-8 h-8 rounded-full bg-[#C8E4FC] text-[#224674] flex items-center justify-center backdrop-blur-[24px]">
                      <RiPlayMiniLine className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* content section */}
                <div className="flex flex-col justify-between gap-2 w-full">
                  <div className="relative flex flex-col">
                    {pod.recommended && fromViewAll !== "true" && (
                      <span className="bg-[#C8E4FC] rounded-xl text-xs font-medium text-[#224674] px-2 py-1 w-fit">
                        Recommended
                      </span>
                    )}
                    <h3 className="text-2xl font-semibold text-[#25292A]">
                      {pod.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#626D6F] font-medium text-sm">
                      {pod.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            {/* archive button */}
            <button
              className="absolute bottom-2 right-2 flex p-2 items-center gap-2 bg-[#F2F5F6] rounded-full cursor-pointer"
              onClick={(e) => toggleArchive(e, index)} // ✅ Call the toggleArchive function
            >
              {archives[index] ? (
                // ✅ ARCHIVED SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.8203 1.91016H7.18031C5.06031 1.91016 3.32031 3.65016 3.32031 5.77016V19.8602C3.32031 21.6602 4.61031 22.4202 6.19031 21.5502L11.0703 18.8402C11.5903 18.5502 12.4303 18.5502 12.9403 18.8402L17.8203 21.5502C19.4003 22.4302 20.6903 21.6702 20.6903 19.8602V5.77016C20.6803 3.65016 18.9503 1.91016 16.8203 1.91016ZM15.6203 9.03016L11.6203 13.0302C11.4703 13.1802 11.2803 13.2502 11.0903 13.2502C10.9003 13.2502 10.7103 13.1802 10.5603 13.0302L9.06031 11.5302C8.77031 11.2402 8.77031 10.7602 9.06031 10.4702C9.35031 10.1802 9.83031 10.1802 10.1203 10.4702L11.0903 11.4402L14.5603 7.97016C14.8503 7.68016 15.3303 7.68016 15.6203 7.97016C15.9103 8.26016 15.9103 8.74016 15.6203 9.03016Z"
                    fill="#DD6F94"
                  />
                </svg>
              ) : (
                // ✅ DEFAULT SVG
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.5 11.4004H9.5C9.09 11.4004 8.75 11.0604 8.75 10.6504C8.75 10.2404 9.09 9.90039 9.5 9.90039H14.5C14.91 9.90039 15.25 10.2404 15.25 10.6504C15.25 11.0604 14.91 11.4004 14.5 11.4004Z"
                    fill="#DD6F94"
                  />
                  <path
                    d="M12 13.96C11.59 13.96 11.25 13.62 11.25 13.21V8.20996C11.25 7.79996 11.59 7.45996 12 7.45996C12.41 7.45996 12.75 7.79996 12.75 8.20996V13.21C12.75 13.62 12.41 13.96 12 13.96Z"
                    fill="#DD6F94"
                  />
                  <path
                    d="M19.0703 22.75C18.5603 22.75 18.0003 22.6 17.4603 22.29L12.5803 19.58C12.2903 19.42 11.7203 19.42 11.4303 19.58L6.55031 22.29C5.56031 22.84 4.55031 22.9 3.78031 22.44C3.01031 21.99 2.57031 21.08 2.57031 19.95V5.86C2.57031 3.32 4.64031 1.25 7.18031 1.25H16.8303C19.3703 1.25 21.4403 3.32 21.4403 5.86V19.95C21.4403 21.08 21.0003 21.99 20.2303 22.44C19.8803 22.65 19.4803 22.75 19.0703 22.75ZM12.0003 17.96C12.4703 17.96 12.9303 18.06 13.3003 18.27L18.1803 20.98C18.6903 21.27 19.1603 21.33 19.4603 21.15C19.7603 20.97 19.9303 20.54 19.9303 19.95V5.86C19.9303 4.15 18.5303 2.75 16.8203 2.75H7.18031C5.47031 2.75 4.07031 4.15 4.07031 5.86V19.95C4.07031 20.54 4.24031 20.98 4.54031 21.15C4.84031 21.32 5.31031 21.27 5.82031 20.98L10.7003 18.27C11.0703 18.06 11.5303 17.96 12.0003 17.96Z"
                    fill="#DD6F94"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="basis-[342px] h-[48px] bg-blue-100 text-[#224674] rounded-full text-base font-semibold hover:bg-blue-200 transition-all">
          Load more Podcasts
        </button>
      </div>
    </div>
  );
}
