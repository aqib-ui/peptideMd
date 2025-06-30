import { Suspense } from "react";
import VideoContent from "./VideoContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Videos...</div>}>
        <VideoContent />
    </Suspense>
  );
}