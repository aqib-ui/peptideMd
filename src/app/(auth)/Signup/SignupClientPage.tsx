"use client";
import Image from "next/image";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SideAnimation from "../authComponents/SideAnimation";

type ErrorState = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export default function SignupClientPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ErrorState>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  //Validation function to validate fields in client side
  const validateFields = (): ErrorState => {
    const newErrors: ErrorState = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    else if (!/^[a-zA-Z\s]+$/.test(fullName))
      newErrors.fullName = "Full name must contain only letters and spaces.";

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!confirmPassword)
      newErrors.confirmPassword = "Confirm password is required.";
    else if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match.";

    return newErrors;
  };

  const isFormValid = (): boolean => {
    const validation = validateFields();
    return Object.keys(validation).length === 0;
    // check if the object is empty so the form is valid then return true otherwise return false
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFields();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_mobile_register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            email: email,
            password: password,
          }),
        }
      );

      const result = await response.json();
      console.log("🔁 Server Response ===>", result);

      // ✅ Only handle everything below based on result.status
      if (result.status === "success") {
        const email = result.data.user.email;

        localStorage.setItem("peptide_user_email", email);
        localStorage.setItem("peptide_user_token", result.data.user.token);

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
          router.push("/SixDigitVerify?from=signup");
        } else {
          alert("Failed to send OTP: " + otpResult.message);
        }
      } else {
        const rawMsg = result?.message || "";
        const msgNormalized = rawMsg.toLowerCase().trim();
        console.log("📩 Normalized Message ===>", msgNormalized);

        if (
          msgNormalized.includes("email") &&
          msgNormalized.includes("exists")
        ) {
          setErrors((prev) => ({
            ...prev,
            email: "This email is already registered. Please use another one.",
          }));
        } else {
          alert(rawMsg || "Something went wrong.");
        }
      }
    } catch (error) {
      console.error("🚨 Registration Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" min-h-[100vh] flex flex-col  md:flex-row items-stretch gap-10 xl:gap-20 2xl:gap-32 pt-10 pl-6 xl:pl-10 pr-6 xl:pr-20 pb-10 2xl:pb-20  ">
      {/* === Left Section === */}
      <SideAnimation />

      {/* Right Section */}
      <div className=" w-full md:w-[50%] flex py-10  self-center ">
        <div className="   bg-white  mx-auto md:mx-0 ">
          {/* Back Button */}
          <div onClick={() => router.back()} className="cursor-pointer mb-3">
            <Image
              src="/authIcons/authBack-button.svg"
              height={24}
              width={24}
              className="h-10 w-10"
              alt="left-arrows"
            />
          </div>

          <h2 className="txt-32 font-semibold mb-2  text-[#25292A]">
            Create your PeptideMD Account
          </h2>
          <p className="txt-20 text-[#51595A]  max-md:mb-6 2xl:mb-3 [@media(min-width:1600px)]:mb-4">
            Access expert resources, AI insights, and personalized tracking.
          </p>

          <form noValidate className="space-y-3" onSubmit={handleSubmit}>
            {/* Full name Field */}

            <div className="">
              <label className="block txt-16 font-normal mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                // When user Enters in the field hide the error
                onFocus={() => {
                  if (errors.fullName) {
                    setErrors((prev) => ({
                      ...prev,
                      fullName: undefined,
                    }));
                  }
                }}
                // When user leaves the field check for errors
                onBlur={() => {
                  const validationErrors = validateFields();
                  setErrors((prev) => ({
                    ...prev,
                    fullName: validationErrors.fullName,
                  }));
                }}
                className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
                  errors.fullName
                    ? "border border-[#F14D4D] bg-[rgba(241,77,77,0.08)]"
                    : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                }`}
                placeholder="Enter your full name"
              />

              {/* Error message with fixed height and opacity transition */}
              <p
                className={`text-[#25292A] flex gap-1 text-xs mt-1 transition-opacity duration-100 ${
                  errors.fullName ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/authIcons/info-circle.svg"
                  alt="warning"
                  width={16}
                  height={16}
                />{" "}
                {errors.fullName ?? "\u00A0"}
              </p>
            </div>

            {/* Email Field */}
            <div className="">
              <label className="block txt-16 font-normal mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {
                  // Just entering the field hides the error
                  if (errors.email) {
                    setErrors((prev) => ({
                      ...prev,
                      email: undefined,
                    }));
                  }
                }}
                onBlur={() => {
                  const validationErrors = validateFields();
                  setErrors((prev) => ({
                    ...prev,
                    email: validationErrors.email,
                  }));
                }}
                className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
                  errors.email
                    ? "border border-[#F14D4D] bg-[rgba(241,77,77,0.08)]"
                    : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                }`}
                placeholder="Enter your email address"
              />
              {/* Error message with fixed height and opacity transition */}
              <p
                className={`text-[#25292A] flex gap-1 text-xs mt-1 transition-opacity duration-100 ${
                  errors.email ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/authIcons/info-circle.svg"
                  alt="warning"
                  width={16}
                  height={16}
                />{" "}
                {errors.email ?? "\u00A0"}
              </p>
            </div>

            {/* Password Field */}
            <div className="">
              <label className="block txt-16 font-normal mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full h-full 2xl:w-[496px] ">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => {
                    if (errors.password) {
                      setErrors((prev) => ({
                        ...prev,
                        password: undefined,
                      }));
                    }
                  }}
                  onBlur={() => {
                    const validationErrors = validateFields();
                    setErrors((prev) => ({
                      ...prev,
                      password: validationErrors.password,
                    }));
                  }}
                  className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
                    errors.password
                      ? "border border-[#F14D4D] bg-[rgba(241,77,77,0.08)]"
                      : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                  }`}
                  placeholder="Enter your password"
                />

                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#51595A]  hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <RiEyeLine className="txt-24 cursor-pointer text-[#224674]" />
                    ) : (
                      <RiEyeOffLine className="txt-24 cursor-pointer text-[#224674]" />
                    )}
                  </button>
                </div>
              </div>
              {/* Error message with fixed height and opacity transition */}
              <p
                className={`text-[#25292A] flex gap-1 text-xs mt-1 transition-opacity duration-100 ${
                  errors.password ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/authIcons/info-circle.svg"
                  alt="warning"
                  width={16}
                  height={16}
                />{" "}
                {errors.password ?? "\u00A0"}
              </p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block txt-16 font-normal mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>

              <div className="relative w-full h-full 2xl:w-[496px]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => {
                    if (errors.confirmPassword) {
                      setErrors((prev) => ({
                        ...prev,
                        confirmPassword: undefined,
                      }));
                    }
                  }}
                  onBlur={() => {
                    const validationErrors = validateFields();
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: validationErrors.confirmPassword,
                    }));
                  }}
                  className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
                    errors.confirmPassword
                      ? "border border-[#F14D4D] bg-[rgba(241,77,77,0.08)]"
                      : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                  }`}
                  placeholder="Re-enter your password"
                />

                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-[#51595A]  hover:text-gray-700 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <RiEyeLine className="txt-24 cursor-pointer text-[#224674]" />
                    ) : (
                      <RiEyeOffLine className="txt-24 cursor-pointer text-[#224674]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error message with fixed height and opacity transition */}
              <p
                className={`text-[#25292A] flex gap-1 text-xs mt-1 transition-opacity duration-100 ${
                  errors.confirmPassword ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/authIcons/info-circle.svg"
                  alt="warning"
                  width={16}
                  height={16}
                />{" "}
                {errors.confirmPassword ?? "\u00A0"}
              </p>
            </div>

            {/* terms and contion */}
            <p className="txt-16 text-[#51595A] max-sm:my-6 mb-2 [@media(min-width:1600px)]:mb-6 w-full 2xl:w-[496px] mt-1 text-center">
              By continuing, you agree with Nuda Peptide Therapeutics{" "}
              <span className="text-[#224674]">Terms of Service</span> and{" "}
              <span className="text-[#224674]">Privacy Policy.</span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid()}
              className={`w-full txt-18 2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
                isFormValid()
                  ? " bg-[#224674] text-white cursor-pointer"
                  : "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
              }`}
            >
              {isSubmitting ? (
                <img
                  src="/homePage/loader.gif"
                  alt="Loading..."
                  className="w-6 h-6 mx-auto  "
                />
              ) : (
                "Agree and Sign up"
              )}
            </button>

            {/* login Link */}
            <div className="w-full 2xl:w-[496px] mt-1 flex justify-center ">
              <Link
                href="/Login"
                className="txt-18 text-[#224674] font-semibold underline text-center"
              >
                I have an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
