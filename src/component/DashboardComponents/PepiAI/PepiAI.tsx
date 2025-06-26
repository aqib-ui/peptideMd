import Image from "next/image";
import Link from "next/link";

export default function PepiAI() {
  return (
    <div className="bg-[#C8E4FC] px-4 [@media(min-width:1600px)]:px-8 py-4 rounded-xl flex justify-between max-sm:gap-4">
      {/* Left section: Text + Link button */}
      <div className="px-2 sm:px-4 sm:py-4 h-[166px] flex flex-col justify-evenly sm:justify-between">
        <h2 className="txt-32 font-semibold text-[#224674]">
          Hi, I am Pepi!Your AI friend
        </h2>
        <Link
          href="/AiAssistant"
          className="rounded-[48px] bg-[#224674] text-white txt-18 font-medium text-center flex items-center justify-center sm:w-[152px] sm:h-[56px] sm:px-6 py-2 sm:py-4"
        >
          Start a Chat
        </Link>
      </div>

      {/* Right section: Image */}
      <div className="flex justify-center items-center sm:mr-6">
        <Image
          src="/Dashboard/hapiAtom.png"
          alt="Injection"
          width={140}
          height={127}
          className="object-contain w-[140px] h-[127px] "
        />
      </div>
    </div>
  );
}
