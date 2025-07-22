"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
export const dynamic = "force-dynamic";
function SixDigitVerifyInner() {
  const [code, setCode] = useState(Array(5).fill(""));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const email =
    typeof window !== "undefined"
      ? localStorage.getItem("peptide_user_email")
      : null;

  const isFormValid = () => {
    return code.every((digit) => digit !== "");
  };

  const handleResendCode = async () => {
    if (!email) return toast.error("Email not found!");

    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_mobile_check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        toast.success("OTP sent again!");
        setSecondsLeft(30); //reset timer on resend
      } else {
        toast.error(result.message || "Failed to resend code.");
      }
    } catch (err) {
      toast.error("Network error while resending code.");
    }
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
  }, [secondsLeft]);

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
    } else if (e.key === "ArrowRight" && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .slice(0, 4)
      .replace(/\D/g, "");
    if (pasted.length === 5) {
      const newCode = pasted.split("");
      setCode(newCode);
      inputsRef.current[5]?.focus();
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const verificationCode = code.join("");

    if (!email || verificationCode.length !== 5) {
      toast.error("Please enter a valid 5-digit code.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_mobile_verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp: verificationCode,
          }),
        }
      );

      const result = await response.json();
      console.log("🔁 OTP Verify Response:", result);

      if (result.status === "success") {
        toast.success("OTP verified!");

        if (from === "signup") {
          router.push("/SixDigitVerify/on-board");
          localStorage.removeItem("peptide_user_email");
        } else if (from === "forgetpassword") {
          router.push("/CreateNewPassword");
        } else {
          router.push("/");
        }
      } else {
        const rawMsg = result?.message || "Invalid OTP";
        const msgNormalized = rawMsg.toLowerCase().trim();

        if (
          msgNormalized === "invalid otp" ||
          msgNormalized.includes("otp") ||
          msgNormalized.includes("expired")
        ) {
          toast.error("Invalid or expired OTP. Please try again.");
        } else {
          toast.error(rawMsg);
        }
      }
    } catch (err) {
      console.error("🚨 OTP Verify Error:", err);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
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
        <div
          className="w-full md:w-[48%] md:h-[calc(100vh-64px)] lg:h-[calc(100vh-66px)] [@media(min-width:1600px)]:h-[calc(100vh-104px)]
                 [@media(min-width:1600px)]::mt-[2rem] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
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
                priority
                src="/authIcons/authLogo.png"
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
                className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition"
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
              <span className="text-[#224674]">{email || "your email"}</span> to
              verify your request and continue resetting your password.
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
                    className=" cursor-pointer text-[#224674] txt-16 font-[600] leading-[100%] underline font-[Afacad Flux] transition"
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
                    : "bg-[#224674] text-white cursor-pointer"
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
