import { caseStudies } from "@/data/case-studies";
import PreptideArticle from "../../components/PreptideArticle";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedId = await params;
  const { id } = resolvedId;

  const article = caseStudies.find((data) => data.id === id);

  if (!article) {
    notFound();
  }

  return <PreptideArticle Obj={article} page="case-studies" />;
}

// import { caseStudies } from "@/data/case-studies";
// import PreptideArticle from "../../components/PreptideArticle";

// export async function generateStaticParams() {
//   return caseStudies.map((video) => ({
//     id: video.id,
//   }));
// }

// export default async function Page({ params }: { params: { id: string } }) {
//   const { id } = await params
//   const article = caseStudies.find((data) => data.id === id);

//   if (!article) return <div>Video not found</div>;

//   return <PreptideArticle Obj={article} page="case-studies" />;
// }
