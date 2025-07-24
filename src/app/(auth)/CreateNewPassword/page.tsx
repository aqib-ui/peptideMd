"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import SideAnimation from "../authComponents/SideAnimation";
type ErrorState = {
  password?: string;
  confirmPassword?: string;
};
export default function CreateNewPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
  }>({});

  const validateForm = (): ErrorState => {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = "Please enter your password.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };
  const isFormValid = (): boolean => {
    const validation = validateForm();
    return Object.keys(validation).length === 0;
    // check if the object is empty so the form is valid then return true otherwise return false
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/v1_web_forget-password",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        toast.success("Your password has been reset successfully.");
        router.push("/Login");
        localStorage.removeItem("peptide_user_email");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("🔁 error ===>", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem("peptide_user_email") || "");
    console.log("🔁 email ===>", email);
    // if (!email || email === null ) {
    //   router.push("/Login");
    // }
  }, [email]);

  return (
    <div className=" min-h-[100vh] flex flex-col  md:flex-row items-stretch gap-10 xl:gap-20 2xl:gap-32 pt-10 pl-6 xl:pl-10 pr-6 xl:pr-20 pb-10 2xl:pb-20  ">
      <Toaster position="top-center" />
      {/* === Left Section === */}
      <SideAnimation />
      {/* Right Section */}
      <div className=" w-full md:w-[50%] flex self-center ">
        <div className="   bg-white  mx-auto md:mx-0 ">
          {/* Back Button */}
          <Link href="/Login">
            <div className="mb-6">
              <button className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition">
                <IoIosArrowRoundBack className="text-gray-700 txt-24" />
              </button>
            </div>
          </Link>
          {/* Icon */}
          <div className="p-2  bg-[#DD6F941F] border-[#DD6F94] border-1 rounded-xl flex items-center justify-center w-fit lg:w-15 lg:h-15 mb-6">
            <img
              src="/authIcons/lock.png"
              alt="SMS Icon"
              className="w-10 h-10 object-contain"
            />
          </div>

          <form noValidate className="space-y-2" onSubmit={handlePasswordReset}>
            <h2 className="txt-32 font-semibold mb-2 text-[#25292A]">
              Create New Password
            </h2>
            <p className="txt-20 text-[#51595A] mb-6 w-full  2xl:w-[496px]">
              Set a strong new password to secure your account and get back to
              exploring PeptideMD.
            </p>

            {/* Password Field */}
            <div>
              <label className=" block txt-16 font-normal mb-1">
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
                    const validationErrors = validateForm();
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
                  placeholder="Enter your new password"
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
                    const validationErrors = validateForm();
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
                  className="w-6 h-6 mx-auto bg-[#224674]"
                />
              ) : (
                "Reset Password"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
