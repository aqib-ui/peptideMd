
import { podcast } from "@/data/podcast";
import VideoDetailClient from "../../components/videoDetails";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedId = await params;
  const { id } = resolvedId;

  const video = podcast.find((podcasts) => podcasts.id === id);

  if (!video) {
    notFound();
  }

  return <VideoDetailClient video={video} page="podcast" />;
}



// import { podcast } from "@/data/podcast";
// import VideoDetailClient from "../../components/videoDetails";

// export async function generateStaticParams() {
//   return podcast.map((podcast) => ({
//     id: podcast.id, // ✅ id as string for URL params
//   }));
// }

// export default async function Page({ params }: { params: { id: string } }) {
//    const { id } = await params
//    const video = podcast.find((data) => data.id === id);

//   if (!video) return <div>Video not found</div>;

//   return <VideoDetailClient video={video} page="podcast" />;
// }
