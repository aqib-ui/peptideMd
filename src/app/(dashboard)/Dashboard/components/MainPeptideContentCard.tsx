import Image from "next/image";
import React from "react";

export default function MainPeptideContentCard({ obj }: any) {
  // Define the fields to display with their icons and labels
  const peptideFields = [
    {
      key: "nuda_name",
      label: "Nuda Name",
      icon: "/Dashboard/pep-database/nudu-name.svg",
    },
    {
      key: "primary_applications",
      label: "Primary Application",
      icon: "/Dashboard/pep-database/primary-application.svg",
    },
    {
      key: "fda_status",
      label: "FDA Status",
      icon: "/Dashboard/pep-database/fda.svg",
    },
    {
      key: "fda_description",
      label: "FDA Description",
      icon: "/Dashboard/pep-database/fda-description.svg",
    },
    {
      key: "protocol_duration",
      label: "Protocol Duration",
      icon: "/Dashboard/pep-database/duration.svg",
    },
    {
      key: "experience_level",
      label: "Experience Level",
      icon: "/Dashboard/pep-database/chart.svg",
    },
    {
      key: "side_effect_profile",
      label: "Side Effect Profile",
      icon: "/Dashboard/pep-database/side-effect.svg",
    },
    {
      key: "popular_combinations",
      label: "Popular Combinations",
      icon: "/Dashboard/pep-database/pop-comb.svg",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Information Grid */}
      <div className="grid grid-cols-1 gap-2">
        <div className="text-[#25292A] text-[32px] font-semibold">
          <h2>
            {obj.title} <q>nuda {obj.nuda_name}</q>
          </h2>
        </div>

        {/* Map through peptide fields */}
        {peptideFields.map(
          (field) =>
            obj[field.key] && (
              <div key={field.key} className="flex flex-col">
                <div className="flex">
                  <Image
                    src={field.icon}
                    alt="peptide"
                    width={32}
                    height={32}
                  />
                  <h2 className="pl-1 text-lg text-[#51595A]">{field.label}</h2>
                </div>
                <p className="text-[#25292A] text-lg font-medium pl-9 -mt-2">
                  {obj[field.key]}
                </p>
              </div>
            )
        )}
      </div>
      {/* ----------peptide content---------------- */}
      <div className="flex flex-col gap-4 pb-6">
        {/* Content Section */}
        <div className="">
          <div
            className="text-[#25292A] text-xl font-medium max-w-none"
            dangerouslySetInnerHTML={{ __html: obj.content }}
          />
        </div>
      </div>
    </div>
  );
}

/* <div className="">
             <h2 className="text-2xl font-semibold text-[#25292A] mb-2">
               Historical Context
             </h2>
             <p className="text-[#51595A] text-xl ">
               AOD-9604 emerged from research in the late 1990s at Monash
               University in Australia, where scientists were investigating ways
               to isolate and enhance specific benefits of human growth hormone
               while minimizing unwanted effects. Researchers identified the
               fat-reducing region of the growth hormone molecule (amino acids
               176-191) and modified it to create this specialized peptide
               fragment. Innovative. The initial premise was
               revolutionary—harness the metabolic benefits of growth hormone
               without stimulating growth, affecting insulin sensitivity, or
               triggering other systemic changes. Early animal studies showed
               promising results for fat loss without adverse effects on blood
               sugar, and human research began in the early 2000s with a focus on
               obesity treatment. Though initially developed as a potential
               pharmaceutical for obesity, AOD-9604 has since found its place in
               the precision wellness space, where its targeted approach to fat
               metabolism continues to be studied and refined
             </p>
           </div> */
