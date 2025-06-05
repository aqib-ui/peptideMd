"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../public/headerIcon/logo.png";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
      newErrors.fullName = "Full name must contain only letters and spaces.";
    }

    if (!email) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email.";

    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return newErrors;
  };

  const isFormValid = () => {
    const currentErrors = validate();
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(); // Run validation
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));

    // ✅ Redirect after loading finishes
    router.push("/SixDigitVerify?from=signup");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:justify-between p-4 xl:py-8 xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34">
      {/* Left Section */}
      <div
        className="w-full md:w-[48%] md:h-[calc(100vh-64px)] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
        style={{
          background: "linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%)",
        }}
      >
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
      <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
        <div className="w-full max-w-2xl p-2 lg:px-4  bg-white rounded-3xl">
          {/* Back Button */}
          <Link href="/Login">
            <div className="mb-6">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition">
                <IoIosArrowRoundBack className="text-gray-700 txt-24" />
              </button>
            </div>
          </Link>

          <h2 className="txt-32 font-semibold mb-2">
            Create your PeptideMD Account
          </h2>
          <p className="txt-20 text-gray-500 mb-6">
            Access expert resources, AI insights, and personalized tracking.
          </p>

          <form noValidate className="space-y-3" onSubmit={handleSubmit}>
            {/* Full name Field */}
            <div>
              <label className="block txt-16 font-normal mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`w-full  2xl:w-[496px] 2xl:h-[56px] rounded-md bg-[#F2F5F6] p-3 txt-14 outline-none ${
                  errors.email
                    ? "border border-red-500"
                    : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block txt-16 font-normal mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full  2xl:w-[496px] 2xl:h-[56px] rounded-md bg-[#F2F5F6] p-3 txt-14 outline-none ${
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
              <label className="block txt-16 font-normal mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full 2xl:w-[496px]">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-[56px] border bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none rounded-md ${
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

            {/* Confirm Password Field */}
            <div>
              <label className="block txt-16 font-normal mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>

              <div className="relative w-full 2xl:w-[496px]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full h-[56px] rounded-md bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none ${
                    errors.confirmPassword
                      ? "border border-red-500"
                      : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
                  }`}
                  placeholder="Re-enter your password"
                />
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setshowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showConfirmPassword ? (
                      <RiEyeLine className="txt-24 text-[#224674]" />
                    ) : (
                      <RiEyeOffLine className="txt-24 text-[#224674]" />
                    )}
                  </button>
                </div>
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* terms and contion */}
            <p className="txt-16 text-gray-500 mb-6 w-full 2xl:w-[496px] mt-1 text-center">
              By continuing, you agree with Nuda Peptide Therapeutics{" "}
              <span className="text-[#224674]">Terms of Service</span> and{" "}
              <span className="text-[#224674]">Privacy Policy.</span>
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full 2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
                !isFormValid
                  ? "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
                  : "bg-[#224674] text-white"
              }`}
              disabled={!isFormValid}
            >
              {isSubmitting ? (
                <img
                  src="/loader.gif"
                  alt="Loading..."
                  className="w-6 h-6 mx-auto bg-[#224674]"
                />
              ) : (
                "Agree and Sign up"
              )}
            </button>

            {/* login Link */}
            <div className="w-full 2xl:w-[496px] mt-1">
              <Link
                href="/Login"
                className="txt-18 text-[#224674] font-semibold underline block text-center"
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
