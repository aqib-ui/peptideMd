

import { Suspense } from "react";
import SignupClientPage from "./SignupClientPage";

// export const dynamic = "force-dynamic";

export default function SignupPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupClientPage />
    </Suspense>
  );
}