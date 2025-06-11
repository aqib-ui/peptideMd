"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/headerIcon/logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

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
        className=" flex flex-col  md:flex-row md:justify-between max-sm:p-4 px-4 pt-4 pb-3 [@media(min-width:1600px)]:p- 
      xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34"
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
        </div>

        {/* Right Section */}
        <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
          <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
            {/* Back Button */}
            <Link href="/Login">
              <div className="mb-6">
                <button
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200
                 hover:bg-gray-50 transition"
                >
                  <IoIosArrowRoundBack className="text-gray-700 txt-24" />
                </button>
              </div>
            </Link>

            {/* Envelope Icon */}
            <div className="p-2 bg-[#DD6F941F] border-[#DD6F94] border-1 rounded-xl flex items-center justify-center w-fit mb-6">
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
      <footer className="bg-[#F2F5F6] py-2">
        <div className="max-w-full mx-auto px-10 flex justify-between  items-center max-md:flex-col max-md:gap-1 max-md:text-center txt-16 text-[#25292A]">
          {/* <Link href="/privacy-policy"> */}
          <p className="text-[#25292A] ">
            Privacy Policy <span className="px-4 max-lg:px-1">|</span> Terms &amp; Conditions
          </p>
          {/* </Link> */}
          <span className="text-[#25292A] ">
            © 2025, Nuda Peptide Therapeutics, All Rights Reserved
          </span>
          {/* <Link href="/terms"> */}
          <p className="text-[#224674] gap-4 flex items-center txt-20">
            <FaFacebookF />
            <FaLinkedinIn />
            <AiFillInstagram />
            <FaXTwitter />
          </p>
          {/* </Link> */}
        </div>
      </footer>
    </div>
  );
}
