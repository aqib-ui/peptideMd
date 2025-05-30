"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import dynamic from "next/dynamic";

const ScrollButton = dynamic(() => import("@/component/ScrollButton/ScrollButton"), {
  ssr: false,
});

interface MoleculeTopLeftAnimationProps {
  mainheading: string;
  span: string;
  para: string;
  className?: string;
}

const MoleculeTopLeftAnimation: React.FC<MoleculeTopLeftAnimationProps> = ({
  mainheading,
  span,
  para,
  className,
}) => {
  return (
    <section className="relative">
      <Image
        src="/image1.png"
        alt="Molecule Top Left"
        width={160}
        height={160}
        className="absolute top-[-60px] left-[-40px] w-[100px] md:w-[130px] lg:w-[160px] animate-rotate  opacity-60 pointer-events-none"
        style={{
          filter: "brightness(1) grayscale(90%)",
          color: "black",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-2 p-4 md:p-6 bg-transparent">
        <div
          className={clsx(
            "relative inline-block w-full max-w-[90%] md:max-w-[80%] lg:max-w-[75%]",
            className
          )}
        >
          <h1
            className="text-[clamp(36px,2.84vw+22.93px,72px)] font-bold leading-[100%] text-left mt-6"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            {mainheading}
            <span style={{ color: "#224674" }} className="italic">
              {span}
            </span>
          </h1>

          <p
            className="text-[clamp(20.25px,0.98vw+17.1px,34px)] font-medium leading-[130%] mt-6 mb-6 text-left"
            style={{ fontFamily: "Afacad, sans-serif" }}
          >
            {para}
          </p>

          <Image
            src="/image1.png"
            alt="Molecule Bottom Right"
            width={220}
            height={220}
            className="absolute  w-[120px] md:w-[160px] bottom-[-14px] xl:bottom-[-70px] right-[-50px] xl:-right-[100px]  lg:w-[200px] xl:w-[335px] animate-rotate opacity-60 pointer-events-none mt-8 ml-auto"
            style={{
              filter: "brightness(1) grayscale(90%)",
              color: "black",


            }}
          />
        </div>
      </div>

      {/* <ScrollButton /> */}

      <style jsx global>{`
  @keyframes continuousRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-rotate {
    animation: continuousRotate 20s linear infinite;
  }
`}</style>

    </section>
  );
};
export default MoleculeTopLeftAnimation;