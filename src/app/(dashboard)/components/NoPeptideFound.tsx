import Image from "next/image";
import React from "react";

export default function NoPeptideFound() {
  return (
    <td className="  flex flex-col justify-center items-center max-w-[100px] whitespace-nowrap">
      <div>
        <Image
          src="/Dashboard/NoPeptideFound.png"
          alt="No Peptide Found"
          width={96}
          height={96}
          className="mx-auto mb-4  mt-16"
        />
      </div>
      <h2 className="text-2xl font-semibold text-[#25292A] mt-4 text-center">
        No Peptide Found
      </h2>
      <p className="text-lg  text-[#51595A] mt-2 text-center mb-16  ">
        No peptide found based on your result. Try to find a different peptide
      </p>
    </td>
  );
}
