"use client";
import { useState, useRef, useEffect, Suspense } from "react";
// import logo from "../../../public/headerIcon/logo.png";
import authLogo from "../../../public/authIcons/authLogo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";

import { Toaster, toast } from "react-hot-toast";

export const dynamic = "force-dynamic";

function SixDigitVerifyInner() {
  const [code, setCode] = useState(Array(6).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const isFormValid = () => {
    return code.every((digit) => digit !== "");
  };

  const handleResendCode = () => {
    setSecondsLeft(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newCode = [...code];
    newCode[index] = value[0];
    setCode(newCode);

    if (index < 5 && value) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // const handleKeyDown = (
  //   e: React.KeyboardEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   if (e.key === "Backspace" && !code[index] && index > 0) {
  //     const newCode = [...code];
  //     newCode[index - 1] = "";
  //     setCode(newCode);
  //     inputsRef.current[index - 1]?.focus();
  //   }
  // };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const newCode = [...code];

    if (e.key === "Backspace") {
      if (code[index]) {
        newCode[index] = "";
      } else if (index > 0) {
        newCode[index - 1] = "";
        inputsRef.current[index - 1]?.focus();
      }
      setCode(newCode);
    } else if (e.key === "Delete") {
      newCode[index] = "";
      setCode(newCode);
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .slice(0, 6)
      .replace(/\D/g, "");
    if (pasted.length === 6) {
      const newCode = pasted.split("");
      setCode(newCode);
      inputsRef.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const verificationCode = code.join("");

    if (verificationCode.length !== 6) {
      setIsSubmitting(false);
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        if (from === "signup") {
          router.push("/Dashboard"); // Navigate to dashboard
        } else if (from === "forgetpassword") {
          router.push("/CreateNewPassword"); // Navigate to create password page
        } else {
          router.push("/");
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <Toaster position="top-center" />

      {/* === Content Area === */}
      <div
        className=" flex flex-col  md:flex-row md:justify-between max-sm:p-4 px-4 py-6 2xl:py-8 [@media(min-width:1600px)]:p- 
            xl:pl-10 2xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34"
      >
        {/* Left Section */}
        {/* <div
                className="[@media(min-width:1600px)]:w-full w-[48%] max-sm:w-full md:h-[calc(100vh-44px)] lg:h-[calc(100vh-54px)] 
                xl:h-[calc(100vh-84px)] [@media(min-width:1600px)]:h-[calc(100vh-54px)] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px]
                flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%)",
                }}
              >
                <div className="bg-white rounded-[48px] p-8 flex items-center justify-center w-full h-full">
                  <Image
                    src={logo}
                    alt="PeptideMD Logo"
                    width={492}
                    height={211}
                    className="w-auto xl:!w-[492px] h-auto xl:!h-[211px] object-contain"
                  />
                </div>
              </div> */}
        <div
          className="w-full md:w-[48%] md:h-[calc(100vh-64px)] lg:h-[calc(100vh-66px)] [@media(min-width:1600px)]:h-[calc(100vh-104px)]
                 [@media(min-width:1600px)]::mt-[2rem] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
          // style={{
          //   background:
          //     "linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%)",
          // }}
        >
          <div className="relative w-full h-full rounded-[16px] overflow-hidden">
            {/* Background video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/authIcons/authVid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Dark translucent overlay */}
            <div className="absolute inset-0 bg-[#000D1F]/32"></div>

            {/* Foreground content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-8">
              <Image
                src={authLogo}
                alt="PeptideMD Logo"
                width={492}
                height={211}
                className="w-auto xl:!w-[492px] h-auto xl:!h-[211px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-[52%] flex justify-start items-center max-sm:mt-6 max-sm:mb-20">
          <div className="w-full max-w-lg p-2 lg:px-4 bg-white rounded-3xl">
            {/* Back Button */}
            <div className="mb-6">
              <button
                onClick={() => {
                  if (from === "signup") {
                    router.push("/Signup");
                  } else if (from === "forgetpassword") {
                    router.push("/ForgetPassword");
                  } else {
                    router.push("/");
                  }
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition"
              >
                <IoIosArrowRoundBack className="txt-24" />
              </button>
            </div>

            {/* Icon */}
            <div className="p-2  bg-[#DD6F941F] border-[#DD6F94] border-1 rounded-xl flex items-center justify-center w-fit lg:w-15 lg:h-15 mb-6">
              <img
                src="/authIcons/password-check.png"
                alt="SMS Icon"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h2 className="txt-32 font-semibold mb-2 text-[#25292A]">
              Enter Verification Code
            </h2>
            <p className="txt-20 text-[#51595A] mb-6 w-full 2xl:w-[496px]">
              Please enter the verification code sent to{" "}
              <span className="text-[#224674]">janecooper10@gmail.com</span> to verify your request and continue resetting your password.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="w-full 2xl:w-[496px] 2xl:h-[56px] flex justify-around  gap-2 lg:gap-3 mb-6">
                {code.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    onPaste={handlePaste}
                    ref={(el) => {
                      inputsRef.current[idx] = el;
                    }}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-14 xl:w-18 xl:h-16
                  text-center txt-18 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
                  />
                ))}
              </div>

              <div className="text-left mb-6">
                {secondsLeft > 0 ? (
                  <div className="text-[#8D9A9B] txt-18 font-[400] leading-[100%] font-[Afacad Flux]">
                    Request a new code (0:
                    {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft})
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-[#224674] txt-16 font-[600] leading-[100%] underline font-[Afacad Flux] transition"
                  >
                    Request a new code
                  </button>
                )}
              </div>

              <button
                type="submit"
                className={`w-full txt-18 2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
                  !isFormValid()
                    ? "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
                    : "bg-[#224674] text-white"
                }`}
                disabled={!isFormValid()}
              >
                {isSubmitting ? (
                  <img
                    src="/loader.gif"
                    alt="Loading..."
                    className="w-6 h-6 mx-auto bg-[#224674]"
                  />
                ) : (
                  "Verify"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* === Footer === */}
      {/* <footer className="bg-[#F2F5F6] py-2">
        <div className="max-w-[1440px] sm:mx-auto sm:px-6 grid grid-cols-3 max-sm:flex max-sm:flex-col max-sm:gap-1 items-center text-[#25292A] txt-16 font-medium">
          
          <p className="text-left max-md:text-center">
            Privacy Policy <span className="px-4">|</span> Terms & Conditions
          </p>
      
          <span className="text-center">
            © 2025, Nuda Peptide Therapeutics, All Rights Reserved
          </span>
      
          <div className="flex justify-end max-md:justify-center gap-4 text-[#224674] text-lg">
            <FaFacebookF />
            <FaLinkedinIn />
            <AiFillInstagram />
            <FaXTwitter />
          </div>
          
        </div>
      </footer> */}
    </div>
  );
}

export default function SixDigitVerify() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SixDigitVerifyInner />
    </Suspense>
  );
}
