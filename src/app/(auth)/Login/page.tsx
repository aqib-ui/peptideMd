"use client";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    return newErrors;
  };

  const isFormValid = () => {
    const currentErrors = validate();
    return Object.keys(currentErrors).length === 0;
  };

  //   const validationErrors = validate();
  //   setErrors(validationErrors); // Update UI with errors

  //   if (Object.keys(validationErrors).length > 0) return;

  //   setIsSubmitting(true);

  //   // Simulate login API
  //   await new Promise((resolve) => setTimeout(resolve, 1500));

  //   setIsSubmitting(false);

  //   // On successful login
  //   router.push("/Dashboard");
  // };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_mobile_login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      let result;

      // Try parsing JSON safely
      try {
        result = await response.json();
      } catch (jsonError) {
        console.error("Invalid JSON response", jsonError);
        toast.error("Unexpected server response. Please try again later.");
        return;
      }

      if (!response.ok) {
        console.error("HTTP Error:", response.status);
        toast.error(result?.message || "Login failed. Try again.");
        return;
      }

      if (result.status === "success") {
        localStorage.setItem("peptide_user_token", result.data.token);
        localStorage.setItem("peptide_user", JSON.stringify(result.data.user));
        toast.success("Login successful!");
        router.push("/Dashboard");
      } else {
        toast.error(result.message || "Invalid credentials.");
      }
    } catch (error: any) {
      console.error("Network/API Error:", error);
      toast.error(
        "Something went wrong. Please check your internet connection."
      );
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
        <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
          <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
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

            <h2 className="txt-32 font-semibold mb-2 text-[#25292A]">
              Welcome back to PeptideMD
            </h2>
            <p className="txt-20 text-[#51595A]  mb-6">
              Continue exploring peptides, AI guidance, and your personalized
              progress.
            </p>

            <form noValidate className="space-y-1" onSubmit={handleSubmit}>
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
                    const validationErrors = validate();
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
                        <RiEyeLine className="cursor-pointer txt-24 text-[#224674]" />
                      ) : (
                        <RiEyeOffLine className="cursor-pointer txt-24 text-[#224674]" />
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
