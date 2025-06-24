import VideoDetailClient from "./videoDetails";

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
    description:
      "This video helps you choose the best peptide for your needs. if you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
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
    description:
      "Learn the safe and effective usage of peptides in this guide. My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2010",
    image: "/dashboard/videos/insulin.jpg",
    recommended: false,
  },
  {
    id: "peptides-safely-4",
    title: "How to Use Peptides Safely and Effectively",
    description:
      "if you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals. My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2032",
    image: "/dashboard/videos/purpleBlock.jpg",
    recommended: true,
  },
  {
    id: "peptides-safely-5",
    title: "How to Use Peptides Safely and Effectively",
    description:
      "My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2032",
    image: "/dashboard/videos/bottle.jpg",
    recommended: false,
  },
  {
    id: "peptides-safely-6",
    title: "How to Use Peptides Safely and Effectively",
    description:
      "My video is for beginners and enthusiasts alike. If you have a specific health goal or need, this video can help you find the right peptides to help you achieve your goals.",
    date: "May 5, 2032",
    image: "/dashboard/videos/insulin.jpg",
    recommended: false,
  },
];

// generateStaticParams
export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
}

// page
export default async function Page({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id === params.id);
  if (!video) return null;

  return <VideoDetailClient video={video} />;
}