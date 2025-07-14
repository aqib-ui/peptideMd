// import { useState } from "react";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import Image from "next/image";

// export default function CardSection() {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);



//     const cards = [
//         {
//             title: "Card One",
//             imageSrc: "/image.png",
//             rotateDeg: -10,
//             zIndex: 3,
//         },
//         {
//             title: "Card Two",
//             imageSrc: "/image.png",
//             rotateDeg: 0,
//             zIndex: 4,
//         },
//         {
//             title: "Card Three",
//             imageSrc: "/image.png",
//             rotateDeg: 10,
//             zIndex: 3,
//         },
//     ];

//     return (
//         <section
//             className="relative w-full min-h-screen bg-white dark:bg-[var(--background)] text-[#6FA5D4] flex flex-col items-center justify-start overflow-visible my-10"
//             style={{ paddingTop: "140px" }} // create space so cards appear over text
//         >
//             {/* Scrolling Text */}
//             <div
//                 className="relative top-0 left-0 w-full overflow-hidden"
//                 style={{ zIndex: 1 }}
//             >
//                 <div
//                     className="animate-slide whitespace-nowrap flex text-[28px] md:text-[40px] lg:text-[64px] font-semibold"
//                     style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                 >
//                     {[...Array(6)].map((_, i) => (
//                         <span key={i} className="uppercase">
//                             Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Cards Container */}
//             <div
//                 className={`relative w-full max-w-6xl flex items-center justify-center`}
//                 style={{ height: isExpanded ? "340px" : "320px", zIndex: 10 }}
//             >
//                 {/* Cards */}
//                 {cards.map((card, index) => (
//                     <div
//                         key={card.title}
//                         onClick={() => setIsExpanded(!isExpanded)}
//                         className={`w-[250px] h-[320px] rounded-2xl shadow-lg bg-[#E1E1E1] cursor-pointer transition-all duration-700 ease-in-out
//               ${isExpanded ? "relative" : "absolute"}`}
//                         style={{
//                             // Collapsed: stacked with rotation and horizontal offset
//                             // Expanded: no rotation, inline flex with gap controlled by parent container
//                             transform: isExpanded
//                                 ? "rotate(0deg) translateX(0)"
//                                 : `rotate(${card.rotateDeg}deg)`,
//                             zIndex: isExpanded ? 10 : card.zIndex,
//                             left: isExpanded
//                                 ? "auto"
//                                 : `calc(50% - 125px + ${index * 30}px - 30px)`, // center stack horizontally, 30px apart
//                             top: isExpanded ? "auto" : "0",
//                             transition: "all 0.7s ease",
//                             marginLeft: isExpanded && index !== 0 ? "24px" : "0", // add gap between cards in flex when expanded
//                         }}
//                     >
//                         <img
//                             src={card.imageSrc}
//                             alt={card.title}
//                             className="w-full h-[190px] object-cover rounded-t-2xl p-4"
//                         />
//                         <div
//                             className="p-3 flex justify-between items-center h-[calc(100%-190px)]"
//                             style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                         >
//                             <h3 className="font-semibold text-[clamp(20px,1.5vw,28px)] leading-snug text-app">
//                                 {card.title}
//                             </h3>
//                             <button
//                                 className="bg-[#6FA5D4] text-white rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-[#5c90c0]"
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     console.log("Arrow clicked");
//                                 }}
//                             >
//                                 <IoIosArrowRoundForward className="text-2xl" />
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* The text below cards remains here */}
//             <div
//                 className="relative z-0 mt-10 max-w-3xl px-4 text-center text-black dark:text-white"
//                 style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//             >
//                 <p>
//                     This is some text below the cards. The cards appear above this text
//                     when expanded without pushing it down.
//                 </p>
//             </div>
//         </section>
//     );
// }

import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CardSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    const cards = [
        {
            title: "Card One",
            imageSrc: "/images/card1.jpg",
            rotateDeg: -10,
            zIndex: 1,
        },
        {
            title: "Card Two",
            imageSrc: "/images/card2.jpg",
            rotateDeg: 0,
            zIndex: 2,
        },
        {
            title: "Card Three",
            imageSrc: "/images/card3.jpg",
            rotateDeg: 10,
            zIndex: 1,
        },
    ];

    const centerIndex = 1; // Middle card

    return (
        <section className="relative w-full min-h-screen bg-white dark:bg-[var(--background)] text-[#6FA5D4] flex flex-col items-center justify-center overflow-hidden my-10">

            {/* Scrolling Text (z-0 to stay behind) */}
            <div className="relative z-0 w-full overflow-hidden">
                <div
                    className="animate-slide whitespace-nowrap flex text-[28px] md:text-[40px] lg:text-[64px] font-semibold"
                    style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                >
                    {[...Array(6)].map((_, i) => (
                        <span key={i} className="uppercase">
                            Dosage Guide / Calculator / Combination / AI Chat Bot &nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </div>

            {/* Cards Container */}
            <div
                className={`absolute z-20 left-1/2 -translate-x-1/2 mt-12 flex transition-all duration-700 ease-in-out ${isExpanded ? "gap-6 flex-row w-full max-w-6xl" : "w-[250px] h-[320px]"
                    }`}
            >
                {cards.map((card, index) => (
                    <div
                        key={card.title}
                        onClick={() => setIsExpanded(true)}
                        className={`w-[250px] h-[320px] rounded-2xl bg-[#E1E1E1] shadow-lg transition-all duration-700 ease-in-out cursor-pointer ${isExpanded ? "relative" : "absolute"
                            }`}
                        style={{
                            transform: isExpanded
                                ? "rotate(0deg) translateX(0)"
                                : `rotate(${card.rotateDeg}deg)`,
                            zIndex: isExpanded ? 10 : card.zIndex,
                            left: isExpanded ? "auto" : "50%",
                            top: isExpanded ? "auto" : "0",
                            marginLeft: isExpanded ? "0" : `-${125 - index * 20}px`,
                            transition: "transform 0.6s ease, left 0.6s ease",
                            willChange: "transform",
                        }}
                    >
                        <img
                            src={card.imageSrc}
                            alt={card.title}
                            className="w-full h-[190px] object-cover rounded-t-2xl p-4"
                        />
                        <div
                            className="p-3 flex justify-between items-center h-[calc(100%-190px)]"
                            style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                        >
                            <h3 className="font-semibold text-[clamp(20px,1.5vw,28px)] leading-snug text-app">
                                {card.title}
                            </h3>
                            <button
                                className="bg-[#6FA5D4] text-white rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-[#5c90c0]"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent closing on arrow click
                                    console.log("Arrow clicked");
                                }}
                            >
                                <IoIosArrowRoundForward className="text-2xl" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
