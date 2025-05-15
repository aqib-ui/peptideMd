// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter
// import Image from "next/image";

// import { FaArrowRight } from "react-icons/fa6";
// import { IoIosInformationCircleOutline } from "react-icons/io";

// export default function HomePage() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const router = useRouter(); // Initialize router

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleCardClick = (slug: string) => {
//     router.push(`/details/${slug.toLowerCase().replace(/\s+/g, "-")}`); // Converts title to URL-friendly slug
//   };

//   const slides = ["Dosage Guide", "Calculator", "Combination", "AI Chat Bot"];

//   // Handle play event
//   const handlePlay = () => setIsPlaying(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <main className="w-full">
//       {/* Welcome Section */}
//       {/* <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 lg:pb-32"> */}
//       {/* Left Content (Text) */}
//       {/* <div className="flex-1.2 relative z-10">
//           <h1

//             className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-tight"
//             style={{ fontFamily: "Afacad, sans-serif" }}
//           >
//             Welcome to */}
//       {/* <span style={{ color: "#224674" }} className="italic ml-2"> */}
//       {/* <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
//               PeptideMD
//             </span>
//           </h1> */}

//       {/* <p
//             className="text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-snug mt-6"
//             style={{ fontFamily: "Afacad, sans-serif" }}
//           >
//             Your Trusted Source for Evidence-Based Peptide Therapeutics.
//           </p>

//           <p

//             className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-2 max-w-xl md:max-w-3xl"
//             style={{ fontFamily: "Afacad, sans-serif" }}
//           >
//             PeptideMD.com is your trusted platform for exploring the world of
//             peptides. Whether you&apos;re looking for in-depth information on
//             specific peptides, the latest research, clinical applications, or
//             expert-guided &quot;how-to&quot; resources, we&apos;ve got you
//             covered.
//           </p> */}

//       {/* "Peptide Overview" Button */}
//       {/* <div className="gradient-border">
//             <button
//               className="w-full h-full rounded-full bg-white text-black text-xl font-medium
//             flex items-center justify-center transition-colors duration-100
//             ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
//               style={{ fontFamily: "Afacad, sans-serif" }}
//             >
//               Peptide Overview
//             </button>
//           </div>
//         </div> */}

//       {/* Right Side (DNA Image - Hidden on Small Screens) */}
//       {/* <div className="relative flex-1 flex justify-end">
//           <Image
//             src="/dna.png"
//             alt="DNA Structure"
//             width={982}
//             height={1011}
//             className="absolute hidden md:block w-full
//             max-w-[500px] md:max-w-[600px] lg:max-w-[700px]
//             h-[300px] md:h-[500px] lg:h-[700px] xl:h-[900px]
//             md:top-[-570px] object-cover z-10 pointer-events-none"

//             />

//         </div>
//       </section> */}

//       {/* solving dna overlapping issue on larger screens 5/5/25*/}
//       {/* Welcome Section */}
//       {/* <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:pb-24 lg:pb-32 xl:pb-[200px]"> */}
//       {/* <section className="relative md:min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:pb-24 lg:pb-32 xl:pb-[200px] 2xl:pb-[500px]"> */}
//       <section
//         className="relative md:min-h-screen flex flex-col md:flex-row md:items-center justify-between px-6 md:pb-[10vh] xl:pb-[50vh]
// "
//       >
//         {/* Left Content (Text) */}
//         <div className="flex-1.2 relative z-10 md:w-[50%]">
//           <h1
//             // className="text-4xl font-bold text-[72px] leading-[100%]"
//             className="text-[36px] sm:text-[48px] md:text-[60px]  font-bold leading-tight w-screen"
//             style={{ fontFamily: "Afacad, sans-serif" }}
//           >
//             Welcome to
//             {/* <span style={{ color: "#224674" }} className="italic ml-2"> */}
//             <span style={{ color: "#224674" }} className="italic ml-0 md:ml-4">
//               PeptideMD
//             </span>
//           </h1>

//           <p
//             // className="text-[34px] font-medium leading-[100%] mt-8"
//             className="text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-snug mt-6"
//             style={{ fontFamily: "Afacad, sans-serif" }}
//           >
//             Your Trusted Source for Evidence-Based Peptide Therapeutics.
//           </p>

//           <p
//             // className="text-[24px] font-medium leading-[100%] mt-6 max-w-4xl"
//             className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-2 max-w-xl md:max-w-3xl"
//             style={{ fontFamily: "Afacad, sans-serif" }}
//           >
//             PeptideMD.com is your trusted platform for exploring the world of
//             peptides. Whether you&apos;re looking for in-depth information on
//             specific peptides, the latest research, clinical applications, or
//             expert-guided &quot;how-to&quot; resources, we&apos;ve got you
//             covered. Engage with a knowledgeable community on our moderated discussion board and stay
//             ahead with cutting-edge insights. Start your journey to
//             understanding and optimizing peptides today!
//           </p>

//           {/* "Peptide Overview" Button */}
//           <div className="gradient-border">
//             <button
//               className="w-full h-full rounded-full bg-app text-black text-xl font-medium
//             flex items-center justify-center transition-colors duration-100
//             ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
//               style={{ fontFamily: "Afacad, sans-serif" }}
//             >
//               Peptide Overview
//             </button>
//           </div>
//         </div>

//         {/* Right Side (DNA Image - Hidden on Small Screens) */}
//         {/* <div className="relative flex-1 flex justify-end">
//           <Image
//             src="/dna.png"
//             alt="DNA Structure"
//             width={982}
//             height={1011}
//             className="absolute hidden md:block w-full
//             max-w-[500px] md:max-w-[600px] lg:max-w-[700px]
//             h-[300px] md:h-[500px] lg:h-[700px] xl:h-[900px]
//             md:top-[-570px] object-cover z-10 pointer-events-none"

//             />
//         </div> */}

//         {/* Right Side (DNA Image - Hidden on Small Screens) */}
//         <div className="relative flex-1 flex justify-end ml-50">
//           <Image
//             src="/dna.png"
//             alt="DNA Structure"
//             width={982}
//             height={1011}
//             className="absolute hidden md:block
//             w-auto
//             h-auto
//             md:top-[-500px] lg:top-[-500px] xl:top-[-570px] object-cover z-10 pointer-events-none"
//           />
//           {/* // 👆 z-10 keeps it above other content but pointer-events-none allows clicking through it */}
//         </div>

//         {/* cover‑up bar */}
//         {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-amber-300 z-20 pointer-events-none"/> */}
//       </section>

//       {/* Video Section */}
//       <section className="relative my-10 md:my-20 bg-app min-h-screen flex items-center justify-center bg-white opacity-90">
//         <video
//           ref={videoRef}
//           // className="w-[90%] max-w-full rounded-[2rem] shadow-lg"
//           className="w-[95%] max-w-[1628px] h-[745px] rounded-[50px] shadow-lg object-cover"
//           controls
//           onPlay={handlePlay}
//           poster="/vid.png" // ✅ Add this line
//         >
//           <source src="/sample-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay Text & Play Button */}
//         {!isPlaying && (
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
//             {/* Text - Above Player on Large Screens, Behind Player on Small Screens */}
//             <div
//               className="absolute transition-all duration-300 text-center w-[90%] max-w-[90%]
//               top-1/2 translate-y-[-50%] opacity-100
//               lg:top-[35%] lg:translate-y-0"
//             >
//               <h2
//                 className="text-[clamp(20px,4vw,34px)] font-bold leading-[clamp(24px,4.5vw,40px)]"
//                 style={{ fontFamily: "Afacad, sans-serif" }}
//               >
//                 Welcome Video
//               </h2>

//               <p
//                 className="text-[clamp(16px,3vw,24px)] leading-[clamp(18px,3.5vw,30px)] mt-2"
//                 style={{ fontFamily: "Afacad, sans-serif" }}
//               >
//                 Watch our introduction to PeptideMD and learn how we&apos;re
//                 advancing peptide research and education.
//               </p>
//             </div>

//             {/* Play Button - Adjusted for Large Screens */}
//             <button className="absolute flex items-center justify-center w-full h-full mt-0 lg:mt-16 lg:opacity-100">
//               <Image
//                 src="/play.png"
//                 alt="Play Button"
//                 width={96} // Adjusted for lg:w-24
//                 height={96} // Adjusted for lg:h-24
//                 className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
//               />
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Description Section */}
//       <section className="min-h-screen flex flex-col justify-center px-6 mb-0 my-10 md:my-20 ">
//         <h1
//           className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-left"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           What are
//           <span style={{ color: "#224674" }} className="italic ml-2">
//             Peptides?
//           </span>
//         </h1>

//         <p
//           className="text-[20px] md:text-[22px] lg:text-[24px] font-medium  max-w-xl md:max-w-3xl mt-6"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           Peptides are tiny but powerful building blocks of life! They are short
//           chains of amino acids, which are like the &quot;letters&quot; that
//           make up proteins in our bodies. Peptides help your body do important
//           things like grow muscles, heal wounds, fight off sickness, and even
//           improve your mood. Scientists have discovered that certain peptides
//           can boost energy, support brain health, and keep skin looking young.
//           Because they work naturally with your body, peptides are becoming a
//           big deal in medicine, fitness, and skincare.
//         </p>

//         <p
//           className="text-[20px] md:text-[22px] lg:text-[24px] font-medium  max-w-xl md:max-w-3xl mt-6"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           Think of peptides like little messengers that tell your body how to
//           work better. Some can help build muscle and burn fat, while others
//           improve sleep, lower stress, or increase focus. There are even
//           peptides that support a healthy immune system and help with recovery
//           after workouts. Whether you want to feel stronger, think clearer, or
//           simply stay healthier, peptides are an exciting and natural way to
//           help your body perform at its best!
//         </p>
//       </section>

//       {/* 2 card section */}
//       <section className="min-h-screen flex flex-col max-md:px-2 mb-50">
//         {/* <div className="grid grid-cols-2   gap-6 mt-8 p-6 md:p-10"> */}
//         <div className="flex flex-wrap justify-around  mt-8 p-1 md:p-6">
//           {/* left card */}
//           <div className="relative w-full lg:w-[40%] h-screen lg:h-auto shadow-lg overflow-hidden rounded-[3rem]">
//             <Image
//               src="/card-pic.png"
//               alt="Card Image"
//               fill
//               className="object-cover"
//             />
//             <div
//               className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12
//       flex flex-col justify-start items-start bg-gray-100/10 border-3 border-amber-50
//       md:w-[clamp(44%,55vw,48%)] rounded-[2rem] px-4 py-4 overflow-hidden"
//               style={{ fontFamily: "Afacad, sans-serif" }}
//             >
//               <div className="absolute inset-0 bg-gray-100/60 rounded-xl pointer-events-none" />
//               <div className="flex justify-end items-center md:gap-10">
//                 {/* <div className="flex relative inset-1 justify-center mb-4">
//                   <Image
//                     src="/11.png"
//                     alt="Card Image"
//                     width={40} // Adjusted for lg:w-24
//                     height={40} // Adjusted for lg:h-24
//                     className="object-cover rounded-full border-2 border-white"
//                   />
//                   <Image
//                     src="/22.png"
//                     alt="Card Image"
//                     width={40} // Adjusted for lg:w-24
//                     height={40} // Adjusted for lg:h-24
//                     className="object-cover rounded-full border-2 border-white"
//                   />
//                   <Image
//                     src="/33.png"
//                     alt="Card Image"
//                     width={40} // Adjusted for lg:w-24
//                     height={40} // Adjusted for lg:h-24
//                     className="object-cover rounded-full border-2 border-white"
//                   />
//                 </div> */}
//                 {/* <div className="flex justify-center mb-4 overflow-visible">
//   <div className="flex items-center relative">
//     <Image
//       src="/11.png"
//       alt="Avatar 1"
//       width={40}
//       height={40}
//       className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-white z-10"
//     />
//     <Image
//       src="/22.png"
//       alt="Avatar 2"
//       width={40}
//       height={40}
//       className="-ml-4 sm:-ml-5 md:-ml-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-white z-20"
//     />
//     <Image
//       src="/33.png"
//       alt="Avatar 3"
//       width={40}
//       height={40}
//       className="-ml-4 sm:-ml-5 md:-ml-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded-full border-2 border-white z-30"
//     />
//   </div>
// </div> */}
//                 <div className="flex justify-center mb-4 overflow-visible">
//                   <div className="relative flex flex-row sm:flex-row max-[460px]:flex-col items-center">
//                     <Image
//                       src="/11.png"
//                       alt="Avatar 1"
//                       width={60}
//                       height={60}
//                       className="object-cover rounded-full border-2 border-white
//                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
//                  z-10 max-[460px]:mb-[-20px]"
//                     />
//                     <Image
//                       src="/22.png"
//                       alt="Avatar 2"
//                       width={60}
//                       height={60}
//                       className="object-cover rounded-full border-2 border-white
//                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
//                  z-20 -ml-4 sm:-ml-5 md:-ml-6 max-[460px]:ml-0 max-[460px]:mb-[-20px]"
//                     />
//                     <Image
//                       src="/33.png"
//                       alt="Avatar 3"
//                       width={60}
//                       height={60}
//                       className="object-cover rounded-full border-2 border-white
//                  w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
//                  z-30 -ml-4 sm:-ml-5 md:-ml-6 max-[460px]:ml-0"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex flex-col justify-start items-start">
//                   <h3 className="text-base capitalize sm:text-lg md:text-xl text-black font-semibold leading-tight p-2 z-10">
//                     meet our resources
//                   </h3>
//                   <button className="gradient-border rounded-3xl font-medium text-white w-[88px] h-[44px] mt-2 z-10">
//                     Explore
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* Top-right icons */}
//             <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-12 lg:right-12 flex gap-4">
//               {/* Information Icon */}
//               <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
//                 <IoIosInformationCircleOutline className="text-[#2D557A] text-base sm:text-lg" />
//               </div>

//               {/* Arrow Icon */}
//               <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
//                 <FaArrowRight className="text-[#2D557A] text-base sm:text-lg" />
//               </div>
//             </div>
//           </div>

//           {/* right card */}
//           <div className="flex flex-col justify-between w-full lg:w-[55%] h-auto   rounded-[3rem] p-6 md:p-10">
//             {/* Top image + card */}
//             <div className="relative flex justify-center lg:justify-end items-start">
//               <Image
//                 src="/small-card-pic.png"
//                 alt="Play Button"
//                 width={96}
//                 height={96}
//                 className="w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 ml-4 lg:ml-10"
//               />
//               {/* card over image */}
//               <div
//                 // className="absolute top-0 sm:top-36 md:top-40 lg:top-44 right-42 sm:right-60 md:right-76 lg:right-20
//                 // flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-amber-50
//                 // w-[clamp(20%,25vw,28%)] max-sm:w-[clamp(25%,30vw,35%)] md:w-[clamp(20%,25vw,28%)] lg:w-[clamp(40%,25vw,28%)]
//                 // rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
//                 className="absolute top-0 sm:top-36 md:top-40 lg:top-44 right-42 sm:right-60 md:right-76 lg:right-20
//                 flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-amber-50
//                 w-[clamp(20%,25vw,28%)] max-sm:w-[clamp(25%,30vw,35%)] md:w-[clamp(20%,25vw,28%)] lg:w-[clamp(20%,25vw,28%)]
//                 rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
//                 // className="absolute top-0 sm:top-36 md:top-40 lg:top-44 right-22 sm:right-60 md:right-66 lg:right-20
//                 // flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-white
//                 // w-[clamp(20%,25vw,28%)] max-sm:w-[clamp(45%,30vw,35%)] md:w-[clamp(20%,25vw,28%)] lg:w-[clamp(40%,25vw,38%)]
//                 // rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
//                 style={{ fontFamily: "Afacad, sans-serif" }}
//               >
//                 <div className="absolute inset-0 backdrop-blur-md bg-white/30 p-6 text-black rounded-xl pointer-events-none" />
//                 <h3 className="text-base sm:text-lg md:text-xl text-black font-semibold leading-tight px-2 z-10 ">
//                   Good interaction with other molecules.
//                 </h3>
//                 <button className=" gradient-border rounded-3xl font-medium text-white w-[88px] h-[44px] mt-2 z-10">
//                   Learn
//                 </button>
//               </div>
//             </div>

//             {/* List section */}
//             <div
//               className="flex  justify-center mt-10 sm:mt-26 px-4"
//               style={{ fontFamily: "Afacad, sans-serif" }}
//             >
//               <ul className="space-y-6 w-full max-w-[700px]">
//                 {[
//                   {
//                     title: "Unparalleled Diagnostics",
//                     text: "Lorem1 ipsum dolor sit amet consectetur. Fermentum eget bibendum lectus risus morbi ante risus ut.",
//                   },
//                   {
//                     title: "AI Assistant",
//                     text: "Lorem2 ipsum dolor sit amet consectetur. Fermentum eget bibendum lectus risus morbi ante risus ut.",
//                   },
//                   {
//                     title: "Case Studies",
//                     text: "Lorem3 ipsum dolor sit amet consectetur. Fermentum eget bibendum lectus risus morbi ante risus ut.",
//                   },
//                 ].map((item, idx) => (
//                   <li
//                     key={idx}
//                     className="flex flex-col md:flex-row items-start md:items-center md:gap-10"
//                   >
//                     <div className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-medium min-w-[250px]">
//                       <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
//                         <FaArrowRight className="text-[#2D557A] text-base sm:text-lg" />
//                       </div>
//                       {item.title}
//                     </div>
//                     <p className="text-base sm:text-lg md:text-xl font-medium mt-2 md:mt-0">
//                       {item.text}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Slideshow Banner Section */}
//       <section
//         className="relative w-full min-h-screen  text-[#6FA5D4] text-3xl font-bold flex
//         items-center overflow-hidden mb-50"
//       >
//         <div
//           className="animate-slide whitespace-nowrap flex text-[32px] md:text-[48px] lg:text-[72px] font-semibold"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           <span className="uppercase">
//             Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
//           </span>
//           <span className="uppercase">
//             Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
//           </span>
//           <span className="uppercase">
//             Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
//           </span>
//           <span className="uppercase">
//             Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
//           </span>
//         </div>
//       </section>

//       {/* Card Section */}
//       <section className="min-h-screen flex flex-col items-center justify-center  ">
//         <h1
//           className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-center"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           Discover
//           <span
//             className="italic  bg-clip-text inline-block pr-[5px] text-[#224674] "
//             // className="italic text-transparent bg-clip-text inline-block pr-[5px] " // Minimal padding to avoid clipping
//             // style={{
//             //   background:
//             //     "linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%)",
//             //   WebkitBackgroundClip: "text",
//             //   WebkitTextFillColor: "transparent",
//             // }}
//           >
//             More
//           </span>
//         </h1>

//         <p
//           className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[100%] mt-6 px-6 max-w-4xl text-center"
//           style={{ fontFamily: "Afacad, sans-serif" }}
//         >
//           Select a tile below to explore and learn more about peptides.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 p-6 md:p-12">
//           {[
//             {
//               img: "brain.png",
//               title: "Mental Health",
//               desc: "Understanding peptides in cognitive health and emotional well-being",
//             },
//             {
//               img: "ph.png",
//               title: "Physical Health",
//               desc: "Exploring peptides for fitness, recovery, and overall wellness",
//             },
//             {
//               img: "heart.png",
//               title: "Longevity",
//               desc: "Discover how peptides may support healthy aging and vitality",
//             },
//             {
//               img: "testTube.png",
//               title: "Research Focus",
//               desc: "Latest scientific discoveries and clinical applications",
//             },
//             {
//               img: "sheild.png",
//               title: "Safety First",
//               desc: "Understanding safety guidelines and best practices",
//             },
//             {
//               img: "book.png",
//               title: "In the Know",
//               desc: "Essential information and emerging developments in peptide science",
//             },
//           ].map((card, index) => (
//             <div key={index} className="gradient-card-border">
//               <div
//                 className="p-6 shadow-lg rounded-[3rem] flex flex-col items-center justify-center
//                 bg-app w-full h-full transition-colors duration-500 ease-in-out group
//                 hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793]
//                 cursor-pointer"
//                 onClick={() => handleCardClick(card.title)}
//               >
//                 {/* Icon */}
//                 <Image
//                   src={`/cardsIcon/${card.img}`}
//                   alt={card.title}
//                   width={40} // Adjust width based on your requirements
//                   height={40} // Adjust height based on your requirements
//                   className={`mb-2 h-10 ${
//                     card.img === "sheild.png" ? "w-8" : "w-10"
//                   }`}
//                 />

//                 {/* Card Title */}
//                 <span
//                   className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px]  font-semibold leading-[50px] text-center mt-2"
//                   style={{ fontFamily: "Afacad, sans-serif" }}
//                 >
//                   {card.title}
//                 </span>

//                 {/* Description */}
//                 <p
//                   className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[130%] text-center px-4 mt-2"
//                   style={{ fontFamily: "Afacad, sans-serif" }}
//                 >
//                   {card.desc}
//                 </p>

//                 {/* More Button */}
//                 {/* <button
//                   className="mt-6 mb-12 px-10 py-2 bg-black text-white group-active:text-white text-md
//                 font-medium rounded-lg hover:bg-gray-800"
//                   style={{ fontFamily: "Afacad, sans-serif" }}
//                 >
//                   More
//                 </button> */}
//                 <button
//                   className="mt-6 mb-12 px-10 py-2 bg-black text-white text-md font-medium rounded-lg
//              hover:bg-gray-800 dark:border dark:border-white"
//                   style={{ fontFamily: "Afacad, sans-serif" }}
//                 >
//                   More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// 9/5/25////////////////// same size no matter what in next file this is scaleable
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const cards = [
    {
      title: "Ai diagnostics",
      imageSrc: "/image.png",
      rotateDeg: -6,
      expandedX: -160, // spread left
      zIndex: 10,
    },
    {
      title: "Genetic Screening",
      imageSrc: "/image.png",
      rotateDeg: 0,
      expandedX: 0, // center
      zIndex: 20,
    },
    {
      title: "Oncology Testing",
      imageSrc: "/image.png",
      rotateDeg: 6,
      expandedX: 160, // spread right
      zIndex: 30,
    },
  ];

  return (
    <main className="w-full mt-10">
      {/* <!-- Heading: Keep previous -->
      <h1 class="text-[clamp(36px,2.84vw+22.91px,72px)]">Heading</h1>
      
      <!-- Subheading: slower scale -->
      <h2 class="text-[clamp(22.5px,1.67vw+17.2px,46px)]">Subheading</h2>
     
      <!-- 34px Text -->
      <p class="text-[clamp(20.25px,0.98vw+17.1px,34px)]">Mid Text</p>
      
      <!-- Paragraph -->
      <p class="text-[clamp(18px,0.43vw+16.63px,24px)]">Paragraph</p> 

      <!-- 22px Text -->
      clamp(16px, 0.625vw + 14px, 22px)
      
      {/* <!-- 20px -->
      <p class="text-[clamp(16px,0.284vw+15.1px,20px)]">Small Text</p> 

      {/* <!-- list nonsense -->
      <p class="text-[clamp(18px,1.13vw+14.4px,34px)]">Smart Responsive Text</p> */}

      

      {/* solving dna overlapping issue on larger screens 5/5/25*/}
      {/* Welcome Section */}
      <section
        // className="ml-3  relative  md:min-h-screen flex flex-col md:flex-row  justify-between px-6 "
        className="ml-3  relative  md:min-h-[80vh] flex flex-col md:flex-row  justify-between px-6 "
      >
        {/* Left Content (Text) */}
        <div className="flex-1.2 relative z-10 sm:w-[45%] lg:w-[60%]">
          <h1
            // className="text-4xl font-bold text-[72px] leading-[100%]"
            // className="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-bold leading-tight"
            className="text-[clamp(36px,2.84vw+22.9px,72px)] font-bold leading-tight"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Welcome to
            {/* <span style={{ color: "#224674" }} className="italic ml-2"> */}
            <span style={{ color: "#224674" }} className="italic ml-0 md:ml-3">
              PeptideMD
            </span>
          </h1>

          <p
            // className="text-[34px] font-medium leading-[100%] mt-8"
            // className="text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-snug mt-6"
            className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-snug mt-6"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Your Trusted Source for Evidence-Based Peptide Therapeutics.
          </p>

          <p
            // className="text-[24px] font-medium leading-[100%] mt-6 max-w-4xl"
            // className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-2 max-w-xl md:max-w-3xl"
            className="text-[clamp(18px,0.43vw+16.63px,24px)] leading-tight font-medium mt-2 max-w-xl md:max-w-3xl"
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

          {/* "Peptide Overview" Button */}
          <div className="gradient-border">
            <button
              //   className="w-full h-full rounded-full bg-app text-black text-xl font-medium
              // flex items-center justify-center transition-colors duration-100
              // ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
              className="w-full h-full rounded-full bg-app text-black text-[clamp(16px,0.284vw+16.1px,20px)] font-medium
            flex items-center justify-center transition-colors duration-100 
            ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Peptide Overview
            </button>
          </div>
        </div>
        <div className="bottom-[60px] absolute right-[550px] transform -translate-x-1/2 z-20">
          <ScrollButton />
        </div>

        {/* Right Side (DNA Image - Hidden on Small Screens) */}
        <div className="relative flex-1 flex justify-end ">
          <Image
            src="/dna.png"
            alt="DNA Structure"
            width={982}
            height={1011}
            className="absolute hidden md:block 
            w-auto 
            h-screen
            lg:top-[-225px] xl:top-[-220px] -right-6 md:object-fill z-10 pointer-events-none"
          />
          {/* // 👆 z-10 keeps it above other content but pointer-events-none allows clicking through it */}
        </div>
      </section>

      {/* new code */}
      {/* <section
        className="relative md:min-h-screen flex flex-col md:flex-row md:items-center justify-between gap-x-20 px-6 md:pb-[10vh] xl:pb-[50vh]
"
      > */}
      {/* Left Content (Text) */}
      {/* <div className="flex-1.2 relative z-10 md:w-[50%]">
          <h1
            // className="text-4xl font-bold text-[72px] leading-[100%]"
            className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] w-2xl font-bold leading-tight"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Welcome to
            <span style={{ color: "#224674" }} className="italic ml-0 md:ml-4">
              PeptideMD
            </span>
          </h1>

          <p
            // className="text-[34px] font-medium leading-[100%] mt-8"
            className="text-[24px] md:text-[28px] lg:text-[34px] font-medium leading-snug mt-6"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            Your Trusted Source for Evidence-Based Peptide Therapeutics.
          </p>

          <p
            // className="text-[24px] font-medium leading-[100%] mt-6 max-w-4xl"
            className="text-[20px] md:text-[22px] lg:text-[24px] font-medium mt-2 max-w-xl md:max-w-3xl"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            PeptideMD.com is your trusted platform for exploring the world of
            peptides. Whether you&apos;re looking for in-depth information on
            specific peptides, the latest research, clinical applications, or
            expert-guided &quot;how-to&quot; resources, we&apos;ve got you
            covered. Engage with a knowledgeable community on our moderated discussion board and stay
            ahead with cutting-edge insights. Start your journey to
            understanding and optimizing peptides today!
          </p> */}
      {/* "Peptide Overview" Button */}
      {/* <div className="gradient-border">
            <button
              className="w-full h-full rounded-full bg-app text-black text-xl font-medium
            flex items-center justify-center transition-colors duration-100 
            ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              Peptide Overview
            </button>
          </div>
        </div> */}
      {/* Right Side (DNA Image - Hidden on Small Screens) */}
      {/* <div className="relative flex-1 ml-5 flex justify-end">
          <Image
            src="/dna.png"
            alt="DNA Structure"
            width={982}
            height={1011}
            className="absolute hidden md:block 
            w-auto 
            h-auto
            md:top-[-530px]  lg:top-[-500px] xl:top-[-470px]  md:pl-10  object-cover z-10 pointer-events-none"
          />
        </div>
      </section> */}
      {/* new code above */}

 
 
 
      {/* Video Section */}
      <section className="relative dark:bg-app min-h-screen flex items-center justify-center mb-10 my-10 md:my-0">
        {/* Video Wrapper with Relative Positioning */}
        <div className="relative w-[95%] max-w-[1628px] rounded-[50px] shadow-lg overflow-hidden">
          <video
            ref={videoRef}
            // style={{ height: "clamp(400px, 45vw, 765px)" }}
            style={{ height: "clamp(400px, calc(-117px + 51.14vw), 765px)" }}

            className="w-full rounded-[50px] object-cover"
            controls
            onPlay={handlePlay}
            poster="/vid.png"
          >
            <source src="/sample-video.mp4" type="video/mp4" />
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
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Welcome Video
                </h2>

                <p
                  className="text-[clamp(16px,3vw,24px)] leading-[clamp(18px,3.5vw,30px)] mt-2"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  Watch our introduction to PeptideMD and learn how we&apos;re
                  advancing peptide research and education.
                </p>
              </div>

              <button className="absolute flex items-center justify-center w-full h-full mt-0 lg:mt-16 lg:opacity-100">
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
      <section className="ml-3 min-h-screen flex flex-col justify-center px-6 mb-10 my-10 md:my-0 ">
        <h1
          // className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-left"
          className="text-[clamp(36px,2.84vw+22.91px,72px)] font-bold leading-[100%] text-left"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          What are
          <span style={{ color: "#224674" }} className="italic ml-2">
            Peptides?
          </span>
        </h1>

        <p
          // className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-tight max-w-xl md:max-w-4xl mt-6"
          className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-tight max-w-xl md:max-w-4xl mt-6"
          style={{ fontFamily: "Afacad, sans-serif" }}
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
          style={{ fontFamily: "Afacad, sans-serif" }}
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
      {/* <section className="min-h-screen flex flex-col max-md:px-2 "> */}
      {/* <div className="grid grid-cols-2   gap-6 mt-8 p-6 md:p-10"> */}
      {/* <div className="flex flex-wrap justify-around  mt-8 p-1 md:p-6"> */}
      {/* <div className="flex flex-wrap xl:flex-nowrap justify-around mt-8 p-1 md:p-6"> */}

      {/* left card */}
      {/* <div className="relative w-full 2xl:w-[40%] h-screen lg:h-auto shadow-lg overflow-hidden rounded-[3rem] md:mb-10"> */}
      {/* <div className="relative w-full 2xl:w-[40%] h-auto lg:h-auto shadow-lg overflow-hidden rounded-[3rem] md:mb-10"> */}
      {/* relative w-full 2xl:w-[40%] min-h-[600px] lg:min-h-[700px] shadow-lg overflow-hidden rounded-[3rem] md:mb-10 */}
      {/* <div className="relative w-full md:w-[65%] 2xl:w-[40%]  h-[400px] sm:min-h-[600px] lg:min-h-[700px] shadow-lg overflow-hidden rounded-[3rem] md:mb-10">


            <Image
              src="/card-pic.png"
              alt="Card Image"
              fill
              className="object-cover md:object-cover"
            />
            <div
              className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12 
      flex flex-col justify-start items-start backdrop-blur-md bg-gray-100/10 border-3 border-white
      w-[80%] [350px]:w-[90%] sm:w-[290px] md:w-[260px] lg:w-[295px]
 rounded-[2rem] px-4 py-4 overflow-hidden"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <div className="absolute inset-0 backdrop-blur-md bg-gray-100/60 rounded-xl pointer-events-none" />
              <div className="flex justify-end items-center md:gap-10"> */}
      {/* 3pngs 11 22 33 */}
      {/* <div className="flex justify-center mb-4 overflow-visible">
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
                  <h3 className="text-base capitalize sm:text-lg md:text-xl text-black font-semibold leading-tight p-2 z-10">
                    meet our resources
                  </h3>
                  <button className="gradient-border rounded-3xl font-medium text-white w-[88px] h-[44px] mt-2 z-10">
                    Explore
                  </button>
                </div>
              </div>
            </div> */}
      {/* Top-right icons */}
      {/* <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 lg:top-8 lg:right-12 flex gap-4"> */}
      {/* Information Icon */}
      {/* <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
                <IoIosInformationCircleOutline className="text-[#2D557A] text-base sm:text-lg" />
              </div> */}

      {/* Arrow Icon */}
      {/* <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
                <FaArrowRight className="text-[#2D557A] text-base sm:text-lg" />
              </div>
            </div>
          </div> */}

      {/* right card */}
      {/* <div className="flex flex-col justify-between w-full 2xl:w-[55%] h-auto   rounded-[3rem] p-6 md:p-1"> */}
      {/* Top image + card */}
      {/* <div className="relative flex justify-center xl:justify-end items-start">
              <Image
                src="/small-card-pic.png"
                alt="Play Button"
                width={96}
                height={96}
                className="w-65 h-65 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 ml-4 lg:ml-10"
              /> */}
      {/* card over image */}
      {/* <div
                // className="absolute top-0 sm:top-36 md:top-40 lg:top-44 right-42 sm:right-60 md:right-76 lg:right-20
                // flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-amber-50
                // w-[clamp(20%,25vw,28%)] max-sm:w-[clamp(25%,30vw,35%)] md:w-[clamp(20%,25vw,28%)] lg:w-[clamp(40%,25vw,28%)]
                // rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
                className="absolute top-30 sm:top-36 md:top-40 lg:top-44 right-22 max-sm:right-20 sm:right-65 lg:right-100 xl:right-25 
                flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-amber-50
                w-[80%] max-sm:w-[150px] sm:w-[200px] md:w-[180px] lg:w-[180px]
                rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
                // className="absolute top-0 sm:top-36 md:top-40 lg:top-44 right-22 sm:right-60 md:right-66 lg:right-20
                // flex flex-col justify-start items-start bg-gray-100/10 border-t-2 border-l-2 border-r-2 border-white
                // w-[clamp(20%,25vw,28%)] max-sm:w-[clamp(45%,30vw,35%)] md:w-[clamp(20%,25vw,28%)] lg:w-[clamp(40%,25vw,38%)]
                // rounded-[2rem] px-4 py-4 sm:py-6 overflow-hidden"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                <div className="absolute inset-0 backdrop-blur-md bg-white/30 p-6 text-black rounded-xl pointer-events-none" />
                <h3 className="text-base sm:text-lg md:text-xl text-black font-semibold leading-tight px-2 z-10 ">
                  Good interaction with other molecules.
                </h3>
                <button className=" gradient-border rounded-3xl font-medium text-white w-[88px] h-[44px] mt-2 z-10">
                  Learn
                </button>
              </div>
            </div> */}

      {/* List section */}
      {/* <div
              className="flex  xl:justify-end justify-center mt-10 sm:mt-16 px-4"
              style={{ fontFamily: "Afacad, sans-serif" }}
            >
              <ul className="space-y-6 w-full max-w-[700px] ">
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
                    className="flex flex-col md:flex-row items-start xl:gap-10 lg:items-center "
                  > */}
      {/* <div className="flex items-center md:ml-[5rem] gap-3 text-xl sm:text-2xl md:text-3xl font-medium min-w-[250px]"> */}
      {/* <div className="flex items-center md:ml-[5rem] gap-3 text-[clamp(20px,0.994vw+15.82px,34px)] font-medium min-w-[250px]">
                      <div className="bg-[#94C3ED] rounded-full p-2 sm:p-3 flex justify-center items-center">
                        <FaArrowRight className="text-[#2D557A] text-base sm:text-lg" />
                      </div>
                      {item.title}
                    </div>

                    <p
                      // className="text-base sm:text-lg md:text-xl  font-medium mt-2 md:mt-0 "
                      className="text-[clamp(16px,0.284vw+15.1px,20px)]  font-medium mt-2 md:mt-0 "

                    >
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <CardSection2 />

      {/* Slideshow Banner Section */}
      {/* <section 
        className="relative w-full min-h-screen  text-[#6FA5D4] text-3xl font-bold flex
        items-center overflow-hidden mb-50"
      >
        <div
          className="animate-slide whitespace-nowrap flex text-[32px] md:text-[48px] lg:text-[72px] font-semibold"
          style={{ fontFamily: "Afacad, sans-serif" }}
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
        </div>
      </section>  */}

      {/* <section className="relative w-full min-h-screen text-[#6FA5D4] text-3xl font-bold flex flex-col items-center justify-center overflow-hidden mb-50"> */}

      {/* Scrolling Text */}
      {/* <div
          className="animate-slide whitespace-nowrap flex text-[32px] md:text-[48px] lg:text-[72px] font-semibold mb-20"
          style={{ fontFamily: "Afacad, sans-serif" }}
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
        </div> */}

      {/* Stacked Cards */}
      {/* <div className="absolute  w-[300px] h-[400px]">
          <AnimatedCard
            title="Oncology Testing"
            imageSrc="image.png"
            rotate="rotate-[-6deg]"
            zIndex={10}
          />
          <AnimatedCard
            title="Genetic Screening"
            imageSrc="image.png"
            rotate="rotate-[0deg]"
            zIndex={20}
          />
          <AnimatedCard
            title="AI Diagnostics"
            imageSrc="image.png"
            rotate="rotate-[6deg]"
            zIndex={30}
          />
        </div>
       </section>  */}
      {/* <section className="relative w-full min-h-screen bg-white text-[#6FA5D4] flex flex-col items-center justify-center overflow-hidden py-16">

        {/* Scrolling Text */}
      {/* <div
          className="relative top-0 left-0 w-full overflow-hidden"
        >
          <div
            className="animate-slide whitespace-nowrap flex text-[28px] md:text-[40px] lg:text-[64px] font-semibold opacity-20"
            style={{ fontFamily: "Afacad, sans-serif" }}
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
          </div>
        </div> */}

      {/* Centered Stacked Cards */}
      {/* <div className="absolute w-[250px] h-[320px] mt-12 border-2 border-red-500">
        <AnimatedCard
          title="Oncology Testing"
          imageSrc="/image.png"
          rotate="rotate-[-6deg]"
          zIndex={10}
          isExpanded={false}

        />
        <AnimatedCard
          title="Genetic Screening"
          imageSrc="/image.png"
          rotate="rotate-[0deg]"
          zIndex={20} isExpanded={false} />
        <AnimatedCard
          title="AI Diagnostics"
          imageSrc="/image.png"
          rotate="rotate-[6deg]"
          zIndex={30} isExpanded={false} />
      </div> */}
      {/* </section> */}

      <section
        className="relative w-full min-h-screen bg-white dark:bg-[var(--background)]
       text-[#6FA5D4] flex flex-col items-center justify-center overflow-hidden mb-10 my-10 md:my-0 "
      >
        {/* Scrolling Text */}
        <div className="relative top-0 left-0 w-full overflow-hidden">
          <div
            className="animate-slide whitespace-nowrap flex text-[28px] md:text-[40px] lg:text-[64px] font-semibold"
            style={{ fontFamily: "Afacad, sans-serif" }}
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

        {/* Cards */}
        <div
          className={`absolute flex items-center justify-center transition-all duration-500 mt-12 ${
            isExpanded
              ? "gap-6 flex-row w-full max-w-5xl"
              : "w-[250px] h-[320px]"
          }`}
        >
          {/* {cards.map((card) => (
            <div
              key={card.title}
              onClick={HandleCardClick}
              className={`w-[250px] h-[320px] rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-500 ${isExpanded
                  ? "rotate-0 scale-100 relative z-auto"
                  : `${card.rotate} absolute z-[${card.zIndex}]`
                }`}
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-[190px] object-cover rounded-t-2xl"
              />
              <div className="p-3 flex justify-between items-center h-[calc(100%-190px)]">
                <h3 className="font-semibold text-[16px] text-black leading-tight">
                  {card.title}
                </h3>
                <button className="bg-[#6FA5D4] text-white rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-[#5c90c0]">
                  →
                </button>
              </div>
            </div>
          ))} */}
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={HandleCardClick}
              // className={`w-[250px] h-[320px] rounded-2xl shadow-lg bg-[#E1E1E1]
              //   dark:bg-[var(--background)] dark:text-[var(--foreground)] dark:border-[#E1E1E1] dark:border-2 cursor-pointer absolute `}
              className={`w-[250px] h-[320px] rounded-2xl shadow-lg bg-[#E1E1E1] 
                dark:text-[var(--foreground)] dark:border-[#E1E1E1] dark:border-2 cursor-pointer absolute `}
              style={{
                transform: isExpanded
                  ? `translateX(${card.expandedX}px) rotate(0deg)`
                  : `translateX(0px) rotate(${card.rotateDeg}deg)`,
                zIndex: isExpanded ? 10 : card.zIndex,
                transition: "transform 0.6s ease",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={card.imageSrc}
                alt={card.title}
                className="w-full h-[190px] object-cover rounded-t-2xl p-4"
              />
              <div
                className="p-3 flex justify-between items-center h-[calc(100%-190px)]"
                style={{ fontFamily: "Afacad, sans-serif" }}
              >
                <h3 className="font-semibold text-[clamp(20.25px,1vw+14.1px,34px)] text-app leading-tight">
                  {card.title}
                </h3>
                <button className="bg-[#6FA5D4] text-app rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-[#5c90c0]">
                  {/* → */}
                  <IoIosArrowRoundForward className="text-2xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="relative w-full min-h-screen bg-white text-[#6FA5D4] flex flex-col items-center justify-center overflow-hidden py-16">

         Scrolling Background Text 
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <div
            className="animate-slide whitespace-nowrap flex text-[28px] md:text-[40px] lg:text-[64px] font-semibold opacity-20"
            style={{ fontFamily: "Afacad, sans-serif" }}
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
          </div>
        </div>

        {/* Cards Section */}

      {/* </section>  */}

      {/* Card Section */}
      <section className="min-h-screen flex  flex-col items-center justify-center mb-50 pt-10 mt-18  ">
        <h1
          // className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-center"
          className="text-[clamp(36px,2.84vw+22.91px,72px)] font-bold leading-[100%] text-center"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Discover
          <span className="italic  bg-clip-text inline-block pr-[5px] text-[#224674] ">
            More
          </span>
        </h1>

        <p
          className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-[100%] mt-6 px-6 max-w-4xl text-center"
          style={{ fontFamily: "Afacad, sans-serif" }}
        >
          Select a tile below to explore and learn more about peptides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-[63px] mt-8 p-6 md:p-12">
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
              className=" p-[2px] rounded-[3rem] w-[85.13%] max-w-[450px] min-h-[450px] 2xl:h-[478.83px] mx-auto 
    relative bg-gradient-to-tr from-[#5CB0E2] to-[#EB6793] "
            >
              <div
                className="p-6  rounded-[3rem] flex flex-col items-center justify-center 
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
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  {card.title}
                </span>

                {/* Description */}
                <p
                  // className="text-[20px] md:text-[22px] lg:text-[24px] font-medium leading-[130%] text-center px-4 mt-2"
                  className="text-[clamp(18px,0.43vw+16.63px,24px)] font-medium leading-[130%] text-center px-4 mt-2"
                  style={{ fontFamily: "Afacad, sans-serif" }}
                >
                  {card.desc}
                </p>

                {/* More Button */}
                <button
                  className="mt-6 mb-12 px-10 py-2 bg-black text-white text-md font-medium  rounded-t-lg
             hover:bg-gray-800 dark:border dark:border-white"
                  onClick={() => handleCardClick(card.title)}
                  style={{
                    fontFamily: "Afacad, sans-serif",
                    borderBottom: "4px solid #A6C9EE", // light blue stripe (adjust color as needed)
                  }}
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
