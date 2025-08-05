"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

export default function ChangePassword({
  changePassword,
  setChangePassword,
}: Readonly<{
  setChangePassword: React.Dispatch<React.SetStateAction<boolean>>;
  changePassword: any;
}>) {
  type ErrorState = {
    oldPassword?: string;
    password?: string;
    confirmPassword?: string;
  };

  // get user form local storage
  const user = JSON.parse(localStorage.getItem("peptide_user") || "{}");
  //   console.log(user);
  const userName = user?.name || "your name";
  const userEmail = user?.email || "your email";
  // get user password from local storage and deecrypt it
  const userPassword = user?.password;

  const token = localStorage.getItem("peptide_user_token") || "";
  console.log(token);

  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<ErrorState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Validation function to validate fields in client side
  const validateFields = (): ErrorState => {
    const newErrors: ErrorState = {};
    if (!oldPassword) newErrors.oldPassword = "Old password is required.";

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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateFields();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    
    //api call 
  };
  return (
    <>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"></div>

      {/* Dialog Box */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white  p-6 rounded-2xl w-[480px] max-h-[550px] shadow-xl flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center justify-between  pb-3 ">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#25292A]">
              Change Password
            </h2>
            <button
              className="cursor-pointer"
              onClick={() => setChangePassword(false)}
            >
              <Image
                src="/profileIcons/cross-icon.svg"
                alt="close"
                width={20}
                height={20}
                className="w-7 h-7"
              />
            </button>
          </div>
          {/* Content */}

          {/* Form Fields */}
          <form
            noValidate
            className="flex flex-col gap-0.5"
            onSubmit={handleSubmit}
          >
            {/* Old Password Field */}
            <div className="">
              <label className="block txt-16 font-normal mb-1">
                Old Password <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full h-full  ">
                <input
                  type={showPassword ? "text" : "password"}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  onFocus={() => {
                    if (errors.oldPassword) {
                      setErrors((prev) => ({
                        ...prev,
                        oldPassword: undefined,
                      }));
                    }
                  }}
                  onBlur={() => {
                    const validationErrors = validateFields();
                    setErrors((prev) => ({
                      ...prev,
                      oldPassword: validationErrors.oldPassword,
                    }));
                  }}
                  className={`w-full  2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
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
                  errors.oldPassword ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src="/authIcons/info-circle.svg"
                  alt="warning"
                  width={16}
                  height={16}
                />{" "}
                {errors.oldPassword ?? "\u00A0"}
              </p>
            </div>

            {/* Link to forgot password */}
            <Link
              href="/ForgetPassword"
              className="text-[#224674] text-sm self-end font-semibold underline mb-1"
            >
              Forgot Password?
            </Link>

            {/* Password Field */}
            <div className="">
              <label className="block txt-16 font-normal mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative w-full h-full  ">
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
                  className={`w-full  2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
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

              <div className="relative w-full h-full ">
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
                  className={`w-full  2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
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
              className={`w-full txt-18 mt-1 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
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
                "Save Changes"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
