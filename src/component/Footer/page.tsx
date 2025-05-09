import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // <footer className="bg-app text-white  px-6 md:px-10 flex flex-col" style={{ backgroundColor: '#0a0a0a' }}>
<footer className="px-6 md:px-10 flex flex-col bg-[#0a0a0a] text-white">

    {/* <footer
  className="bg-app text-app px-6 md:px-10 flex flex-col"
  style={{ backgroundColor: '#1F1F1F' }}
> */}

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row  sm:flex-wrap justify-between mt-10 sm:mt-20 lg:mt-40">
        {/* Left-aligned Content */}
        <div className="max-w-3xl ml-[-10px] ">
          <Image
            src="/footerlogo.png"
            alt="Logo"
            width={280}
            height={120}
            layout="intrinsic"
            className="ml-[-20px] self-start" // Keeps alignment correct
          />
          <p
            className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] leading-[130%] mt-6 mb-10"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            PeptideMD.com is your trusted platform for exploring the world of
            peptides. Whether you&apos;re looking for in-depth information on
            specific peptides, the latest research, clinical applications, or
            expert-guided &quot;how-to&quot; resources, we&apos;ve got you
            covered. Engage with a knowledgeable community on our moderated
            discussion board and stay ahead with cutting-edge insights. Start
            your journey to understanding and optimizing peptides today!
          </p>
        </div>

        {/* Right-aligned Lists */}
        <div
          className="flex flex-col md:flex-row gap-20 mt-10 md:mt-0"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          <ul className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] space-y-9">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500"
              >
                Overview
              </Link>
            </li>
            <li>
              <a href="/PeptideDatabase" className="hover:text-blue-500">
                Peptide Database
              </a>
            </li>
            <li>
              <a href="/TakingPeptide" className="hover:text-blue-500">
                Taking Peptides
              </a>
            </li>
            <li>
              <a href="/DosageSimulator" className="hover:text-blue-500">
                Dosage Simulator
              </a>
            </li>
            <li>
              <a href="/Resources" className="hover:text-blue-500">
                Resources
              </a>
            </li>
          </ul>

          <ul className="text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] space-y-9">
            <li>
              <a href="#" className="hover:text-blue-500">
                AI Assistant
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Research Updates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Discussion Forum
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered Copyright Text with Full-Width Separator */}
      <div className="mt-10 md:mt-30 w-full">
        <hr className="border-t border-gray-600 w-full mb-4" />
        <div
          className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-10 text-center"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          <p className="text-[18px] md:text-[24px]">
            © {new Date().getFullYear()} Nuda Peptide Therapeutics, All Rights
            Reserved
          </p>
          <p className="text-[18px] md:text-[24px]">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
