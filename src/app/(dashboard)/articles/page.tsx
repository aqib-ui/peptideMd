import { articles } from "@/data/articles";
import BackButton from "../components/BackButton";
import Image from "next/image";
import Link from "next/link";
import ArchivePodcast from "../components/ArchivePodcast";
type PageProps = {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { viewAll = "" } = searchParams ? await searchParams : {};

  // Dynamic heading based on viewAll
  let heading = "Articles";
  if (viewAll === "recommended") heading = "Recommended Articles";
  else if (viewAll === "saved") heading = "Saved Articles";

  return (
    <div className="p-4 md:py-10 bg-white max-w-[1128px] mx-auto">
      <div className="flex gap-4">
        <BackButton />
        <h1 className="text-3xl font-semibold">{heading}</h1>
      </div>
      <div className="flex flex-col w-full gap-3 mt-6">
        {articles.map((article, index) => (
          <div key={index} className="w-full relative">
            <Link href={`/Dashboard/articles/${article.id}`}>
              <div className="bg-[#F2F5F6] w-full rounded-lg flex flex-col gap-3 px-4 py-3">
                <div className="flex justify-between gap-3">
                  <div className="flex flex-col">
                    {article.recommended && viewAll !== "recommended" && (
                      <span className="bg-[#C8E4FC] rounded-xl text-xs font-medium text-[#224674] px-2 pb-1 w-fit">
                        Recommended
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold text-[#25292A] line-clamp-2   lg:h-auto ">
                      {article.title}
                    </h3>
                  </div>
                  <div className="relative overflow-hidden flex-shrink-0">
                    <Image
                      src={article.image}
                      alt="Peptide Thumbnail"
                      width={106}
                      height={72}
                      className="w-[106px] h-[72px] object-center rounded-[12px]"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#626D6F] font-medium text-sm py-1 ">
                    {article.date}
                  </p>
                </div>
              </div>
            </Link>
            {/* archive button */}
            <ArchivePodcast index={Number(article.id)} />
          </div>
        ))}
      </div>

      {viewAll !== "recommended" && (
        <div className="flex justify-center mt-10">
          <button className="basis-[342px] h-[48px] bg-blue-100 text-[#224674] rounded-full text-base font-semibold hover:bg-blue-200 transition-all">
            Load more articles
          </button>
        </div>
      )}
    </div>
  );
}

