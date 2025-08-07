import { caseStudies } from "@/data/case-studies";
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
  let heading = "Case Studies";
  if (viewAll === "recommended") heading = "Recommended Case Studies";
  else if (viewAll === "saved") heading = "Saved Case Studies";

  return (
    <div className="p-4 md:py-10 bg-white max-w-[1128px] mx-auto">
      <div className="flex gap-4">
        <BackButton />
        <h1 className="text-3xl font-semibold">{heading}</h1>
      </div>
      <div className="flex flex-col w-full gap-3 mt-6">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="w-full relative">
            {/* card section */}
            <Link href={`/Dashboard/case-studies/${caseStudy.id}`}>
              <div
                key={index}
                className="bg-[#F2F5F6] w-full h-[140px] lg:h-[124px] rounded-lg flex p-3 gap-3"
              >
                {/* left Image */}
                <div className="relative w-[100px] h-full rounded-[12px] overflow-hidden flex-shrink-0">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover rounded-[12px]"
                    width={100}
                    height={100}
                  />
                </div>

                {/* content section */}
                <div className="flex flex-col justify-between gap-2 w-full">
                  <div className="relative flex flex-col">
                    {caseStudy.recommended && viewAll !== "recommended" && (
                      <span className="bg-[#C8E4FC] rounded-xl text-xs font-medium text-[#224674] px-2 py-1 w-fit">
                        Recommended
                      </span>
                    )}
                    <h3 className=" text-lg sm:text-xl xl:text-2xl font-semibold text-[#25292A] line-clamp-2   lg:h-auto">
                      {caseStudy.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#626D6F] font-medium text-sm">
                      {caseStudy.date}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* archive button */}
            <ArchivePodcast index={Number(caseStudy.id)} />
          </div>
        ))}
      </div>

      {viewAll !== "recommended" && (
        <div className="flex justify-center mt-10">
          <button className="basis-[342px] h-[48px] bg-blue-100 text-[#224674] rounded-full text-base font-semibold hover:bg-blue-200 transition-all">
            Load more case studies
          </button>
        </div>
      )}
    </div>
  );
}
