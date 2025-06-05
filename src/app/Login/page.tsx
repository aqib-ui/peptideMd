"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../public/headerIcon/logo.png";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};
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

    return newErrors;
  };

  const isFormValid = () => {
    const currentErrors = validate();
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500)); // Simulated delay
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:justify-between p-4 xl:py-8 xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34">
      {/* Left Section */}
      <div
        className="md:w-[48%] max-w-[922px] max-h-[975px] p-[2px] rounded-[48px]"
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
            className=""
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
        <div className="w-full max-w-2xl p-2 lg:p-4  bg-white rounded-3xl">
          {/* Back Button */}
          <div className="mb-6">
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition">
              <span className="txt-24 font-medium text-gray-700">
                <IoIosArrowRoundBack className="txt-24" />
              </span>
            </button>
          </div>

          <h2 className="txt-32 font-semibold mb-2">
            Welcome back to PeptideMD
          </h2>
          <p className="txt-20 text-gray-500 mb-6">
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
              <label className="block txt-16 font-medium mb-1">
                Password<span className="text-red-500">*</span>
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
            {/* <div>
              <label className="block txt-16 font-medium mb-1">
                Confirm Password<span className="text-red-500">*</span>
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
            </div> */}

            {/* Forgot Password */}
            <div className="w-full 2xl:w-[496px] mt-1">
              <Link
                href="/ForgetPassword"
                className="txt-18 text-[#224674] font-semibold underline block text-right"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full  2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
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
                       <div className="w-full 2xl:w-[496px] mt-1">
              <Link
                href="/ForgetPassword"
                className="txt-18 text-[#224674] font-semibold underline block text-center"
              >
                I dont have an account?
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
