// components/CustomVideoPlayer.tsx
import React, { useRef, useState, useEffect } from "react";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
}

const CustomVideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00:00");
  const [duration, setDuration] = useState("10:44");

  // Format time as H:MM:SS
  const formatTime = (seconds: number): string => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Initialize video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  // Play/Pause handler
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Progress bar update
  const handleProgress = () => {
    const video = videoRef.current;
    if (!video) return;

    const percent = (video.currentTime / video.duration) * 100;
    setProgress(percent);
    setCurrentTime(formatTime(video.currentTime));
  };

  // Skip forward 15 seconds
  const skipForward = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.min(video.currentTime + 15, video.duration);
  };

  // Skip backward 15 seconds
  const skipBackward = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = Math.max(video.currentTime - 15, 0);
  };

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const progressBar = e.currentTarget;
    const clickPosition =
      (e.clientX - progressBar.getBoundingClientRect().left) /
      progressBar.offsetWidth;
    video.currentTime = clickPosition * video.duration;
  };

  return (
    <div className=" w-full  rounded-xl  overflow-hidden ">
      {/* Video Container */}
      <div className="relative w-full h-[580px] overflow-hidden ">
        <video
          ref={videoRef}
          className="w-full object-cover h-full"
          onTimeUpdate={handleProgress}
          onClick={togglePlay}
          poster={posterUrl}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser doesn't support videos.
        </video>
        {/* Custom Controls Container - Positioned at bottom-4 */}
        <div className="absolute bottom-4 left-10 right-10 pt-4.5 px-3.5 bg-[rgba(37,37,37,.70)] rounded-2xl  h-[100px]">
          {/* Progress Bar */}
          <div
            className="h-1.25 w-full bg-[rgba(93,93,108,0.32)] mb-3 rounded-full cursor-pointer relative"
            onClick={handleProgressClick}
          >
            {/* Progress thumb/circle */}
            <div
              className="absolute top-1/2 w-3 h-3 bg-white rounded-full transform -translate-y-1/2 -translate-x-1/2"
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          {/* Time Display */}
          <div className="flex justify-between text-white text-sm mb-4 px-1">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>

          {/* Control Buttons - Only 3 buttons as requested */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center space-x-8 pb-1.5  ">
            {/* Backward 15s Button */}
            <button
              onClick={skipBackward}
              className="text-white hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
               className="w-6 h-6"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M9.7373 20.4632C14.7734 20.4632 18.9219 16.3148 18.9219 11.2786C18.9219 6.89289 15.7842 3.18391 11.6445 2.29621V0.969065C11.6445 0.257151 11.0908 0.0550022 10.4932 0.485666L7.39941 2.70051C6.91602 3.05207 6.9248 3.59699 7.39941 3.93977L10.4844 6.1634C11.082 6.59406 11.6445 6.40071 11.6445 5.68V4.41438C14.6592 5.24055 16.8564 7.99153 16.8564 11.2786C16.8564 15.2249 13.6836 18.4066 9.7373 18.4066C5.79102 18.4066 2.60938 15.2249 2.61816 11.2786C2.62695 9.055 3.6377 7.11262 5.24609 5.80305C5.70312 5.37239 5.85254 4.77473 5.46582 4.29133C5.11426 3.84309 4.47266 3.78156 3.92773 4.24739C1.89746 5.80305 0.552734 8.53645 0.552734 11.2786C0.552734 16.3148 4.70117 20.4632 9.7373 20.4632ZM7.29395 15.0228C7.72461 15.0228 7.99707 14.7327 7.99707 14.2757V8.90559C7.99707 8.31672 7.67188 8.0091 7.16211 8.0091C6.85449 8.0091 6.6084 8.10578 6.24805 8.39582L5.16699 9.20442C4.91211 9.42414 4.79785 9.6175 4.79785 9.87239C4.79785 10.2152 5.06152 10.4876 5.39551 10.4876C5.61523 10.4876 5.74707 10.4349 5.92285 10.2415L6.59082 9.67024H6.59961V14.2757C6.59961 14.7327 6.87207 15.0228 7.29395 15.0228ZM11.6621 15.0931C13.1562 15.0931 14.1318 14.1351 14.1318 12.6497C14.1318 11.3226 13.2354 10.4525 12.0752 10.4525C11.5215 10.4525 10.9766 10.7161 10.7305 11.138L10.8623 9.32746H13.3057C13.6572 9.32746 13.9121 9.07258 13.9121 8.70344C13.9121 8.3343 13.6572 8.09699 13.3057 8.09699H10.5195C10.0186 8.09699 9.72852 8.40461 9.69336 8.95832L9.52637 11.4456C9.49121 11.9378 9.76367 12.2103 10.2119 12.2103C10.5635 12.2103 10.6865 12.1312 10.9062 11.9554C11.1963 11.7093 11.4424 11.5775 11.7764 11.5775C12.4004 11.5775 12.7871 12.0345 12.7871 12.6937C12.7871 13.3616 12.3301 13.8626 11.6973 13.8626C11.2139 13.8626 10.8447 13.5814 10.6162 13.1947C10.4844 12.9925 10.3262 12.8695 10.0625 12.8695C9.71094 12.8695 9.46484 13.1243 9.46484 13.4847C9.46484 13.6165 9.48242 13.7484 9.55273 13.889C9.79004 14.4779 10.5723 15.0931 11.6621 15.0931Z"
                  fill="white"
                />
              </svg>
              <span className="sr-only">Skip backward 15 seconds</span>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="text-white  hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-colors shadow-lg"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                 className="w-6 h-6"
                  viewBox="0 0 22 23"
                  fill="none"
                >
                  <path
                    d="M2.85156 22.7246C3.41016 22.7246 3.90527 22.5342 4.54004 22.166L19.6094 13.4316C20.7393 12.7842 21.2471 12.2383 21.2471 11.3623C21.2471 10.499 20.7393 9.95312 19.6094 9.29297L4.54004 0.558594C3.90527 0.19043 3.41016 0 2.85156 0C1.74707 0 0.921875 0.850586 0.921875 2.20898V20.5156C0.921875 21.8867 1.74707 22.7246 2.85156 22.7246Z"
                    fill="white"
                  />
                </svg>
              )}
              <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
            </button>

            {/* Forward 15s Button */}
            <button
              onClick={skipForward}
              className="text-white  hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 19 21"
                fill="none"
              >
                <path
                  d="M0.24707 11.2679C0.24707 16.2952 4.38672 20.4349 9.41406 20.4349C14.4414 20.4349 18.5811 16.2952 18.5811 11.2679C18.5811 8.50814 17.2188 5.78353 15.1709 4.21029C14.6348 3.77083 14.0107 3.82357 13.6768 4.27181C13.2988 4.74642 13.4482 5.3265 13.8965 5.73958C15.5312 7.05794 16.5596 9.0179 16.5684 11.2679C16.5771 15.2318 13.3779 18.4222 9.41406 18.4222C5.4502 18.4222 2.26855 15.2318 2.26855 11.2679C2.26855 7.95443 4.4834 5.19466 7.52441 4.38607V5.63411C7.52441 6.33724 8.07812 6.53939 8.6582 6.11751L11.7256 3.92025C12.2002 3.58626 12.2002 3.05013 11.7256 2.70736L8.66699 0.51009C8.07812 0.0882148 7.52441 0.281574 7.52441 0.993488V2.30306C3.39355 3.18196 0.24707 6.89095 0.24707 11.2679ZM6.95312 14.9945C7.375 14.9945 7.64746 14.7132 7.64746 14.2562V8.87728C7.64746 8.30599 7.33105 7.99837 6.82129 7.99837C6.52246 7.99837 6.28516 8.09505 5.9248 8.3763L4.84375 9.18489C4.58887 9.40462 4.47461 9.58919 4.47461 9.84407C4.47461 10.1781 4.73828 10.4593 5.06348 10.4593C5.2832 10.4593 5.41504 10.3978 5.58203 10.2132L6.25879 9.64193H6.26758V14.2562C6.26758 14.7132 6.54004 14.9945 6.95312 14.9945ZM11.3301 15.0736C12.8242 15.0736 13.791 14.1156 13.791 12.639C13.791 11.3118 12.9033 10.4417 11.7344 10.4417C11.1807 10.4417 10.6357 10.6966 10.3896 11.1185L10.5215 9.30794H12.9736C13.3252 9.30794 13.5801 9.05306 13.5801 8.69271C13.5801 8.33236 13.3252 8.09505 12.9736 8.09505H10.1963C9.69531 8.09505 9.41406 8.40267 9.37891 8.9388L9.20312 11.4261C9.16797 11.9183 9.44043 12.182 9.87988 12.182C10.2314 12.182 10.3545 12.1117 10.5742 11.9359C10.873 11.681 11.1191 11.5492 11.4443 11.5492C12.0771 11.5492 12.4727 12.015 12.4727 12.6742C12.4727 13.3509 12.0068 13.8607 11.374 13.8607C10.8818 13.8607 10.5127 13.5794 10.2754 13.1927C10.1436 12.9818 9.98535 12.8587 9.73047 12.8587C9.37891 12.8587 9.13281 13.1048 9.13281 13.4564C9.13281 13.597 9.15918 13.7201 9.2207 13.8695C9.45801 14.4583 10.2402 15.0736 11.3301 15.0736Z"
                  fill="white"
                />
              </svg>
              <span className="sr-only">Skip forward 15 seconds</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
