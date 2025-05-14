

"use client";
import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface MoleculeTopLeftAnimationProps {
    mainheading: string;
    span: string;
    para: string;
    className?: string;
}

export const MoleculeTopLeftAnimation: React.FC<MoleculeTopLeftAnimationProps> = ({ mainheading, span, para, className }) => {
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
                    <div 
                    // className="relative inline-block w-full max-w-[90%] md:max-w-[80%] lg:max-w-[75%]"
                    // className={`relative inline-block w-full max-w-[90%] md:max-w-[80%] lg:max-w-[75%] ${className}`}
                    className={clsx(
                        "relative inline-block w-full max-w-[90%] md:max-w-[80%] lg:max-w-[75%]",
                        className // this will override if present
                      )}
                    >
                        <h1
                            className="text-[clamp(36px,2.84vw+22.93px,72px)] font-bold leading-[100%] text-left mt-6"
                            style={{ fontFamily: "Afacad, sans-serif" }}
                        >
                            {mainheading}
                            <span style={{ color: "#224674" }} className="italic ">
                                {span}
                            </span>
                        </h1>

                        <p
                            className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-[130%] mt-6 mb-6 text-left"
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
