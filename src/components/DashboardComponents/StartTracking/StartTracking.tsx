import Image from "next/image";

export default function StartTracking() {
  return (
    <div className="bg-[#224674] px-4 [@media(min-width:1600px)]:px-8 py-4 rounded-xl flex justify-between max-sm:gap-4">
     {/* left section: heading */}
     <div className="px-2 sm:px-4 sm:py-4 h-[166px] flex flex-col justify-evenly sm:justify-between">
       <h2 className="txt-32  font-semibold text-white">
        Start Tracking your Peptide
      </h2>
      {/* <button className=" rounded-[48px] bg-[#C8E4FC] text-[#224674] txt-18 font-medium w-[200px] h-[56px]">
        Manage Peptide Plan
      </button> */}
      
      <button className="rounded-[48px] bg-[#C8E4FC] text-[#224674] txt-18 font-medium 
      sm:w-[200px] sm:h-[56px] sm:px-6 py-2 sm:py-4">
        Manage Peptide Plan
      </button>
     </div>

     {/* Right section: Image */}
      <div className="flex justify-center items-center sm:mr-6">
        <Image
          src="/Dashboard/injection.png"
          alt="Injection"
          width={96}
          height={96}
          className="object-contain"
        />
      </div>
    </div>
  );
}
