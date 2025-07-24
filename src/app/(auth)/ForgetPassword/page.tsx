"use client";
import { useState } from "react";
import Image from "next/image";
// import logo from "../../../public/headerIcon/logo.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SideAnimation from "../authComponents/SideAnimation";

export default function EmailVerification() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setIsSubmitting(true);
    try {
      // 🔁 Send OTP
      const otpResponse = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_mobile_check-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const otpResult = await otpResponse.json();

      if (otpResult.status === "success") {
        localStorage.setItem("peptide_user_email", email);
        router.push("/SixDigitVerify?from=forgetpassword");
      } else {
        alert("Please enter a valid email address." + otpResult.message);
      }
    } catch (error) {
      console.error("🔁 error ===>", error);
      if (error instanceof Error) {
        alert("Please enter a valid email address." + error.message);
      } else {
        alert("Please enter a valid email address. An unknown error occurred.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" min-h-[100vh] flex flex-col  md:flex-row items-stretch gap-10 xl:gap-20 2xl:gap-32 pt-10 pl-6 xl:pl-10 pr-6 xl:pr-20 pb-10 2xl:pb-20  ">
      {/* <Toaster position="top-center" /> */}
      {/* === Left Section === */}
      <SideAnimation />
      {/* Right Section */}
      <div className=" w-full md:w-[50%] flex self-center ">
        <div className="   bg-white  mx-auto md:mx-0 ">
          {/* Back Button */}
          <Link href="/Login">
            <div className="mb-6">
              <button
                className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200
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
              className={` w-full txt-18 py-3 2xl:w-[496px] 2xl:h-[56px] rounded-full font-semibold transition ${
                !email || error
                  ? "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
                  : "bg-[#224674] text-white cursor-pointer"
              }`}
              disabled={!email || !!error || isSubmitting}
            >
              {isSubmitting ? (
                <img
                  src="/homePage/loader.gif"
                  alt="Loading..."
                  className="w-6 h-6 mx-auto bg-[#224674] "
                />
              ) : (
                "Continue"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
