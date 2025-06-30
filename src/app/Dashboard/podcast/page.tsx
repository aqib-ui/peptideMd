import { Suspense } from "react";
import PodcastContent from "./PodcastContent";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading Podcast...</div>}>
        <PodcastContent />
    </Suspense>
  );
}