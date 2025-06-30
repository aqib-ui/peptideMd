import { articles } from "@/data/articles";
import PreptideArticle from "../../components/PreptideArticle";

export async function generateStaticParams() {
  return articles.map((video) => ({
    id: video.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const article = articles.find((data) => data.id === id);

  if (!article) return <div>Video not found</div>;

  return <PreptideArticle Obj={article} page="articles" />;
}
