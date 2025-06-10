import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // <footer className="bg-app text-white  px-6 md:px-10 flex flex-col" style={{ backgroundColor: '#0a0a0a' }}>
    <footer className="px-6 md:px-10 flex flex-col bg-[#1F1F1F] text-white">
      {/* <footer
  className="bg-app text-app px-6 md:px-10 flex flex-col"
  style={{ backgroundColor: '#1F1F1F' }}
> */}

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row  sm:flex-wrap justify-between mt-10 sm:mt-20 lg:mt-40">
        {/* Left-aligned Content */}
        <div className="max-w-3xl ml-[-10px]">
          <Link href="/">
            <Image
              src="/footerlogo.png"
              alt="Logo"
              width={280}
              height={120}
              layout="intrinsic"
              className="ml-[-20px] self-start cursor-pointer"
            />
          </Link>
          <p
            className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-[130%] mt-6 mb-10"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
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
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          <ul className="text-[clamp(18px,0.43vw+16.63px,24px)] space-y-9">
            <li>
              <Link href="/" className="hover:text-blue-500">
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

          <ul className="text-[clamp(18px,0.43vw+16.63px,24px)] space-y-9">
            <li>
              {/* <a href="/AiAssistant" className="hover:text-blue-500">
                AI Assistant
              </a> */}
              <Link href="/AiAssistant" className="hover:text-blue-500">
                AI Assistant
              </Link>
            </li>
            <li>
              <a href="/CaseStudies" className="hover:text-blue-500">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/Location" className="hover:text-blue-500">
                Research Updates
              </a>
            </li>
            <li>
              <a href="/Discussion" className="hover:text-blue-500">
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
          className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-20 [@media(min-width:1600px)]:space-x-30 text-center"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          <p className="text-[clamp(18px,0.43vw+16.63px,24px)]">
            © {new Date().getFullYear()} Nuda Peptide Therapeutics, All Rights
            Reserved
          </p>
          {/* <p className="text-[clamp(18px,0.43vw+16.63px,24px)]">
            Privacy Policy | Terms & Conditions
          </p> */}
          <p className="text-[clamp(18px,0.43vw+16.63px,24px)]">
            Privacy Policy
            <span className="px-4">|</span>
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}
