"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";
import { AnimatedCard } from "../AnimatedCard/AnimatedCard"; // Adjust the import path as necessary

import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

import { IoIosInformationCircleOutline } from "react-icons/io";
import dynamic from "next/dynamic";
import { CardSection2 } from "@/component/TwoCardSection/page";

const ScrollButton = dynamic(
  () => import("@/component/ScrollButton/ScrollButton"),
  {
    ssr: false,
  }
);

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter(); // Initialize router

  const [isExpanded, setIsExpanded] = useState(false);

  const HandleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (slug: string) => {
    router.push(`/details/${slug.toLowerCase().replace(/\s+/g, "-")}`); // Converts title to URL-friendly slug
  };

  const slides = ["Dosage Guide", "Calculator", "Combination", "AI Chat Bot"];

  // Handle play event
  const handlePlay = () => setIsPlaying(true);
  type CardType = {
    title: string;
    imageSrc: string;
    rotateDeg: number;
    expandedX: number;
    expandedY: number;
    zIndex: number;
  };

  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    const updateCards = () => {
      const screenWidth = window.innerWidth;

      let spacingX = 0;
      let spacingY = 0;

      if (screenWidth >= 1600) {
        spacingX = 420; // Full large screen
      } else if (screenWidth >= 1280) {
        spacingX = 350; // Mid-size (1440px breakpoint)
      } else if (screenWidth > 1024) {
        spacingX = 280; // Mid-size (1440px breakpoint)
      } else if (screenWidth >= 868) {
        spacingX = 260; // Mid-size (1440px breakpoint)
      } else {
        spacingY = 300; // Small screens: vertical stack
      }

      const newCards: CardType[] = [
        {
          title: "AI Diagnostics",
          imageSrc: "/image.png",
          rotateDeg: -6,
          expandedX: spacingX ? -spacingX : 0,
          expandedY: spacingY ? -spacingY : 0,
          zIndex: 10,
        },
        {
          title: "Genetic Screening",
          imageSrc: "/image.png",
          rotateDeg: 0,
          expandedX: 0,
          expandedY: 0,
          zIndex: 20,
        },
        {
          title: "Oncology Testing",
          imageSrc: "/image.png",
          rotateDeg: 6,
          expandedX: spacingX ? spacingX : 0,
          expandedY: spacingY ? spacingY : 0,
          zIndex: 30,
        },
      ];

      setCards(newCards);
    };

    updateCards(); // run once on mount
    window.addEventListener("resize", updateCards); // on resize

    return () => window.removeEventListener("resize", updateCards); // cleanup
  }, []);

  return (
    <main className="w-full mx-auto mt-10">
      {/* Welcome Section */}

      <section className="ml-3   relative  md:min-h-[400px] lg:min-h-[500px] xl:min-h-[500px] xll:min-h-[600px!important] 2xl:min-h-[650px] 3xl:min-h-[700px!important]  4xl:min-h-[800px!important] flex flex-col md:flex-row  justify-between px-2 md:px-0 md:pl-4 2xl:pl-10 ">
        {/* Left Content (Text) */}
        <div className=" flex-1.2 relative z-10  lg:w-[60%]">
          <h1
            className="txt-72 font-bold leading-tight"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
          >
            Welcome to
            {/* <span style={{ color: "#224674" }} className="italic ml-2"> */}
            <span style={{ color: "#224674" }} className="italic ml-0 md:ml-3">
              PeptideMD
            </span>
          </h1>

          <p
            className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-snug mt-6"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
          >
            Your Trusted Source for Evidence-Based Peptide Therapeutics.
          </p>

          <p
            className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-tight font-medium mt-2 max-w-xl md:max-w-3xl"
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

          <div className="gradient-border border-none  min-w-[clamp(180px,13.3vw,229px)] min-h-[clamp(50px,3.8vw,66px)]">
            <button
              className="w-full h-full  rounded-full bg-[#224674] text-white txt-btn-24 font-medium
            flex items-center justify-center"
              // transition-colors duration-100 ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white
              style={{
                fontFamily: " 'Afacad Flux', sans-serif",
                cursor: "pointer",
              }}
            >
              Explore Peptides
            </button>
          </div>
        </div>

        {/* Right Side (DNA Image - Hidden on Small Screens) */}
        <div className=" relative flex-1  justify-end hidden lg:block ">
          <Image
            src="/dna.png"
            alt="DNA Structure"
            width={882}
            height={1211}
            className="absolute 
            w-auto 
          top-[-140px] xl:top-[-150px]  2xl:top-[-180px]  border right-0 md:object-cover z-10 pointer-events-none"
          />
          {/* // 👆 z-10 keeps it above other content but pointer-events-none allows clicking through it */}
        </div>
      </section>

      {/* Video Section */}
      <section className=" relative dark:bg-app  flex items-center justify-center px-3 md:px-8 2xl:px-12 pt-13 z-30  bg-white">
        {/* Video Wrapper with Relative Positioning */}
        <div className="relative w-full rounded-[50px] shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            // style={{ height: "clamp(400px, 45vw, 765px)" }}
            style={{ height: "clamp(400px, calc(-117px + 51.14vw), 765px)" }}
            className="w-full rounded-[50px] object-cover"
            controls
            onPlay={handlePlay}
            poster="/vid.png"
          >
            <source src="#" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Text & Play Button */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/30 p-6 z-10">
              <div
                className="absolute transition-all duration-300 text-center w-[90%] max-w-[90%]
          top-1/2 translate-y-[-50%] opacity-100 
          lg:top-[35%] lg:translate-y-0"
              >
                <h2
                  className="text-[clamp(20px,4vw,34px)] font-bold leading-[clamp(24px,4.5vw,40px)]"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                  Welcome Video
                </h2>

                <p
                  className="text-[clamp(16px,3vw,24px)] leading-[clamp(18px,3.5vw,30px)] mt-2"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                  Watch our introduction to PeptideMD and learn how we&apos;re
                  advancing peptide research and education.
                </p>
              </div>

              <button className="absolute flex items-center justify-center w-full h-full mt-6 lg:mt-16 lg:opacity-100">
                <Image
                  src="/play.png"
                  alt="Play Button"
                  width={96}
                  height={96}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Description Section */}
      <section className="  flex flex-col justify-center px-2  md:px-8 2xl:px-12 my-14 md:my-20 lg:my-26 2xl:my-40">
        <h1
          className="txt-72 font-bold leading-[100%] text-left"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          What are
          <span style={{ color: "#224674" }} className="italic ml-2">
            Peptides?
          </span>
        </h1>

        <p
          // className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-tight max-w-xl md:max-w-4xl mt-6"
          className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-tight max-w-xl md:max-w-4xl mt-6"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          Peptides are tiny but powerful building blocks of life! They are short
          chains of amino acids, which are like the &quot;letters&quot; that
          make up proteins in our bodies. Peptides help your body do important
          things like grow muscles, heal wounds, fight off sickness, and even
          improve your mood. Scientists have discovered that certain peptides
          can boost energy, support brain health, and keep skin looking young.
          Because they work naturally with your body, peptides are becoming a
          big deal in medicine, fitness, and skincare.
        </p>

        <p
          // className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-tight max-w-xl md:max-w-4xl mt-6"
          className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-tight max-w-xl md:max-w-4xl mt-6"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          Think of peptides like little messengers that tell your body how to
          work better. Some can help build muscle and burn fat, while others
          improve sleep, lower stress, or increase focus. There are even
          peptides that support a healthy immune system and help with recovery
          after workouts. Whether you want to feel stronger, think clearer, or
          simply stay healthier, peptides are an exciting and natural way to
          help your body perform at its best!
        </p>
      </section>

      {/* 2 card section */}
      <CardSection2 />

      {/* Slideshow Banner Section */}
      <section
                                      
        className={` relative w-full  bg-white text-[#6FA5D4] 
              flex flex-col items-center justify-center overflow-hidden mb-10  md:my-0
              transition-all duration-700 ease-in-out h-[950px] lg:h-[480px] 2xl:h-[572px]
              `}
      >
        <div className="relative top-0 left-0 w-full overflow-hidden ">
          <div
            className="animate-slide whitespace-nowrap flex txt-72 font-semibold"
            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
          >
            <span className="uppercase">
              Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
            </span>
            <span className="uppercase">
              Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
            </span>
            <span className="uppercase">
              Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
            </span>
            <span className="uppercase">
              Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
            </span>
            <span className="uppercase">
              Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
            </span>
            <span className="uppercase">
              Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
            </span>
          </div>
        </div>

        {/* Cards over scrolling text */}
        <div
          className={`absolute    flex items-center justify-center transition-all duration-500 mb-12 lg:mb-0 mt-12   ${
            isExpanded
              ? "gap-6 flex-row w-full max-w-5xl"
              : "w-[250px] h-[320px]"
          }`}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={HandleCardClick}
              // className={`w-[250px] h-[320px] rounded-2xl shadow-lg bg-[#E1E1E1]
              // dark:bg-[var(--background)] dark:text-[var(--foreground)] dark:border-[#E1E1E1] dark:border-2 cursor-pointer absolute `} // --> dark mode
              className={`w-[250px] h-[320px] xl:h-[400px] xl:w-[320px] bg-[#E1E1E1] cursor-pointer absolute  
                px-7 py-5 xl:p-7 [@media(min-width:1600px)]:h-[500px] [@media(min-width:1600px)]:w-[400px] rounded-[50px] `}
              style={{
                transform: isExpanded
                  ? `translate(${card.expandedX}px, ${card.expandedY}px) rotate(0deg)`
                  : `translate(0px, 0px) rotate(${card.rotateDeg}deg)`,
                zIndex: isExpanded ? 10 : card.zIndex,
                transition: "transform 0.6s ease",
                boxShadow: "0px 4px 10px 0px #00000040",
              }}
            >
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-[200px] h-[200px] xl:w-[300px] xl:h-[265px] rounded-4xl xl:rounded-[50px]
                object-cover [@media(min-width:1600px)]:w-[340px] [@media(min-width:1600px)]:h-[344px]"
              />
              <div
                className="p-2 [@media(min-width:1600px)]:p-6 flex justify-between items-center 
                h-[calc(100%-190px)] xl:h-[calc(100%-240px)] [@media(min-width:1600px)]:h-[calc(100%-330px)]"
                style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
              >
                <h3 className="font-semibold txt-34 [@media(min-width:1600px)]:w-50 text-app leading-tight">
                  {card.title}
                </h3>
                <button
                  className="bg-[#94C4ED] text-app rounded-full w-10 h-10 
                xl:h-[50px] xl:w-[50px] [@media(min-width:1600px)]:w-[63.7px] [@media(min-width:1600px)]:h-[63.7px] 
                flex items-center justify-center transition "
                >
                  {/* → */}
                  <IoIosArrowRoundForward className="text-5xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Card Section */}
      <section className="flex  flex-col items-center justify-center  py-20 2xl:py-34 ">
        <h1
          // className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-center"
          // className="text-[clamp(36px,2.84vw+22.91px,72px)] font-bold leading-[100%] text-center"
          className="txt-72 font-bold leading-[100%] text-center"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          Discover
          <span className="italic  bg-clip-text inline-block pr-[5px] text-[#224674] ">
            More
          </span>
        </h1>

        <p
          className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-[100%] mt-6 px-6 max-w-4xl text-center"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          Select a tile below to explore and learn more about peptides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl  mx-6 xl:mx-auto gap-6 mt-10 ">
          {[
            {
              img: "brain.png",
              title: "Mental Health",
              desc: "Understanding peptides in cognitive health and emotional well-being",
            },
            {
              img: "ph.png",
              title: "Physical Health",
              desc: "Exploring peptides for fitness, recovery, and overall wellness",
            },
            {
              img: "heart.png",
              title: "Longevity",
              desc: "Discover how peptides may support healthy aging and vitality",
            },
            {
              img: "testTube.png",
              title: "Research Focus",
              desc: "Latest scientific discoveries and clinical applications",
            },
            {
              img: "sheild.png",
              title: "Safety First",
              desc: "Understanding safety guidelines and best practices",
            },
            {
              img: "book.png",
              title: "In the Know",
              desc: "Essential information and emerging developments in peptide science",
            },
          ].map((card, index) => (
            <div
              key={index}
              className=" p-[2px] rounded-[3rem] 
    relative bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] "
            >
              <div
                className="p-6 py-10 lg:py-18 2xl:py-22  rounded-[3rem] flex flex-col items-center justify-center 
                bg-app w-full h-full transition-colors duration-500 ease-in-out group 
                hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] 
                cursor-pointer"
                // onClick={() => handleCardClick(card.title)}
              >
                {/* Icon */}
                <Image
                  src={`/cardsIcon/${card.img}`}
                  alt={card.title}
                  width={40} // Adjust width based on your requirements
                  height={40} // Adjust height based on your requirements
                  className={`mb-2 h-10 ${
                    card.img === "sheild.png" ? "w-8" : "w-10"
                  }`}
                />
                {/* 
text-[clamp(22.5px,1.67vw+17.2px,46px)]
text-[clamp(18px,0.43vw+16.63px,24px)] */}

                {/* Card Title */}
                <span
                  // className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px]  font-semibold leading-[50px] text-center mt-2"
                  className="text-[clamp(22.5px,1.67vw+17.2px,46px)]  font-semibold leading-[50px] text-center mt-2"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                  {card.title}
                </span>

                {/* Description */}
                <p
                  // className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[130%] text-center px-4 mt-2"
                  className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-[130%] text-center px-4 mt-2"
                  style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                  {card.desc}
                </p>

                {/* More Button */}
                <button
                  className="relative mt-6 mb-12 px-10 py-2 bg-black text-white text-md font-medium  rounded-t-lg
             hover:bg-gray-800 dark:border dark:border-white"
                  onClick={() => handleCardClick(card.title)}
                  style={{
                    cursor: "pointer",
                    fontFamily: " 'Afacad Flux', sans-serif",
                    borderBottom: "4px solid #94C4ED", // light blue stripe (adjust color as needed)
                  }}
                >
                  More
                  {/* Smoothed inner blue curved corner */}
                  <span
                    className="absolute top-9 left-28 w-[4px] h-6 bg-[#94C4ED] rounded-full"
                    style={{
                      transform: "translate(-250%, 5%) rotate(48deg)",
                    }}
                  ></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
