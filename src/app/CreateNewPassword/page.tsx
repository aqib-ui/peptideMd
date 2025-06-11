'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import logo from '../../../public/headerIcon/logo.png';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
import { IoIosArrowRoundBack } from "react-icons/io";


export default function CreateNewPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string }>({});

  const validateForm = () => {
    const newErrors: { password?: string; confirmPassword?: string } = {};

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Your password has been reset successfully.', {
        style: {
          color: '#25292A',
        },
        iconTheme: {
          primary: '#224674',
          secondary: '#fff',
        },
      });

      setIsSubmitting(false);

      setTimeout(() => {
        router.push('/Login');
      }, 3000);
    }, 1000);
  };

  const isFormValid = password && confirmPassword && password === confirmPassword;

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto]">
      <div className="flex flex-col md:flex-row md:justify-between max-sm:p-4 px-4 pt-3 pb-3 xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34">

        {/* Left Section - Logo */}
        <div
          className="w-full md:w-[48%] md:h-[calc(100vh-64px)] lg:h-[calc(100vh-66px)] [@media(min-width:1600px)]:h-[calc(100vh-104px)] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(212.17deg, #EB6793 0%, #5CB0E2 96.39%)',
          }}
        >
          <div className="bg-white rounded-[48px] p-8 flex items-center justify-center w-full h-full">
            <Image
              src={logo}
              alt="PeptideMD Logo"
              width={492}
              height={211}
              className="w-auto xl:!w-[492px] h-auto xl:!h-[211px] object-contain"
            />
          </div>
        </div>

        {/* Right Section - Password Reset */}
        <div className="md:w-[52%] flex justify-start items-center max-sm:mt-6 max-sm:mb-20">
           <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
            {/* Back Button */}
            <Link href="/SixDigitVerify">
              <div className="mb-6">
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition">
                  <IoIosArrowRoundBack className="text-gray-700 txt-24" />
                </button>
              </div>
            </Link>
            {/* Icon */}
            <div className="p-2 bg-[#DD6F941F] border-[#DD6F94] border-1 rounded-xl flex items-center justify-center w-fit mb-6">
              <img
                src="/authIcons/lock.png"
                alt="SMS Icon"
                className="w-10 h-10 object-contain"
              />
            </div>

            <form
              noValidate
              className="space-y-4"
              onSubmit={handlePasswordReset}
            >
              <h2 className="txt-32 font-semibold mb-2 text-[#25292A]">Create New Password</h2>

              {/* Password Field */}
              <div>
                <label className="block txt-16 font-normal mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-md bg-[#F2F5F6] p-3 txt-14 outline-none ${
                    errors.password
                      ? 'border border-red-500'
                      : 'border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]'
                  }`}
                  placeholder="Enter your new password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block txt-16 font-normal mb-1">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-md bg-[#F2F5F6] p-3 txt-14 outline-none ${
                    errors.confirmPassword
                      ? 'border border-red-500'
                      : 'border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]'
                  }`}
                  placeholder="Re-enter your new password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full txt-18 2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
                  !isFormValid
                    ? 'bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]'
                    : 'bg-[#224674] text-white'
                }`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? (
                  <img
                    src="/loader.gif"
                    alt="Loading..."
                    className="w-6 h-6 mx-auto bg-[#224674]"
                  />
                ) : (
                  'Reset Password'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F2F5F6] py-2">
        <div className="max-w-full mx-auto px-10 flex justify-between items-center max-md:flex-col max-md:gap-1 max-md:text-center txt-16 text-[#25292A]">
          <p className="text-[#25292A]">
            Privacy Policy <span className="px-4 max-lg:px-1">|</span> Terms & Conditions
          </p>
          <span className="text-[#25292A]">
            © 2025, Nuda Peptide Therapeutics, All Rights Reserved
          </span>
          <p className="text-[#224674] gap-4 flex items-center txt-20">
            <FaFacebookF />
            <FaLinkedinIn />
            <AiFillInstagram />
            <FaXTwitter />
          </p>
        </div>
      </footer>
    </div>
  );
}
