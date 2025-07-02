import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 flex flex-col bg-[#1F1F1F] text-white ">
      {/* Top Section */}
      <div className=" flex flex-col sm:flex-row  sm:flex-wrap justify-between mt-10 md:pr-3  ">
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
            className="text-[clamp(18px,0.43vw+16.63px,22px)] leading-[130%] mt-3  mb-10"
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
          className="flex flex-col md:flex-row items-center gap-20 mt-10 md:mt-0"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          <ul className="text-[clamp(18px,0.43vw+16.63px,22px)] space-y-6">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/videos" className="hover:text-blue-500">
                Videos
              </Link>
            </li>
            <li>
              <Link href="/Dashboard/articles" className="hover:text-blue-500">
                Articles
              </Link>
            </li>
          </ul>

          <ul className="text-[clamp(18px,0.43vw+16.63px,22px)] space-y-6">
            <li>
              {/* <a href="/AiAssistant" className="hover:text-blue-500">
                    AI Assistant
                  </a> */}
              <Link href="/AiAssistant" className="hover:text-blue-500">
                Peptide Database
              </Link>
            </li>

            <li>
              <Link href="/Dashboard/podcast" className="hover:text-blue-500">
                Podcast
              </Link>
            </li>
            <li>
              <Link
                href="/Dashboard/case-studies"
                className="hover:text-blue-500"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Centered Copyright Text with Full-Width Separator */}
      <div className="mt-10 w-full">
        <hr className="border-t border-gray-600 w-full mb-4" />
        <div
          className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-20 [@media(min-width:1600px)]:space-x-30 text-center"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          <p className="text-[clamp(18px,0.43vw+16.63px,22px)]">
            © {new Date().getFullYear()} Nuda Peptide Therapeutics, All Rights
            Reserved
          </p>
          {/* <p className="text-[clamp(18px,0.43vw+16.63px,24px)]">
                Privacy Policy | Terms & Conditions
              </p> */}
          <p className="text-[clamp(18px,0.43vw+16.63px,22px)]">
            Privacy Policy
            <span className="px-4">|</span>
            Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
}

//  <footer className="bg-[#F2F5F6] py-2">
//         <div className="max-w-[1440px] sm:mx-auto sm:px-6 grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:gap-1 items-center text-[#25292A] txt-16 font-medium">
//         {/* Left: Links */}
//         <p className="text-left max-md:text-center">
//           Privacy Policy <span className="px-4">|</span> Terms & Conditions
//         </p>

//         {/* Center: Always centered */}
//         <span className="text-center">
//           © 2025, Nuda Peptide Therapeutics, All Rights Reserved
//         </span>

//         {/* Right: Social Icons */}
//         <div className="flex justify-end max-md:justify-center gap-4 text-[#224674] text-lg">
//           <FaFacebookF />
//           <FaLinkedinIn />
//           <AiFillInstagram />
//           <FaXTwitter />
//         </div>
//       </div>
//     </footer>
