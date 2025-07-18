import { Suspense } from "react";
import SignupClientPage from "./SignupClientPage";
export default function SignupPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupClientPage />
    </Suspense>
  );
}
