"use client";
import { useState } from "react";
import Image from "next/image";
// import logo from "../../../public/headerIcon/logo.png";
import authLogo from "../../../public/authIcons/authLogo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
// import { FaXTwitter } from "react-icons/fa6";

export default function EmailVerification() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/SixDigitVerify?from=forgetpassword");
    }, 1000); // adjust delay if needed
  };

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
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
        <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
          <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
            {/* Back Button */}
            <Link href="/Login">
              <div className="mb-6">
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200
                 hover:bg-gray-50 transition"
                >
                  <IoIosArrowRoundBack className="text-gray-700 txt-24" />
                </button>
              </div>
            </Link>

            {/* Envelope Icon */}
            <div className="p-2  bg-[#DD6F941F] border-[#DD6F94] border-1 rounded-xl flex items-center justify-center w-fit lg:w-15 lg:h-15 mb-6">
              <img
                src="/authIcons/sms.png"
                alt="SMS Icon"
                className="w-10 h-10 object-contain"
              />
            </div>

            <h2 className="txt-32 font-semibold mb-2  text-[#25292A]">
              Email Verification
            </h2>
            <p className="txt-20 text-[#51595A] mb-6">
              Enter your email address and we'll send you a code to reset your
              password.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label className="block txt-16 font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setEmail(value);
                    if (!isValidEmail(value)) {
                      setError("Please enter a valid email address.");
                    } else {
                      setError(null);
                    }
                  }}
                  placeholder="Enter your email address"
                  className={`w-full rounded-md bg-[#F2F5F6] p-3 2xl:w-[496px] 2xl:h-[56px] txt-14 outline-none
                    ${
                      error
                        ? "border border-red-500"
                        : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                    }`}
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full txt-18 py-3 2xl:w-[496px] 2xl:h-[56px] rounded-full font-semibold transition ${
                  !email || error
                    ? "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
                    : "bg-[#224674] text-white"
                }`}
                disabled={!email || !!error || isSubmitting}
              >
                {isSubmitting ? (
                  <img
                    src="/loader.gif"
                    alt="Loading..."
                    className="w-6 h-6 mx-auto bg-[#224674]"
                  />
                ) : (
                  "Continue"
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
