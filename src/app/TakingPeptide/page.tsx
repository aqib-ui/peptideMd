"use client";

import Image from "next/image";
import { MoleculeTopLeftAnimation } from "../MianComponent/page";

export default function TakingPeptide() {
  return (
    <>
      <div>
        <MoleculeTopLeftAnimation
          mainheading="Taking Peptides"
          span="Guide and Instruction"
          para="Always consult with a qualified healthcare provider before starting any peptide therapy. This guide is for educational purposes only and should not be considered medical advice."
        />
      </div>
    <div className="container bg-app px-4 py-10 w-full ">
      
      



      {/* General Guideline Section */}
      <div className="relative mt-10 sm:mt-22 md:mt-30 lg:mt-60 ">
        <h3
          className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-semibold leading-[100%]  md:ml-6 text-left"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          General Guideline
        </h3>
        
        
        <div className="hidden md:block absolute right-0 bottom-0 md:bottom-2 md:-right-48 lg:right-10">
    <Image
      src="/takingPeptide/image1.png"
      alt="pen image"
      width={324}
      height={308}
      className="w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
    />
  </div>

        {/* List with Background Color and Styled Hollow Circles */}
        <ul
          // className="min-w-[98vw] -mx-4 pl-10 rounded-[5rem] mt-6 space-y-1 list-none text-[#1F1F1F]"
          className="w-full px-4 md:px-10 -mx-4 pl-10 rounded-[5rem] mt-6 space-y-1 list-none "

          style={{
            // backgroundColor: "rgba(136, 211, 255, 0.3)",
            fontFamily: "Afacad, sans-serif",
          }}
        >
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Store peptides according to manufacturer specifications (usually
            refrigerated).
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Use sterile preparation techniques.
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Follow recommended dosing protocols.
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Monitor for any adverse reactions.
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Keep detailed records of administration and effects.
          </li>
        </ul>
      </div>

      {/* Admin Section */}
      <div className="relative mt-20 mb-25">
        <h3
          className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-semibold leading-[100%]  md:ml-6 text-left"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Adminsitration Methods
        </h3>

        {/* List with Background Color and Styled Hollow Circles */}
        <ul
          // className="min-w-[98vw] -mx-4 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none text-[#1F1F1F]"
          className="w-full px-4 md:px-10 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none"

          style={{
            // backgroundColor: "rgba(136, 211, 255, 0.3)",
            fontFamily: "Afacad, sans-serif",
          }}
        >
          <h3
            className="text-[28px] md:text-[32px] lg:text-[34px]  font-bold leading-[100%]  text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Subcutaneous Injection
          </h3>
          <div className="hidden md:block absolute right-0 -top-10 md:-right-40 lg:right-50">
    <Image
      src="/takingPeptide/image2.png"
      alt="pen image"
      width={324}
      height={308}
      className="w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
    />
  </div>

          <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-6">
            Most common method for peptide administration:
          </p>

          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Clean the injection site with alcohol swab
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Pinch the skin to create a fold
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Insert needle at 45-degree angle
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Slowly inject the contents
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Dispose of needles in appropriate sharps container
          </li>

          <br />
          <br />

          <h3
            className="text-[28px] md:text-[32px] lg:text-[34px] font-bold leading-[100%] md:mt-10 text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Oral Administration
          </h3>
          <div className="hidden md:block absolute right-0  md:bottom-28 md:-right-20 lg:right-10">
    <Image
      src="/takingPeptide/image3.png"
      alt="pen image"
      width={324}
      height={308}
      className="w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
    />
  </div>
          <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-6">
            For specially formulated peptides:
          </p>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Take on an empty stomach unless specified otherwise
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Follow specific timing instructions
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Use provided measuring tools for accurate dosing
          </li>
        </ul>
      </div>

      {/* Video Section */}
      <section
        className="relative min-h-screen min-w-[98vw] flex flex-wrap justify-start 
      ml-[-20px] gap-10 px-6 py-10 bg-app opacity-90 w-full"
      >
        {/* Video 1 */}
        <div className="relative flex-1 md:max-w-full sm:min-w-[300px] min-w-[90%]">
          <div className="relative w-full h-full rounded-[3rem] shadow-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/takingPeptide/greenGlobe-br.png" // ✅ Add this line
            >
              <source src="/sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/50">
              <h2
                className="text-[clamp(20px,4vw,34px)] font-bold"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Proper Storage Techniques
              </h2>
              <p
                className="text-[clamp(16px,3vw,24px)] mt-2"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Video content will be added soon
              </p>
              <button className="relative z-10">
                {/* <img
                  src="/play.png"
                  alt="Play Button"
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                /> */}
                <Image
                  src="/play.png"
                  alt="Play Button"
                  width={96}
                  height={96}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div className="relative flex-1 md:max-w-full sm:min-w-[300px] min-w-[90%]">
          <div className="relative w-full h-full rounded-[3rem] shadow-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/takingPeptide/redGlobe-br.png" // ✅ Add this line
            >
              <source src="/sample-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/50">
              <h2
                className="text-[clamp(20px,4vw,34px)] font-bold"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Safe Injection Demonstration
              </h2>
              <p
                className="text-[clamp(16px,3vw,24px)] mt-2"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                Video content will be added soon
              </p>
              <button className="relative z-10">
                {/* <img
                  src="/play.png"
                  alt="Play Button"
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                /> */}
                <Image
                  src="/play.png"
                  alt="Play Button"
                  width={96}
                  height={96}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* best practice Section */}
      <div className="mt-10">
        <h3
          className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-semibold leading-[100%]  md:ml-6 text-left"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Best Practice
        </h3>

        {/* List with Background Color and Styled Hollow Circles */}
        <ul
          // className="min-w-[98vw] -mx-4 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none text-[#1F1F1F]"
          className="w-full px-4 md:px-10 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none "

          style={{
            // backgroundColor: "rgba(136, 211, 255, 0.3)",
            fontFamily: "Afacad, sans-serif",
          }}
        >
          <h3
            className="text-[28px] md:text-[32px] lg:text-[34px] font-semibold leading-[100%] text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Documentation
          </h3>

          <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-2">
            Keep a detailed log of:
          </p>


<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 mb-10">
  {/* Heading 1 */}
  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium">
    Administration date and time:
  </h3>

  {/* Value 1 */}
  {/* <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
    <div className="bg-white rounded-2xl px-8 py-2 flex items-center justify-center">
      <p className="text-[20px] md:text-[22px] lg:text-[24px] font-medium" style={{ fontFamily: "Afacad, sans-serif" }}>
        23/04/25
      </p>
    </div>
  </div> */}
  <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[240px]">
  <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
    <p
      className=" text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center"
      style={{ fontFamily: "Afacad, sans-serif" }}
    >
      23/04/25
    </p>
  </div>
</div>


  {/* Heading 2 */}
  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium">
    Dosage used:
  </h3>

  {/* Value 2 */}
  {/* <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
    <div className="bg-white rounded-2xl px-8 py-2 flex items-center justify-center">
      <p className="text-[24px] font-medium" style={{ fontFamily: "Afacad, sans-serif" }}>
        Mon, Tues, Wed
      </p>
    </div>
  </div> */}
  <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[240px]">
  <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
    <p
      className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center"
      style={{ fontFamily: "Afacad, sans-serif" }}
    >
      Mon, Tues, Wed
    </p>
  </div>
</div>

  {/* Heading 3 */}
  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium">
    Effect observed:
  </h3>

  {/* Value 3 */}
  <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[240px]">
  <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
    <p
      className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center"
      style={{ fontFamily: "Afacad, sans-serif" }}
    >
      Yes/No
    </p>
  </div>
</div>

  {/* Heading 4 */}
  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium">
    After side effects experienced:
  </h3>

  {/* Value 4 */}
  <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[240px]">
  <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
    <p
      className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center"
      style={{ fontFamily: "Afacad, sans-serif" }}
    >
      Yes/No
    </p>
  </div>
</div>
</div>

          <br />
          <br />

          <h3
            className="text-[28px] md:text-[32px] lg:text-[34px]  font-semibold leading-[100%] text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Safety Measures
          </h3>

          <li className="text-[20px] md:text-[22px] lg:text-[24px] mt-6 font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Use sterile equipment
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Rotate injection sites
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Follow proper storage protocols
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Monitor for adverse reactions
          </li>
          <li className="text-[20px] md:text-[22px] lg:text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
            Keep emergency contact information readily available
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
