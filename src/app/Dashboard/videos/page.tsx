
import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    id: "what-peptides-do",
    title: "What Peptides Can Actually Do for Your Body",
    image: "/dashboard/videos/purpleBlock.jpg",
    description:
      "Discover how peptides influence muscle growth, fat loss, skin health, and overall recovery. This video breaks down the science behind peptides in a simple, engaging way — perfect for beginners and enthusiasts alike.",
    date: "May 1, 2025",
    recommended: true,

  },
  {
    id: "choosing-right-peptides",
    title: "Choosing the Right Peptides for Your Health Goals",
    image: "/dashboard/videos/bottle.jpg",
    description: "This video helps you choose the best peptide for your needs. if you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 3, 2019",
    recommended: true,
  },
  {
    id: "peptides-safely-1",
    title: "How to Use Peptides Safely and Effectively",
    description:
      "Learn the safe and effective usage of peptides in this guide. so if you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2021",
    image: "/dashboard/videos/insulin.jpg",
    recommended: false,
  },
  {
    id: "peptides-safely-2",
    title: "How to Use Peptides Safely and Effectively",
    description:
      "For beginners and enthusiasts alike and if you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2005",
    image: "/dashboard/videos/purpleBlock.jpg",
    recommended: false,
  },
  {
    id: "peptides-safely-3",
    title: "How to Use Peptides Safely and Effectively",
    description:
      "Learn the safe and effective usage of peptides in this guide. My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2002",
    image: "/dashboard/videos/bottle.jpg",
    recommended: true,
  },
  {
    id: "therapeutic-medicines",
    title: "Therapeutic of Medicines",
    description: "Learn the safe and effective usage of peptides in this guide. My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2010",
    image: "/dashboard/videos/insulin.jpg",
    recommended: false,
  },
  {
    id: "peptides-safely-4",
    title: "How to Use Peptides Safely and Effectively",
    description:"if you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals. My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2032",
    image: "/dashboard/videos/purpleBlock.jpg",
    recommended: true,
  },
  {
    id: "peptides-safely-5",
    title: "How to Use Peptides Safely and Effectively",
    description:"My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2032",
    image: "/dashboard/videos/bottle.jpg",
    recommended: false,
  },
  {
    id: "peptides-safely-6",
    title: "How to Use Peptides Safely and Effectively",
    description:"My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2032",
    image: "/dashboard/videos/insulin.jpg",
    recommended: false ,
  },
];
export default function VideoGrid() {
  return (
    <div className="p-4 md:py-10 bg-white max-w-[1128px] mx-auto">
      <div className="flex gap-4">
         <Link href="/dashboard"><img src="/dashboard/videos/left-arrow.svg" alt="left-arrows" /></Link>
        <h1 className="text-3xl font-semibold">Videos</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-6">
        {videos.map((video) => (
          <Link href={`/dashboard/videos/${video.id}`} key={video.id}>
            <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
              <Image
                src={video.image}
                alt={video.title}
                width={400}
                height={250}
                className="w-full h-70 object-cover"
              />
              {video.recommended && (
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
