'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SidebarContentProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}



export default function SidebarContent({ isOpen, setIsOpen }: SidebarContentProps) {

 const handleMenuClick = () => {
    // setIsOpen(!isOpen);
    console.log("Menu button clicked");
  }

  

    return (
    <div
      className={`fixed inset-0 bg-app shadow-2xl z-50 \
        transform transition-transform duration-300 ease-in-out \
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Header Section with Logo & Close Button */}
      <div className="absolute top-4 left-4 right-4 px-6 flex justify-between items-center z-10">
        <Link href="/" onClick={handleMenuClick}>
          <Image
            src="/headerIcon/logo.png"
            alt="Logo"
            width={200}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="relative w-[70px] h-[70px] focus:outline-none flex items-center justify-center cursor-pointer"
          aria-label="Close Menu"
        >
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] \
              rounded-full p-[2.5px] opacity-40"
          ></div>

          <div className="absolute inset-[2.5px] bg-app rounded-full flex items-center justify-center z-10">
            <Image
              src="/headerIcon/minimize.png"
              alt="Close"
              width={50}
              height={50}
            />
          </div>
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex items-center justify-center h-full bg-app">
        <div
          className="relative flex flex-wrap items-center justify-center gap-0 xl:gap-6 \
            [@media(min-width:1400px)]:gap-y-8 [@media(min-width:1400px)]:gap-x-20 [@media(min-width:1500px)]:gap-x-24 \
            [@media(min-width:1600px)]:gap-x-48 p-8 xl:p-4 [@media(min-width:1700px)]:px-36 [@media(min-width:1700px)]:pt-32 \
            w-full max-w-[95%] sm:max-w-[48%] xl:max-w-[55%] [@media(min-width:1700px)]:max-w-[65.278%] \
            min-h-[470px] xl:min-h-[500px] 2xl:min-h-[550px] [@media(min-width:1700px)]:min-h-[704px] \
            mr-6 ml-6 mx-auto mt-8 max-md:mt-16 2xl:mt-16 [@media(min-width:1700px)]:mt-24 transition-all duration-300 ease-in-out"
        >
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] p-[4px] opacity-70 \
              rounded-[12rem] [@media(min-width:1700px)]:rounded-[15rem] rounded-tr-[4rem] [@media(min-width:1700px)]:rounded-tr-[5rem]"
          ></div>

          <div
            className="absolute inset-[2px] bg-app rounded-[12rem] [@media(min-width:1700px)]:rounded-[15rem] \
            rounded-tr-[4rem] [@media(min-width:1700px)]:rounded-tr-[5rem] z-10"
          ></div>

          <ul className="text-gray-900 txt-34 text-app xl:mt-10 mt-3 font-semibold space-y-8 max-xl:space-y-3 z-10">
            {/** Primary Links **/}
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 11.png" alt="Overview Icon" width={30} height={30} />
              <Link href="/" className="hover:text-blue-500 leading-[100%] font-afacad">
                Overview
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 12.png" alt="Peptide Database Icon" width={30} height={30} />
              <Link href="/PeptideDatabase" className="hover:text-blue-500 leading-[100%] font-afacad">
                Peptide Database
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 13.png" alt="Taking Peptides Icon" width={30} height={30} />
              <Link href="/TakingPeptide" className="hover:text-blue-500 leading-[100%] font-afacad">
                Taking Peptides
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 14.png" alt="Dosage Simulator Icon" width={30} height={30} />
              <Link href="/DosageSimulator" className="hover:text-blue-500 leading-[100%] font-afacad">
                Dosage Simulator
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 15.png" alt="Resources Icon" width={30} height={30} />
              <Link href="/Resources" className="hover:text-blue-500 leading-[100%] font-afacad">
                Resources
              </Link>
            </li>
          </ul>

          <ul className="text-gray-900 txt-34 text-app xl:mt-10 mt-3 font-semibold space-y-8 max-xl:space-y-3 z-10 pb-[1rem] xl:pb-[4rem]">
            {/** Secondary Links **/}
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 21.png" alt="AI Assistant Icon" width={30} height={30} />
              <Link href="/AiAssistant" className="hover:text-blue-500 leading-[100%] font-afacad">
                AI Assistant
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 22.png" alt="Case Studies Icon" width={30} height={30} />
              <Link href="/CaseStudies" className="hover:text-blue-500 leading-[100%] font-afacad">
                Case Studies
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 23.png" alt="Research Updates Icon" width={30} height={30} />
              <Link href="/Location" className="hover:text-blue-500 leading-[100%] font-afacad">
                Research Updates
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <Image src="/headerIcon/Group 24.png" alt="Discussion Forum Icon" width={30} height={30} />
              <Link href="/Discussion" className="hover:text-blue-500 leading-[100%] font-afacad">
                Discussion Forum
              </Link>
            </li>
          </ul>

          {/* Buttons for Signup and Login */}
          <div className="flex items-center justify-center gap-1 sm:gap-4 z-10">
              <Link href="/Signup" className="txt-18 font-semibold">
            <button className="bg-[#224674] w-auto h-auto xl:w-[174px] xl:h-[56px] text-white px-6 py-2 rounded-full transition-colors duration-300">
                Signup
            </button>
              </Link>
              <Link href="/Login" className="txt-18 font-semibold">
            <button className="bg-[#C8E4FC] text-[#224674] w-auto h-auto xl:w-[174px] xl:h-[56px] px-6 py-2 rounded-full transition-colors duration-300">
                Log In
            </button>
              </Link>
          </div>
        </div>

        {/* Decorative PNGs */}
        <div className="absolute inset-0">
          <Image
            src="/headerIcon/small-red.png"
            alt="small Red"
            width={40}
            height={40}
            className="absolute hidden xl:block top-[10.5%] left-[88%] 2xl:top-[10.5%] 2xl:left-[90%]"
          />
          <Image
            src="/headerIcon/big-red.png"
            alt="big Red"
            width={70}
            height={70}
            className="absolute hidden xl:block top-[13%] left-[81%] 2xl:top-[14%] 2xl:left-[84%]"
          />
          <Image
            src="/headerIcon/big-blue.png"
            alt="Big blue"
            width={40}
            height={40}
            className="absolute hidden xl:block top-[88%] left-[17%]"
          />
          <Image
            src="/headerIcon/small-blue.png"
            alt="Small blue"
            width={20}
            height={20}
            className="absolute hidden xl:block top-[94%] left-[13%]"
          />
        </div>
      </div>
    </div>
  );
}
