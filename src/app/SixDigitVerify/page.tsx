"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import logo from "../../../public/headerIcon/logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    const newCode = [...code];
    newCode[index] = value[0];
    setCode(newCode);

    if (index < 5 && value) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputsRef.current[index - 1]?.focus();
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
      alert("Please enter all 6 digits.");
      setIsSubmitting(false);
    } else {
      setTimeout(() => {
        alert("Verification successful!");
        setIsSubmitting(false);

        if (from === "signup") {
          router.push("/Signup");
        } else if (from === "forgetpassword") {
          router.push("/ForgetPassword");
        } else {
          router.push("/");
        }
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:justify-between p-4 xl:py-8 xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34">
      {/* Left Section */}
      <div className="w-full md:w-[48%] md:h-[calc(100vh-64px)] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
        style={{
          background: "linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%)",
        }}>
        <div className="bg-white rounded-[48px] p-8 flex items-center justify-center w-full h-full">
          <Image
            src={logo}
            alt="PeptideMD Logo"
            width={492}
            height={211}
            className="max-w-full h-auto object-contain"
          />
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
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition"
            >
              <IoIosArrowRoundBack className="txt-24" />
            </button>
          </div>

          {/* Icon */}
          <div className="p-2 bg-[#DD6F941F] border-[#DD6F94] border-1 rounded-xl flex items-center justify-center w-fit mb-6">
            <img
              src="/authIcons/password-check.png"
              alt="SMS Icon"
              className="w-10 h-10 object-contain"
            />
          </div>

          <h2 className="txt-32 font-semibold mb-2">Enter Verification Code</h2>
          <p className="txt-20 text-gray-500 mb-6">
            Please enter the verification code sent to{" "}
            <span className="text-[#224674]">janecooper10@gmail.com</span> to
            complete your signup and start your personalized peptide journey.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="w-full 2xl:w-[496px] 2xl:h-[56px] flex justify-center gap-3 mb-6">
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
                  className="w-18 h-16 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-gray-50"
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
              className={`w-full 2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
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
  );
}

export default function SixDigitVerify() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SixDigitVerifyInner />
    </Suspense>
  );
}
