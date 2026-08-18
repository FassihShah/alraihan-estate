import { Suspense } from "react";
import RequestPageClient from "./RequestPageClient";

export default function RequestPage() {
  return (
    <Suspense fallback={null}>
      <RequestPageClient />
    </Suspense>
  );
}
