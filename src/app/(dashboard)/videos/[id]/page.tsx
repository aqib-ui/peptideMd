// import { videos } from "@/data/videos";
// import VideoDetailClient from "../../components/videoDetails";
// // export const dynmicParmas = false
// export async function generateStaticParams() {
//   return videos.map((video) => ({
//     id: video.id,
//   }));
// }

// export default async function Page({ params }: { params: { id: string } }) {
//   const { id } = await params
//   const video = videos.find((v) => v.id === id);

//   if (!video) return <div>Video not found</div>;

//   return <VideoDetailClient video={video} page="videos" />;
// }

// ==============================================================================

import { videos } from "@/data/videos";
import VideoDetailClient from "../../components/videoDetails";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedId = await params;
  const { id } = resolvedId;

  const video = videos.find((v) => v.id === id);

  if (!video) {
    notFound(); 
  }

  return <VideoDetailClient video={video} page="videos" />;
}
