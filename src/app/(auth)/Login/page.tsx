// after eid footer added
"use client";
import Image from "next/image";
import { useState } from "react";

import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    // confirmPassword?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    // if (!confirmPassword) {
    //   newErrors.confirmPassword = "Confirm Password is required.";
    // } else if (confirmPassword !== password) {
    //   newErrors.confirmPassword = "Passwords do not match.";
    // }

    return newErrors;
  };

  const isFormValid = () => {
    const currentErrors = validate();
    return Object.keys(currentErrors).length === 0;
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!isFormValid()) return;
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validate(); // Run validation
  //   if (Object.keys(validationErrors).length > 0) return;

  //   setIsSubmitting(true);
  //   await new Promise((r) => setTimeout(r, 1500)); // Simulated delay
  //   setIsSubmitting(false);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors); // Update UI with errors

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    // Simulate login API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    // On successful login
    router.push("/Dashboard");
  };

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
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
        <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
          <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
            {/* Back Button */}
            <Link href="/">
              <div className="mb-6">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition">
                  <IoIosArrowRoundBack className="text-gray-700 txt-24" />
                </button>
              </div>
            </Link>

            <h2 className="txt-32 font-semibold mb-2 text-[#25292A]">
              Welcome back to PeptideMD
            </h2>
            <p className="txt-20 text-[#51595A]  mb-6">
              Continue exploring peptides, AI guidance, and your personalized
              progress.
            </p>

            <form noValidate className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label className="block txt-16 font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full  2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none ${
                    errors.email
                      ? "border border-red-500"
                      : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label className="block txt-16 font-medium mb-1">
                  Password<span className="text-red-500">*</span>
                </label>
                <div className="relative w-full 2xl:w-[496px]">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full  2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none border ${
                      errors.password
                        ? "border-red-500"
                        : "border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                    }`}
                    placeholder="Enter your password"
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showPassword ? (
                        <RiEyeLine className="txt-24 text-[#224674]" />
                      ) : (
                        <RiEyeOffLine className="txt-24 text-[#224674]" />
                      )}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="w-full 2xl:w-[496px] mt-1 flex justify-end">
                <Link
                  href="/ForgetPassword"
                  className="txt-18 text-[#224674] font-semibold underline text-right"
                  // className="inline-block text-[#224674] font-semibold underline text-right text-[18px]"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
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
                  "Log in"
                )}
              </button>

              {/* Sign Up Link */}
              <div className="w-full 2xl:w-[496px] mt-1 flex justify-center">
                <Link
                  href="/Signup"
                  className="inline-block text-[#224674] font-semibold underline text-center txt-18"
                >
                  I don’t have an account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
