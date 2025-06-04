"use client";

import Image from "next/image";
import MoleculeTopLeftAnimation from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";

export default function TakingPeptide() {
  return (
    <>
      <div>
        <MoleculeTopLeftAnimation
          className="!inline-block !max-w-[90%] !md:max-w-[80%] !lg:max-w-[85%]"
          mainheading="Taking Peptides"
          span="Guide and Instruction"
          para="Always consult with a qualified healthcare provider before starting any peptide therapy. This guide is for educational purposes only and should not be considered medical advice."
        />
      </div>
      <div className="container bg-app px-4 py-0 md:py-10 min-w-[98vw] overflow-hidden ">
        {/* General Guideline Section */}
        {/* <div className="relative mt-10 sm:mt-22 md:mt-30 lg:mt-35 2xl:mt-50 "> */}
                <div className="relative mt-10 sm:mt-22 md:mt-30 lg:mt-35 ">

          <h3
            className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold leading-[100%]  md:ml-6 text-left"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
          >
            General Guideline
          </h3>

          {/* List with Background Color and Styled Hollow Circles */}
          <ul
            // className="min-w-[98vw] -mx-4 pl-10 rounded-[5rem] mt-6 space-y-1 list-none text-[#1F1F1F]"
            className="max-w-lg xl:max-w-4xl px-4 md:px-10 -mx-4 pl-10 rounded-[5rem] mt-6 space-y-1 list-none "
            style={{
              // backgroundColor: "rgba(136, 211, 255, 0.3)",
              fontFamily: " 'Afacad Flux', sans-serif",
            }}
          >
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Store peptides according to manufacturer specifications (usually
              refrigerated).
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Use sterile preparation techniques.
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Follow recommended dosing protocols.
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Monitor for any adverse reactions.
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Keep detailed records of administration and effects.
            </li>
          </ul>

          <div className="relative md:absolute max-md:left-1/2 max-md:translate-x-[-50%] right-0 -bottom-6 md:bottom-2  xl:right-10 w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px]">
            <Image
              src="/takingPeptide/image1.png"
              alt="pen image"
              fill
              className=" rounded-[50px]  shadow-[0_20px_48px_rgba(0,0,0,0.4)] object-cover"
            />
          </div>
        </div>

        {/* Admin Section */}
        <div className="relative mt-20 mb-20 md:mt-20 md:mb-25">
          <h3
            className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold leading-[100%]  md:ml-6 text-left"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
          >
            Adminsitration Methods
          </h3>

          {/* List with Background Color and Styled Hollow Circles */}
          <ul
            // className="min-w-[98vw] -mx-4 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none text-[#1F1F1F]"
            className="max-w-2xl lg:max-w-xl xl:max-w-4xl  px-4 md:px-10 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none"
            style={{
              // backgroundColor: "rgba(136, 211, 255, 0.3)",
              fontFamily: " 'Afacad Flux', sans-serif",
            }}
          >
            <h3
              className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-bold leading-[100%]  text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Subcutaneous Injection
            </h3>

            <p className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium mt-6">
              Most common method for peptide administration:
            </p>

            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Clean the injection site with alcohol swab
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Pinch the skin to create a fold
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Insert needle at 45-degree angle
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Slowly inject the contents
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Dispose of needles in appropriate sharps container
            </li>

            

            <div className="relative md:absolute max-md:left-1/2 max-md:translate-x-[-50%] right-0 top-4  lg:-top-5 xl:right-50 w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px]">
              <Image
                src="/takingPeptide/image2.png"
                alt="pen image"
                fill
                className="rounded-[50px] shadow-[0_20px_48px_rgba(0,0,0,0.4)] object-cover"
              />
            </div>

            <br />
            <br />

            <h3
              className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-bold leading-[100%] mt-5 md:mt-10 text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Oral Administration
            </h3>

            <p className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium mt-6">
              For specially formulated peptides:
            </p>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Take on an empty stomach unless specified otherwise
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Follow specific timing instructions
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Use provided measuring tools for accurate dosing
            </li>
          </ul>

          <div className="relative md:absolute max-md:left-1/2 max-md:translate-x-[-50%] right-0 bottom-0 xl:bottom-12 2xl:bottom-18 xl:right-10 w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px]">
            <Image
              src="/takingPeptide/image3.png"
              alt="pen image"
              fill
              className=" rounded-[50px] shadow-[0_20px_48px_rgba(0,0,0,0.4)] object-cover"
              // shadow-[offsetX_offsetY_blur_spread_color]
            />
          </div>
        </div>

        

        {/* Video Section */}
        <section
          className="relative min-h-screen min-w-[100vw] flex max-lg:flex-wrap justify-start 
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
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                  Proper Storage Techniques
                </h2>
                <p
                  className="text-[clamp(16px,3vw,24px)] mt-2"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
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
                poster="/takingPeptide/redglobe-br.png" // ✅ Add this line
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/50">
                <h2
                  className="text-[clamp(20px,4vw,34px)] font-bold"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                  Safe Injection Demonstration
                </h2>
                <p
                  className="text-[clamp(16px,3vw,24px)] mt-2"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
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
        <div className="mt-10 mb-50">
          <h3
            className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold leading-[100%]  md:ml-6 text-left"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
          >
            Best Practice
          </h3>

          {/* List with Background Color and Styled Hollow Circles */}
          <ul
            // className="min-w-[98vw] -mx-4 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none text-[#1F1F1F]"
            className="w-full px-4 md:px-10 p-4 md:p-10 rounded-[5rem] mt-6 space-y-1 list-none "
            style={{
              // backgroundColor: "rgba(136, 211, 255, 0.3)",
              fontFamily: " 'Afacad Flux', sans-serif",
            }}
          >
            <h3
              className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-semibold leading-[100%] text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Documentation
            </h3>

            <p className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium mt-2">
              Keep a detailed log of:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-10 mb-10">
              {/* Heading 1 */}
              <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium">
                Administration date and time:
              </h3>

              {/* Value 1 */}
              {/* <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
                <div className="bg-white rounded-2xl px-8 py-2 flex items-center justify-center">
                  <p className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium" style={{ fontFamily: " 'Afacad Flux', sans-serif" }}>
                    23/04/25
                  </p>
                </div>
              </div> */}
              <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[220px] h-full max-h-[48px]  ">
                <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full  h-full">
                  <p
                    className=" txt-24 font-medium text-center"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    23/04/25
                  </p>
                </div>
              </div>

              {/* Heading 2 */}
              <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium">
                Dosage used:
              </h3>

              {/* Value 2 */}
              {/* <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793]">
                <div className="bg-white rounded-2xl px-8 py-2 flex items-center justify-center">
                  <p className="text-[24px] font-medium" style={{ fontFamily: " 'Afacad Flux', sans-serif" }}>
                    Mon, Tues, Wed
                  </p>
                </div>
              </div> */}
              <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[220px] h-full max-h-[48px]">
                <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
                  <p
                    className="txt-24 font-medium text-center"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Mon, Tues, Wed
                  </p>
                </div>
              </div>

              {/* Heading 3 */}
              <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium">
                Effect observed:
              </h3>

              {/* Value 3 */}
              <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[220px] h-full max-h-[48px]">
                <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
                  <p
                    className="txt-24 font-medium text-center"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Yes/No
                  </p>
                </div>
              </div>

              {/* Heading 4 */}
              <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium">
                After side effects experienced:
              </h3>

              {/* Value 4 */}
              <div className="relative inline-block p-[1.75px] rounded-2xl bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] w-full max-w-[220px] h-full max-h-[48px]">
                <div className="bg-white dark:bg-[var(--background)] dark:text-[var(--foreground)] text-[#1F1F1F] rounded-2xl px-4 md:px-6 py-2 flex items-center justify-center w-full h-full">
                  <p
                    className="txt-24 font-medium text-center"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Yes/No
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />

            <h3
              className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-semibold leading-[100%] text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Safety Measures
            </h3>

            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] mt-6 font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Use sterile equipment
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Rotate injection sites
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Follow proper storage protocols
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Monitor for adverse reactions
            </li>
            <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
              Keep emergency contact information readily available
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
