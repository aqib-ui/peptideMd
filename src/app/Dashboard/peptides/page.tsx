import { Suspense } from "react";
import PeptidesContent from "./PeptidesContent";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading Videos...</div>}>
      <PeptidesContent/>
    </Suspense>
  );
}