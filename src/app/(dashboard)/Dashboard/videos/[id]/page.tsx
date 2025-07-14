import { videos } from "@/data/videos";
import VideoDetailClient from "../../components/videoDetails";
// export const dynmicParmas = false
export async function generateStaticParams() {
  return videos.map((video) => ({
    id: video.id,
  }));
  // return [
  //   { id: "1" },
  //   { id: "2" },
  //   { id: "3" },
  // ];
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const video = videos.find((v) => v.id === id);

  if (!video) return <div>Video not found</div>;

  return <VideoDetailClient video={video} page="videos" />;
}
