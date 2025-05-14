// import React, { useState } from "react";




// export function AnimatedCard({ title, imageSrc, onClick, rotate, zIndex }: { title: string; imageSrc: string; onClick?: React.MouseEventHandler<HTMLDivElement>, rotate: string; zIndex: number }) {
//     // const [, setIsClicked] = useState(false);
//     const [isClicked, setIsClicked] = useState(false);


//     return (
//         <div
//             onClick={() => setIsClicked(!isClicked)}
//             className={`absolute w-[250px] h-[320px] rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-500 ${isClicked ? "-translate-y-8 scale-105 rotate-0 shadow-2xl z-50" : `${rotate} z-${zIndex}`
//                 }`}
//             style={{
//                 boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
//             }}
//         >
//             <img
//                 src={imageSrc}
//                 alt={title}
//                 className="w-full h-[190px] object-cover rounded-t-2xl"
//             />
//             <div className="p-3 flex justify-between items-center h-[calc(100%-190px)]">
//                 <h3 className="font-semibold text-[16px] text-black leading-tight">{title}</h3>
//                 <button className="bg-[#6FA5D4] text-white rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-[#5c90c0]">
//                     →
//                 </button>
//             </div>
//         </div>
//     );
// }

interface AnimatedCardProps {
    title: string;
    imageSrc: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    rotate: string;
    zIndex: number;
    isExpanded: boolean;

}

export function AnimatedCard({ title, imageSrc, onClick, rotate, zIndex, isExpanded }: AnimatedCardProps) {
    return (
        <div
            onClick={onClick}
            className={`w-[250px] h-[320px] rounded-2xl shadow-lg bg-white cursor-pointer transition-all duration-500 ${isExpanded ? "rotate-0 scale-100 relative z-auto" : `${rotate} absolute z-[${zIndex}]`
                }`}
            style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            }}
        >
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-[190px] object-cover rounded-t-2xl"
            />
            <div className="p-3 flex justify-between items-center h-[calc(100%-190px)]">
                <h3 className="font-semibold text-[16px] text-black leading-tight">{title}</h3>
                <button className="bg-[#6FA5D4] text-white rounded-full w-8 h-8 flex items-center justify-center transition hover:bg-[#5c90c0]">
                    →
                </button>
            </div>
        </div>
    );
}
