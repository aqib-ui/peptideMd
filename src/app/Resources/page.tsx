"use client";
import Image from "next/image";
import  MoleculeTopLeftAnimation  from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";

export default function Resources() {
  return (
    <>
      <div>
        <MoleculeTopLeftAnimation
          mainheading="Resources"
          span="Podcast & Readings"
          para="Recent episodes discussing peptide research and applications."
        />
      </div>
      <div className="container px-6 py-10 min-w-[98vw] overflow-hidden">
        <div
          // className="mt-20 sm:mt-22 md:mt-30 lg:mt-40 mb-6 bg-app "
          className="mt-00 sm:mt-2 mb-6 bg-app "
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          <div className="px-6 ">
            <h3 className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold flex items-center flex-wrap">
              Latest Podcast
            </h3>
            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-6.5 font-medium mb-12">
              Recent episodes discussing peptide research and applications.
            </h3>
            <h3 className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-semibold flex items-center flex-wrap">
              Coming Soon
            </h3>
            <h3 className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-6.5 font-medium mb-12 mt-5 ">
              {/* className="" */}
              <span className="text-[24px] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]"></span>
              Our podcast series featuring leading experts in peptide research
              and clinical applications will be launching soon.
            </h3>
          </div>
          {/* Video Section */}
          <section
            className="relative h-[50vh] md:min-h-screen min-w-[98vw] flex flex-wrap justify-center 
              ml-[-20px] gap-10 px-6 py-10 bg-app opacity-90 w-full"
          >
            {/* Video 1 */}
            <div className="relative flex-1  md:max-w-[50%] sm:min-w-[300px] min-w-[90%]">
              <div className="relative w-full h-full rounded-[3rem] shadow-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/resourcesPod/blueGlobe.png" // ✅ Add this line
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
                    Latest Podcast
                  </h2>
                  <p
                    className="text-[clamp(16px,3vw,24px)] mt-2"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Video content will be added soon
                  </p>
                  <button className="relative z-10">
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

          {/* General Guideline Section */}
          <div className="relative mt-10 sm:mt-22 md:mt-30 px-6 lg:mt-40 ">
            <h3
              className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold leading-[100%]   text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Good Reads
            </h3>

            <h2
              className=" text-[clamp(18px,0.43vw+16.63px,24px)]  font-medium leading-[100%] mt-5 mb-2 max-w-8xl"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Recommended readings and publications
              {/* <br /> */}
            </h2>

           

            <h2
              className=" text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-[100%] mt-12 mb-2 max-w-8xl"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Latest Readings
              {/* <br /> */}
            </h2>

            {/* List with Background Color and Styled Hollow Circles */}
            <ul
              className="w-full rounded-[5rem] mt-6 space-y-1 list-none "
              style={{
                // backgroundColor: "rgba(136, 211, 255, 0.3)",
                fontFamily: " 'Afacad Flux', sans-serif",
              }}
            >
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Comprehensive guide to peptide administration.
              </li>
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Best practices in peptide storage and handling
              </li>
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Patient monitoring protocols.
              </li>
            </ul>

             <div className="mt-8 flex justify-center md:absolute md:right-0 md:bottom-2 md:pr-20 lg:right-10 lg:pr-0">
  <Image
    src="/resourcesPod/mug.png"
    alt="pen image"
    width={324}
    height={308}
    className="w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
    style={{ boxShadow: "0px 14px 18px 0px #00000040" }}
  />
</div>

          </div>

          <div className="relative mt-10 sm:mt-22 md:mt-30 px-6 lg:mt-40 ">
            <h3
              className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold leading-[100%]   text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              PeptideMD Articles
            </h3>

            <h2
              className="text-[clamp(18px,0.43vw+16.63px,24px)]  font-medium leading-[100%] mt-5 mb-2 max-w-8xl"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Recommended readings and publications
              {/* <br /> */}
            </h2>

            

            <h2
              className=" text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-[100%] mt-12 mb-2 max-w-8xl"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Featured Articles
              {/* <br /> */}
            </h2>

            {/* List with Background Color and Styled Hollow Circles */}
            <ul
              className="w-full rounded-[5rem] mt-6 space-y-1 list-none "
              style={{
                fontFamily: " 'Afacad Flux', sans-serif",
              }}
            >
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Latest developments in peptide therapeutics
              </li>
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Understanding peptide protocols
              </li>
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Clinical applications of therapeutic peptides
              </li>
            </ul>

            <div className="mt-8 flex justify-center md:absolute md:right-0 md:bottom-2 md:pr-20 lg:right-10 lg:pr-0">
  <Image
    src="/resourcesPod/laptop.png"
    alt="pen image"
    width={324}
    height={308}
    className="w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
    style={{ boxShadow: "0px 14px 18px 0px #00000040" }}
  />
</div>


            
          </div>

          <div className="relative mt-10 sm:mt-22 md:mt-30 px-6 lg:mt-40 ">
            <h3
              className="text-[clamp(22.5px,1.67vw+17.2px,46px)] font-semibold leading-[100%]   text-left"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Other Relevant Resources
            </h3>

            <h2
              className="text-[clamp(18px,0.43vw+16.63px,24px)]  font-medium leading-[100%] mt-5 mb-2 max-w-8xl"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Additional educational materials and tools
              {/* <br /> */}
            </h2>

            <h2
              // className=" text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-[100%] mt-12 mb-2 max-w-8xl"
              className=" text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-[100%] mt-12 mb-2 max-w-8xl"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Supplementary Resources
              {/* <br /> */}
            </h2>

            {/* List with Background Color and Styled Hollow Circles */}
            <ul
              className="w-full rounded-[5rem] mt-6 space-y-1 list-none "
              style={{
                // backgroundColor: "rgba(136, 211, 255, 0.3)",
                fontFamily: " 'Afacad Flux', sans-serif",
              }}
            >
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Video demonstrations
              </li>
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Downloadable guides
              </li>
              <li className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium before:content-['o'] before:mr-2 before:text-[#88D3FF]">
                Educational webinars
              </li>
            </ul>

            <div className="flex justify-center items-center max-xl:flex-wrap gap-6 mt-10 mb-10  w-full">
              {/* <Image
              src="/resourcesPod/bottom1.png"
              alt="pen image"
              width={324}
              height={308}
              className=" object-cover w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
            /> */}
              <div
                className="relative w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px] shadow-2xl overflow-hidden"
                style={{ boxShadow: "0px 14px 18px 0px #00000040" }}
              >
                <video
                  className="w-full h-full object-cover rounded-[50px]"
                  controls
                  poster="/resourcesPod/bottom1.png"
                >
                  <source src="/sample-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-black/50 rounded-[50px]">
                  <h2
                    className="text-[clamp(16px,3vw,24px)] font-bold"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Latest Podcast
                  </h2>
                  <p
                    className="text-[clamp(12px,2.5vw,18px)] mt-1"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                  >
                    Video content will be added soon
                  </p>
                  <button className="relative z-10 mt-2 ">
                    <Image
                      src="/play.png"
                      alt="Play Button"
                      width={64}
                      height={64}
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                    />
                  </button>
                </div>
              </div>

              <Image
                src="/resourcesPod/bottom2.png"
                alt="pen image"
                width={324}
                height={308}
                className=" object-cover w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
                style={{ boxShadow: "0px 14px 18px 0px #00000040" }}
              />
              <Image
                src="/resourcesPod/bottom3.png"
                alt="pen image"
                width={324}
                height={308}
                className=" object-cover w-[200px] h-[190px] md:w-[250px] md:h-[230px] lg:w-[324px] lg:h-[308px] rounded-[50px]"
                style={{ boxShadow: "0px 14px 18px 0px #00000040" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
