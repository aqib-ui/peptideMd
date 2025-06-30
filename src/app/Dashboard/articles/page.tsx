// Dashboard/articles/page.js
import { Suspense } from "react";
import ArticleContent from "./ArticlesContent";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading articles...</div>}>
      <ArticleContent />
    </Suspense>
  );
}