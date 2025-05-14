// "use client";
// import React from 'react';
// import Image from 'next/image';
// interface MoleculeTopLeftAnimationProps {
//     mainheading: string;
//     span: string;
//     para: string;
// }
// export const MoleculeTopLeftAnimation: React.FC<MoleculeTopLeftAnimationProps> = ({ mainheading, span, para }) => {

//     return (
//         <>


//             <section className="relative w-full bg-app px-4 md:px-12 overflow-visible py-10">
//                 {/* Top-left floating molecule image */}
//                 <Image
//                     src="/image1.png"
//                     alt="Molecule Top Left"
//                     width={160}
//                     height={160}
//                     className="absolute top-[-60px] left-[-40px] w-[100px] md:w-[130px] lg:w-[160px] animate-float-rotate z-0 opacity-60 pointer-events-none"
//                     style={{
//                         filter: 'brightness(0.6) grayscale(50%)',
//                     }}
//                 />

//                 {/* Bottom-right floating molecule image */}
//                 <Image
//                     src="/image1.png"
//                     alt="Molecule Bottom Right"
//                     width={220}
//                     height={220}
//                     className="absolute bottom-[-20px] right-[80px] w-[160px] md:w-[190px] lg:w-[220px] animate-float-rotate z-0 opacity-60 pointer-events-none"
//                     style={{
//                         filter: 'brightness(0.6) grayscale(70%)',
//                     }}
//                 />

//                 {/* --- Content Blocks --- */}
//                 <div className="relative z-10 max-w-7xl space-y-16">


//                     {/* Block 3: Physician Forum */}
//                     <div className="mx-2">
//                         <h1
//                             className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-left mt-6"
//                             style={{ fontFamily: "Afacad, sans-serif" }}
//                         >
//                             {mainheading}
//                             <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
//                                 {span}
//                             </span>
//                         </h1>

//                         <p
//                             className="text-[20px] md:text-[28px] lg:text-[34px] font-medium leading-tight mt-6 mb-2 max-w-5xl text-left"
//                             style={{ fontFamily: "Afacad, sans-serif" }}
//                         >
//                             {para}
//                         </p>
//                     </div>

//                 </div>

//                 {/* Scroll Button (same as before) */}
//                 <button
//                     className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
//                     style={{
//                         writingMode: 'vertical-rl',
//                         transform: 'rotate(1deg) translateY(-50%)',
//                         padding: '2rem 1rem',
//                         letterSpacing: '0.1rem',
//                     }}
//                 >
//                     Scroll
//                 </button>

//                 {/* Animation Styles */}
//                 <style jsx global>{`
//     @keyframes floatRotate {
//       0% {
//         transform: translateY(0px) scale(1) rotate(0deg);
//       }
//       25% {
//         transform: translateY(-8px) scale(1.05) rotate(90deg);
//       }
//       50% {
//         transform: translateY(0px) scale(1) rotate(180deg);
//       }
//       75% {
//         transform: translateY(8px) scale(0.95) rotate(270deg);
//       }
//       100% {
//         transform: translateY(0px) scale(1) rotate(360deg);
//       }
//     }

//     .animate-float-rotate {
//       animation: floatRotate 12s ease-in-out infinite;
//     }
//   `}</style>
//             </section>


//         </>
//     );
// }


// "use client";
// import React, { useEffect } from 'react';
// import Image from 'next/image';

// interface MoleculeTopLeftAnimationProps {
//     mainheading: string;
//     span: string;
//     para: string;
// }

// export const MoleculeTopLeftAnimation: React.FC<MoleculeTopLeftAnimationProps> = ({ mainheading, span, para }) => {

//     // // Disable scrolling on mount, restore on unmount
//     // useEffect(() => {
//     //     const originalOverflow = document.body.style.overflow;
//     //     document.body.style.overflow = 'hidden';
//     //     return () => {
//     //         document.body.style.overflow = originalOverflow;
//     //     };
//     // }, []);

//     return (
//         <>
//             <section className="relative w-[100%] bg-app px-4 md:px-12 overflow-visible py-10 ">
//                 {/* Top-left floating molecule image */}
//                 <Image
//                     src="/image1.png"
//                     alt="Molecule Top Left"
//                     width={160}
//                     height={160}
//                     className="absolute top-[-60px] left-[-40px] w-[100px] md:w-[130px] lg:w-[160px] animate-float-rotate z-0 opacity-60 pointer-events-none"
//                     style={{
//                         filter: 'brightness(0.6) grayscale(50%)',
//                     }}
//                 />

//                 {/* Bottom-right floating molecule image */}
//                 <Image
//                     src="/image1.png"
//                     alt="Molecule Bottom Right"
//                     width={220}
//                     height={220}
//                     className="absolute bottom-[10%] left-[80%] w-[160px] md:w-[190px] lg:w-[220px] animate-float-rotate z-0 opacity-60 pointer-events-none"
//                     style={{
//                         filter: 'brightness(0.7) grayscale(70%)',
//                     }}
//                 />

//                 {/* --- Content Blocks --- */}
//                 <div className="relative z-10 max-w-7xl space-y-16">
//                     <div className="mx-2">
//                         <h1
//                             className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-[100%] text-left mt-6"
//                             style={{ fontFamily: "Afacad, sans-serif" }}
//                         >
//                             {mainheading}
//                             <span style={{ color: "#224674" }} className="italic ml-1 md:ml-4">
//                                 {span}
//                             </span>
//                         </h1>

//                         <p
//                             className="text-[10px] md:text-[15px] lg:text-[34px] font-medium leading-[100%] mt-6 mb-2 w-[90%] text-left"
//                             style={{ fontFamily: "Afacad, sans-serif" }}
//                         >
//                             {para}
//                         </p>
//                     </div>
//                     {/* Scroll Button */}
//                     <button
//                         className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
//                         style={{
//                             writingMode: 'vertical-rl',
//                             transform: 'rotate(1deg) translateY(-50%)',
//                             padding: '2rem 1rem',
//                             letterSpacing: '0.1rem',
//                         }}
//                     >
//                         Scroll
//                     </button>
//                 </div>

//                 {/* Animation Styles */}
//                 <style jsx global>{`
//                     @keyframes floatRotate {
//                         0% {
//                             transform: translateY(0px) scale(1) rotate(0deg);
//                         }
//                         25% {
//                             transform: translateY(-8px) scale(1.05) rotate(90deg);
//                         }
//                         50% {
//                             transform: translateY(0px) scale(1) rotate(180deg);
//                         }
//                         75% {
//                             transform: translateY(8px) scale(0.95) rotate(270deg);
//                         }
//                         100% {
//                             transform: translateY(0px) scale(1) rotate(360deg);
//                         }
//                     }

//                     .animate-float-rotate {
//                         animation: floatRotate 12s ease-in-out infinite;
//                     }
//                 `}</style>
//             </section>
//         </>
//     );
// }

"use client";

import React, { JSX } from 'react';
import Image from 'next/image';

interface PageProps {
    mainheading: any;
    span: any;
    para: any;
}


const MoleculeTopLeftAnimation: React.FC<PageProps> = ({ mainheading, span, para }) => {
    return (
        <>
            <section className="relative ">
                {/* Top-left floating molecule image */}
                <Image
                    src="/image1.png"
                    alt="Molecule Top Left"
                    width={160}
                    height={160}
                    className="absolute top-[-60px] left-[-40px] w-[100px] md:w-[130px] lg:w-[160px] animate-float-rotate z-0 opacity-60 pointer-events-none"
                    style={{
                        filter: 'brightness(0.6) grayscale(50%)',
                    }}
                />

                {/* --- Content Block --- */}
                <div className="relative z-10 max-w-7xl mx-2 p-4 md:p-6 bg-transparent">
                    <div className="relative inline-block w-full max-w-[90%] md:max-w-[80%] lg:max-w-[75%]">
                        <h1
                            className="text-[36px] sm:text-[48px] md:text-[72px] lg:text-[50px] font-bold leading-[100%] text-left mt-6"
                            style={{ fontFamily: "Afacad, sans-serif" }}
                        >
                            {mainheading}
                            <span style={{ color: "#224674" }} className="italic ">
                                {span}
                            </span>
                        </h1>

                        <p
                            className="text-[14px] md:text-[18px] lg:text-[26px] font-medium leading-[130%] mt-6 mb-6 text-left"
                            style={{ fontFamily: "Afacad, sans-serif" }}
                        >
                            {para}
                        </p>

                        {/* Bottom-right image pinned inside text block */}
                        {/* <Image
                            src="/image1.png"
                            alt="Molecule Bottom Right"
                            width={220}
                            height={220}
                            className="absolute bottom-0 right-0 w-[120px] md:w-[160px] lg:w-[200px] animate-float-rotate opacity-60 pointer-events-none"
                            style={{
                                filter: 'brightness(0.7) grayscale(70%)',
                            }}
                        /> */}
                        <Image
                            src="/image1.png"
                            alt="Molecule Bottom Right"
                            width={220}
                            height={220}
                            className="absolute w-[120px] md:w-[160px] bottom-[-14px]  right-[-50px] lg:w-[200px] animate-float-rotate opacity-60 pointer-events-none mt-8 ml-auto"
                            style={{
                                filter: 'brightness(0.7) grayscale(70%)',
                            }}
                        />

                    </div>
                </div>

                {/* Scroll Button restored */}
                <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    // onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition rounded-lg shadow-md cursor-pointer"
                    style={{
                        writingMode: 'vertical-rl',
                        padding: '2rem 0.75rem',
                        letterSpacing: '0.1rem',
                        borderLeft: '4px solid #A6C9EE', // light blue stripe (adjust color as needed)
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                    }}
                >
                    Scroll
                </button>


                {/* Animation Styles */}
                <style jsx global>{`
                    @keyframes floatRotate {
                        0% { transform: translateY(0px) scale(1) rotate(0deg); }
                        25% { transform: translateY(-8px) scale(1.05) rotate(90deg); }
                        50% { transform: translateY(0px) scale(1) rotate(180deg); }
                        75% { transform: translateY(8px) scale(0.95) rotate(270deg); }
                        100% { transform: translateY(0px) scale(1) rotate(360deg); }
                    }
                    .animate-float-rotate {
                        animation: floatRotate 12s ease-in-out infinite;
                    }
                `}</style>
            </section>
        </>
    );
}

export default MoleculeTopLeftAnimation;