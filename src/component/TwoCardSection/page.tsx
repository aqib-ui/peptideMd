import React from "react";
import Image from "next/image";
import { IoIosInformationCircleOutline, IoMdArrowForward  } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

export const CardSection2 = () => {
  return (
    <>
      {/* 2 card section */}
      <section className="min-h-screen flex flex-col max-md:px-2 mt-20 sm:mt-10 mx-3 lg:mx-6 2xl:mx-0">
        <div className="flex flex-wrap xl:flex-nowrap justify-around">
          {/* left card */}
          {/* <div className="relative w-full md:w-[65%] 2xl:w-[40%]  h-[400px] sm:min-h-[600px] lg:h-[550px] 2xl:min-h-[753px] shadow-lg overflow-hidden rounded-[3rem] md:mb-10"> */}
          <div
            className="relative w-full md:w-[60%] 2xl:w-[34.838%]  shadow-lg overflow-hidden rounded-[3rem] md:mb-10"

            style={{
              height: "clamp(450px, calc(-45.0001px + 46.18vw), 753px)",
            }}
            // style={{ height: 'clamp(550px, calc(288.33px + 23.03vw), 753px)', }}
            // style={{ height: 'clamp(550px, calc(385px + 0.2135vw), 753px)' }}
          >
            <Image
              src="/card-pic.png"
              alt="Card Image"
              fill
              className="object-cover md:object-cover"
            />
            <div
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 lg:bottom-7 2xl:bottom-10 lg:left-10 
                  flex flex-col justify-start items-start backdrop-blur-md  border-3 border-white
                  w-[70%] [350px]:w-[90%] sm:w-[290px] md:w-[260px] lg:w-[265px] 2xl:w-[308px]
             rounded-[40px] px-4 py-4 overflow-hidden"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              <div className="absolute inset-0 backdrop-blur-md bg-gray-100/60 rounded-xl pointer-events-none" />
              <div className="flex justify-end items-center gap-5 md:gap-10">
                {/* 3pngs 11 22 33 */}
                <div className="flex justify-center mb-4 overflow-visible">
                  <div className="relative flex flex-row sm:flex-row max-[460px]:flex-col items-center">
                    <Image
                      src="/11.png"
                      alt="Avatar 1"
                      width={60}
                      height={60}
                      className="object-cover rounded-full border-2 border-white
                             w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                             z-10 max-[460px]:mb-[-20px]"
                    />
                    <Image
                      src="/22.png"
                      alt="Avatar 2"
                      width={60}
                      height={60}
                      className="object-cover rounded-full border-2 border-white
                             w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                             z-20 -ml-4 sm:-ml-5 md:-ml-6 max-[460px]:ml-0 max-[460px]:mb-[-20px]"
                    />
                    <Image
                      src="/33.png"
                      alt="Avatar 3"
                      width={60}
                      height={60}
                      className="object-cover rounded-full border-2 border-white
                             w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                             z-30 -ml-4 sm:-ml-5 md:-ml-6 max-[460px]:ml-0"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-start items-start">
                  <h3 className="capitalize text-[clamp(16px,0.284vw+15.1px,20px)] text-black font-semibold leading-tight  z-10">
                    meet our resources
                  </h3>
                  <button className="gradient-border rounded-3xl font-medium text-white w-[88px] h-[44px] mt-2 z-10">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            {/* Top-right icons */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-5 lg:right-8 2xl:top-8 2xl:right-12 flex gap-4">
              {/* Information Icon */}
              <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
                <IoIosInformationCircleOutline className="text-[#2D557A] txt-24" />
              </div>

              {/* Arrow Icon */}
              <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
                <IoMdArrowForward  className="text-[#2D557A] txt-24" />
              </div>
            </div>
          </div>

          {/* right card */}
          <div className="flex flex-col  w-full 2xl:w-[55%] h-auto   rounded-[3rem] mt-10 lg:mt-0 lg:p-6 ">
            {/* Top image + card */}
            <div className="relative flex justify-center xl:justify-end items-start">
              <Image
                src="/small-card-pic.png"
                alt="Play Button"
                width={96}
                height={96}
                className=" w-80 h-80 ml-4 lg:ml-10"
              />
              {/* card over image */}
              <div
                className="absolute top-30 sm:top-36 md:top-40 lg:top-44 right-22 max-sm:right-20 sm:right-65 lg:right-100 xl:right-25 
                            flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-amber-50
                            w-[80%] max-sm:w-[150px] sm:w-[200px] md:w-[180px] lg:w-[180px]
                            rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
               
                style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
              >
                <div className="absolute inset-0 backdrop-blur-md bg-white/30 p-6 text-black rounded-xl pointer-events-none" />
                <h3 className="text-[clamp(16px,0.284vw+15.1px,20px)] text-black font-semibold leading-tight px-2 z-10 ">
                  Good interaction with other molecules.
                </h3>
                <button className=" gradient-border rounded-3xl font-medium text-white w-[88px] h-[44px] mt-2 z-10">
                  Learn
                </button>
              </div>
            </div>

            {/* List section */}
            <div
              className="flex  xl:justify-end justify-center mt-10 2xl:mt-20 md:px-4" 
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              <ul
                // className="space-y-6 xl:space-y-4 [@media(min-width:1600px)]:space-y-10 w-full  max-w-[724px] "
                className="space-y-6 xl:space-y-4 [@media(min-width:1600px)]:space-y-10 w-full  max-w-[745px] "
              >
                {[
                  {
                    title: "Unparalleled Diagnostics",
                    text: "Lorem1 ipsum dolor sit amet consectetur. Fermentum eget bibendum lectus risus morbi ante risus ut.",
                  },
                  {
                    title: "AI Assistant",
                    text: "Lorem2 ipsum dolor sit amet consectetur. Fermentum eget bibendum lectus risus morbi ante risus ut.",
                  },
                  {
                    title: "Case Studies",
                    text: "Lorem3 ipsum dolor sit amet consectetur. Fermentum eget bibendum lectus risus morbi ante risus ut.",
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-col md:flex-row items-start xl:gap-10 xl:items-center 2xl:items-start "
                  >
                    {/* <div className="flex items-center md:ml-[5rem] gap-3 text-xl sm:text-2xl md:text-3xl font-medium min-w-[250px]"> */}

                    <div className="flex items-center  md:ml-[5rem] gap-3 text-[clamp(20.25px,0.98vw+17.1px,34px)] leading-tight font-medium min-w-[240px]">

                      <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
                        <FaArrowRight className="text-[#2D557A] text-base sm:text-lg" />
                      </div>
                      {item.title}
                    </div>

                    <p
                      // className="text-base sm:text-lg md:text-xl  font-medium mt-2 md:mt-0 "

                      // className="text-[clamp(16px,0.284vw+15.1px,20px)] leading-tight font-medium mt-2 md:mt-0 "
                      className="text-[clamp(18px,1.5625vw-3px,24px)]
 leading-tight font-medium mt-2 md:mt-0 "

                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
export default CardSection2;

