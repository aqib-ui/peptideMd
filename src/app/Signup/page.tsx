// "use client";
// // export const dynamic = "force-dynamic";
// // export const dynamicParams = true; // optional but recommended


// import Image from "next/image";
// import { useState } from "react";
// import authLogo from "../../../public/authIcons/authLogo.png";
// import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
// import { IoIosArrowRoundBack } from "react-icons/io";
// import Link from "next/link"; 
// import { useRouter } from "next/router";
// // import { useRouter, useSearchParams } from "next/navigation";

// export default function SignupPage() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState<{
//     fullName?: string;
//     email?: string;
//     password?: string;
//     confirmPassword?: string;
//   }>({});

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setshowConfirmPassword] = useState(false);

//   const router = useRouter();
//   // const searchParams = useSearchParams();

//   // const from = searchParams.get("from"); // 'login' or 'home'

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validate = () => {
//     const newErrors: typeof errors = {};

//     if (!fullName.trim()) {
//       newErrors.fullName = "Full name is required.";
//     } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
//       newErrors.fullName = "Full name must contain only letters and spaces.";
//     }

//     if (!email) newErrors.email = "Email is required.";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
//       newErrors.email = "Enter a valid email.";

//     if (!password) newErrors.password = "Password is required.";
//     else if (password.length < 6)
//       newErrors.password = "Password must be at least 6 characters.";

//     if (!confirmPassword) {
//       newErrors.confirmPassword = "Confirm Password is required.";
//     } else if (confirmPassword !== password) {
//       newErrors.confirmPassword = "Passwords do not match.";
//     }

//     setErrors(newErrors);
//     return newErrors;
//   };

//   const isFormValid = () => {
//     const currentErrors = validate();
//     return Object.keys(currentErrors).length === 0;
//   };

//   // const handleBack = () => {
//   //   if (from === "login") {
//   //     router.push("/Login");
//   //   } else if (from === "home") {
//   //     router.push("/");
//   //   } else {
//   //     router.back(); // fallback: browser history
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate(); // Run validation
//     if (Object.keys(validationErrors).length > 0) return;

//     setIsSubmitting(true);
//     await new Promise((r) => setTimeout(r, 1500));

//     // ✅ Redirect after loading finishes
//     router.push("/SixDigitVerify?from=signup");
//   };

//   return (
//     <div className="min-h-screen grid grid-rows-[1fr_auto]">
//       {/* === Content Area === */}
//       <div
//         className=" flex flex-col  md:flex-row md:justify-between max-sm:p-4 px-4 py-8 [@media(min-width:1600px)]:p- 
//       xl:pl-20 gap-4 md:gap-8 xl:gap-12 2xl:gap-34"
//       >
//         {/* Left Section */}
        
//         <div
//           className="w-full md:w-[48%] md:h-[calc(100vh-64px)] lg:h-[calc(100vh-66px)] [@media(min-width:1600px)]:h-[calc(100vh-104px)]
//            [@media(min-width:1600px)]::mt-[2rem] max-h-[975px] max-w-[922px] p-[2px] rounded-[48px] flex items-center justify-center"
          
//         >
//           <div className="relative w-full h-full rounded-[16px] overflow-hidden">
//             {/* Background video */}
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="absolute inset-0 w-full h-full object-cover"
//             >
//               <source src="/authIcons/authVid.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>

//             {/* Dark translucent overlay */}
//             <div className="absolute inset-0 bg-[#000D1F]/32"></div>

//             {/* Foreground content */}
//             <div className="relative z-10 flex items-center justify-center w-full h-full p-8">
//               <Image
//                 src={authLogo}
//                 alt="PeptideMD Logo"
//                 width={492}
//                 height={211}
//                 className="w-auto xl:!w-[492px] h-auto xl:!h-[211px] object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="md:w-[52%] flex justify-start items-center  max-sm:mt-6 max-sm:mb-20">
//           <div className="w-full max-w-2xl max-sm:p-2 lg:px-4  bg-white rounded-3xl">
//              {/* Back Button */}
//             <Link href="/">
//               <div className="mb-6">
//                 <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition">
//                   <IoIosArrowRoundBack className="text-gray-700 txt-24" />
//                 </button>
//               </div>
//             </Link>

//             <h2 className="txt-32 font-semibold mb-2  text-[#25292A]">
//               Create your PeptideMD Account
//             </h2>
//             <p className="txt-20 text-[#51595A]  max-md:mb-6 2xl:mb-3 [@media(min-width:1600px)]:mb-4">
//               Access expert resources, AI insights, and personalized tracking.
//             </p>

//             <form
//               noValidate
//               className="space-y-1 [@media(min-width:1600px)]:space-y-4"
//               onSubmit={handleSubmit}
//             >
//               {/* Full name Field */}
//               <div>
//                 <label className="block txt-16 font-normal mb-1">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   className={`w-full  2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none ${
//                     errors.email
//                       ? "border border-red-500"
//                       : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
//                   }`}
//                   placeholder="Enter your full name"
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
//                 )}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label className="block txt-16 font-normal mb-1">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className={`w-full  2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none ${
//                     errors.email
//                       ? "border border-red-500"
//                       : "border border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
//                   }`}
//                   placeholder="Enter your email address"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//                 )}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="block txt-16 font-normal mb-1">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative w-full h-full 2xl:w-[496px] ">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none border ${
//                       errors.password
//                         ? "border-red-500"
//                         : "border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
//                     }`}
//                     placeholder="Enter your password"
//                   />

//                   <div className="absolute inset-y-0 right-3 flex items-center">
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="text-[#51595A]  hover:text-gray-700 focus:outline-none"
//                     >
//                       {showPassword ? (
//                         <RiEyeLine className="txt-24 text-[#224674]" />
//                       ) : (
//                         <RiEyeOffLine className="txt-24 text-[#224674]" />
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">{errors.password}</p>
//                 )}
//               </div>

//               {/* Confirm Password Field */}
//               <div>
//                 <label className="block txt-16 font-normal mb-1">
//                   Confirm Password <span className="text-red-500">*</span>
//                 </label>

//                 <div className="relative w-full h-full 2xl:w-[496px]">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     className={`w-full 2xl:w-[496px] 2xl:h-[56px] rounded-lg bg-[#F2F5F6] p-3 pr-12 txt-14 outline-none border ${
//                       errors.confirmPassword
//                         ? "border-red-500"
//                         : "border-transparent focus:border-[#224674] focus:bg-[#C8E4FC80]"
//                     }`}
//                     placeholder="Re-enter your password"
//                   />

//                   <div className="absolute inset-y-0 right-3 flex items-center">
//                     <button
//                       type="button"
//                       onClick={() =>
//                         setshowConfirmPassword(!showConfirmPassword)
//                       }
//                       className="text-[#51595A]  hover:text-gray-700 focus:outline-none"
//                     >
//                       {showConfirmPassword ? (
//                         <RiEyeLine className="txt-24 text-[#224674]" />
//                       ) : (
//                         <RiEyeOffLine className="txt-24 text-[#224674]" />
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {errors.confirmPassword && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.confirmPassword}
//                   </p>
//                 )}
//               </div>

//               {/* terms and contion */}
//               <p className="txt-16 text-[#51595A] max-sm:my-6 mb-2 [@media(min-width:1600px)]:mb-6 w-full 2xl:w-[496px] mt-1 text-center">
//                 By continuing, you agree with Nuda Peptide Therapeutics{" "}
//                 <span className="text-[#224674]">Terms of Service</span> and{" "}
//                 <span className="text-[#224674]">Privacy Policy.</span>
//               </p>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className={`w-full txt-18 2xl:w-[496px] 2xl:h-[56px] py-3 rounded-full font-semibold transition ${
//                   !isFormValid
//                     ? "bg-[#D8DFE0] cursor-not-allowed text-[#9EA9AA]"
//                     : "bg-[#224674] text-white"
//                 }`}
//                 disabled={!isFormValid}
//               >
//                 {isSubmitting ? (
//                   <img
//                     src="/loader.gif"
//                     alt="Loading..."
//                     className="w-6 h-6 mx-auto bg-[#224674]"
//                   />
//                 ) : (
//                   "Agree and Sign up"
//                 )}
//               </button>

//               {/* login Link */}
//               <div className="w-full 2xl:w-[496px] mt-1 flex justify-center ">
//                 <Link
//                   href="/Login"
//                   className="txt-18 text-[#224674] font-semibold underline text-center"
//                 >
//                   I have an account
//                 </Link>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }


import { Suspense } from "react";
import SignupClientPage from "./SignupClientPage";

// export const dynamic = "force-dynamic";

export default function SignupPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupClientPage />
    </Suspense>
  );
}