"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CustomVideoPlayer from "./CustomVideoPlayer";
import ShareDialog from "./ShareDialog";
import { useRouter } from "next/navigation";

type VideoType = {
  id: string;
  title: string;
  videoUrl: string;
  poster: string;
  description: string;
  date: string;
  recommended: boolean;
};

export default function VideoDetailClient({
  video,
  page,
}: {
  video: any;
  page: string;
}) {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [archives, setArchives] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleArchive = () => {
    setArchives(!archives);
    const isArchiving = !archives;

    if (!isArchiving) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2500);
    }

    setArchives(isArchiving);
  };

  if (!video) return notFound();

  return (
    <div className="max-w-[1128px] mx-auto bg-white mt-12">
      {/*top section */}
      <div className="mb-10 flex justify-between ">
        <div onClick={() => router.back()} className="cursor-pointer">
          <Image
            width={40}
            height={40}
            src="/Dashboard/videos/left-arrow.svg"
            alt=""
            className="cursor-pointer w-[40px] h-[40px]"
          />
        </div>
        {/* Right section : archives add and share buttons */}
        <div className="flex items-center gap-4">
          {/* Archives button */}
          <button
            className="flex p-2 items-center gap-2 bg-[#F2F5F6] rounded-full cursor-pointer"
            onClick={toggleArchive}
          >
            {archives ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.5 11.4004H9.5C9.09 11.4004 8.75 11.0604 8.75 10.6504C8.75 10.2404 9.09 9.90039 9.5 9.90039H14.5C14.91 9.90039 15.25 10.2404 15.25 10.6504C15.25 11.0604 14.91 11.4004 14.5 11.4004Z"
                  fill="#25292A"
                />
                <path
                  d="M12 13.96C11.59 13.96 11.25 13.62 11.25 13.21V8.20996C11.25 7.79996 11.59 7.45996 12 7.45996C12.41 7.45996 12.75 7.79996 12.75 8.20996V13.21C12.75 13.62 12.41 13.96 12 13.96Z"
                  fill="#25292A"
                />
                <path
                  d="M19.0703 22.75C18.5603 22.75 18.0003 22.6 17.4603 22.29L12.5803 19.58C12.2903 19.42 11.7203 19.42 11.4303 19.58L6.55031 22.29C5.56031 22.84 4.55031 22.9 3.78031 22.44C3.01031 21.99 2.57031 21.08 2.57031 19.95V5.86C2.57031 3.32 4.64031 1.25 7.18031 1.25H16.8303C19.3703 1.25 21.4403 3.32 21.4403 5.86V19.95C21.4403 21.08 21.0003 21.99 20.2303 22.44C19.8803 22.65 19.4803 22.75 19.0703 22.75ZM12.0003 17.96C12.4703 17.96 12.9303 18.06 13.3003 18.27L18.1803 20.98C18.6903 21.27 19.1603 21.33 19.4603 21.15C19.7603 20.97 19.9303 20.54 19.9303 19.95V5.86C19.9303 4.15 18.5303 2.75 16.8203 2.75H7.18031C5.47031 2.75 4.07031 4.15 4.07031 5.86V19.95C4.07031 20.54 4.24031 20.98 4.54031 21.15C4.84031 21.32 5.31031 21.27 5.82031 20.98L10.7003 18.27C11.0703 18.06 11.5303 17.96 12.0003 17.96Z"
                  fill="#25292A"
                />
              </svg>
            ) : (
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
            )}
          </button>
          {/* Tooltip when archiving  */}
          {showTooltip && (
            <div className="absolute top-10 right-10 w-[300px] h-[48px]  flex items-center gap-2 bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] border border-gray-300 rounded-lg px-4 py-2 z-50 animate-fade-in">
              <div className="w-5 h-5  rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0003 1.66699C5.40866 1.66699 1.66699 5.40866 1.66699 10.0003C1.66699 14.592 5.40866 18.3337 10.0003 18.3337C14.592 18.3337 18.3337 14.592 18.3337 10.0003C18.3337 5.40866 14.592 1.66699 10.0003 1.66699ZM13.9837 8.08366L9.25866 12.8087C9.14199 12.9253 8.98366 12.992 8.81699 12.992C8.65033 12.992 8.49199 12.9253 8.37533 12.8087L6.01699 10.4503C5.77533 10.2087 5.77533 9.80866 6.01699 9.56699C6.25866 9.32533 6.65866 9.32533 6.90033 9.56699L8.81699 11.4837L13.1003 7.20033C13.342 6.95866 13.742 6.95866 13.9837 7.20033C14.2253 7.44199 14.2253 7.83366 13.9837 8.08366Z"
                    fill="#224674"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#25292A]">
                Video saved.
              </span>
            </div>
          )}

          {/* share button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="cursor-pointer"
          >
            <Image
              src="/Dashboard/videos/share-button.svg"
              alt=""
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
      {isDialogOpen && <ShareDialog onClose={() => setIsDialogOpen(false)} />}

      {/* Video Player Section */}
      <CustomVideoPlayer videoUrl={video.videoUrl} posterUrl={video.poster} />

      {/* Recommended and Date */}
      <div className="mt-6 flex ">
        {video.recommended && (
          <span className="bg-[#C8E4FC] rounded-full text-base font-medium text-[#224674] px-3 py-2">
            Recommended
          </span>
        )}
        <p className="text-gray-500 mt-2 ml-auto">{video.date}</p>
      </div>

      {/* Title and Description */}
      <div className="mt-4 ">
        <h1 className="text-[32px] font-semibold text-[#25292A]">
          {video.title}
        </h1>
        <p className="text-[#51595A] text-xl leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
}
