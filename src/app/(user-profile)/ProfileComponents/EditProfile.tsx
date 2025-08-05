"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function EditProfile({
  showEditProfileModal,
  setShowEditProfileModal,
}: Readonly<{
  setShowEditProfileModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEditProfileModal: any;
}>) {
  type ErrorState = {
    fullName?: string;
    email?: string;
  };

  // get user form local storage
  const user = JSON.parse(localStorage.getItem("peptide_user") || "{}");
  //   console.log(user);
  const userName = user?.name || "your name";
  const userEmail = user?.email || "your email";
  const token = localStorage.getItem("peptide_user_token") || "";
  console.log(token);

  const [fullName, setFullName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [errors, setErrors] = useState<ErrorState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Validation function to validate fields in client side
  const validateFields = (): ErrorState => {
    const newErrors: ErrorState = {};
    if (!fullName.trim())
      newErrors.fullName = "Sorry, You can't leave your name empty.";
    else if (!/^[a-zA-Z\s]+$/.test(fullName))
      newErrors.fullName = "Full name must contain only letters and spaces.";

    // if (!email.trim()) newErrors.email = "Email is required.";
    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    //   newErrors.email = "Enter a valid email.";

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

    // update the user profile api and close the modal
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://peptide-backend.mazedigital.us/users/update_profile_name",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: fullName,
          }),
        }
      );

      const result = await response.json();
      console.log("🔁 Server Response ===>", result);

      if (result.status === "success") {
        toast.success("Your profile has been updated successfully.");
        localStorage.setItem("peptide_user", JSON.stringify(result.data));
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("🔁 Error ===>", error);
    } finally {
      setIsSubmitting(false);
      setShowEditProfileModal(false);
    }
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
              Edit Profile
            </h2>
            <button
              className="cursor-pointer"
              onClick={() => setShowEditProfileModal(false)}
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
          {/* User Avatar */}
          <div className="relative p-[2.5px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFC02E] to-[#D7D43C]  self-center">
            <div className="w-[90px] h-[90px] rounded-full text-4xl bg-[#C8E4FC] flex items-center justify-center text-[#224674] font-semibold">
              JC
            </div>
            <Image
              src="/headerIcon/chevron-down.svg"
              alt="chevron-down"
              width={24}
              height={24}
              className="absolute top-0 transform translate-x-2/2 w-[36px] h-[36px]"
            />
          </div>

          {/* Form Fields */}
          <form
            noValidate
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
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
                  className={`w-full  2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 ${
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
                  readOnly
                  className={`w-full 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none transition-all duration-300 
                  border  border-[#D8DFE0] "
                }`}
                />
              </div>
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
