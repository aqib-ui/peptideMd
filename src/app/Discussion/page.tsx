// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { BsThreeDots } from "react-icons/bs";
// import { AiOutlineLike } from "react-icons/ai";
// import { FiTag } from "react-icons/fi";
// import { IoBookmarkOutline } from "react-icons/io5";
// import { FiPlusCircle } from "react-icons/fi";

// import {
//   IoShareSocialOutline,
//   IoArrowUpOutline,
//   IoArrowDownOutline,
// } from "react-icons/io5";
// import { FaRegComment } from "react-icons/fa";
// import MoleculeTopLeftAnimation from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";
// import ScrollButton from "@/component/ScrollButton/ScrollButton";

// const DiscussionPage = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);


//   return (
//     <>

//       <div className="px-4 sm:px-6 md:px-10 h-full bg-[#94C4ED]/30 ">

//         {/* Top Button */}
//         <div className="flex justify-end mb-6 sm:mb-8 md:mb-10 ">

//           <div className="gradient-border">
//             <button
//               onClick={() => setShowPopup(true)}
//               className="w-full h-full  rounded-full bg-app text-black text-base sm:text-lg md:text-xl font-medium
//             flex items-center justify-center transition-colors duration-100
//             ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white px-4 py-2"
//               style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//             >
//               Create Topic
//             </button>

//           </div>




//         </div>



//         <div

//           className="py-8 sm:py-10 md:py-16 "
//           style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//         >
//           <div className="z-10 ">
//             <MoleculeTopLeftAnimation
//               mainheading=" Physician Discussion"
//               span="Forum"
//               para="Share your thoughts and ideas with the community."

//             />
//           </div>









//           <div className="relative ">


//             {/* Blur only this wrapper when showPopup is true */}
//             <div className={`${showPopup ? "blur-sm pointer-events-none" : ""}`}>
//               {/* Discussion Card */}
//               <div className="relative flex flex-col p-6 sm:px-10 bg-[#94C4ED]/30 md:mt-50 max-md:mt-20 rounded-4xl ">
//                 <div
//                   className={`absolute top-5 ${isExpanded
//                     ? "md:right-6 lg:right-[640px] right-10"
//                     : "sm:right-6 md:right-[40px] right-10"
//                     } text-[28px] text-[#224674] dark:text-[var(--foreground)] cursor-pointer transition-all duration-200`}
//                   onClick={() => setIsExpanded(!isExpanded)}
//                 >
//                   <BsThreeDots />
//                 </div>

//                 {/* Avatar + Text */}
//                 <div className="flex items-start mb-4 mt-6">
//                   <Image
//                     src="/discussionForum/discussImg.png"
//                     alt="Card Image"
//                     width={48}
//                     height={48}
//                     className="object-cover aspect-square rounded-full border-2 border-white mr-3"
//                   />
//                   {/* <div className="flex flex-col">
//                   <div className="flex flex-wrap flex-row">
//                   <h1 className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-tight">
//                     Peptide 101
//                     <p className="text-xl sm:text-2xl  font-medium mt-1">
//                     - 14 hr. ago
//                   </p>
//                   </h1>
//                   </div> */}
//                   <div className="flex flex-col">
//                     <div className="flex items-center">
//                       <h1 className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-tight">
//                         Peptide 101
//                       </h1>
//                       <p className="text-xl sm:text-2xl font-medium ml-4 md:mt-4">
//                         - 14 hr. ago
//                       </p>
//                     </div>
//                     <p className="text-xl sm:text-2xl  font-medium mt-1">
//                       What they are, how they work, and their benefits.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Conditionally Render Flower Image Between Text and Buttons */}
//                 <div
//                   className={`relative  ${isExpanded
//                     ? "w-full flex justify-start mt-6 mb-6 overflow-hidden "
//                     : "w-[200px] h-[200px] sm:h-[230px] sm:w-[270px] md:h-[260px] md:w-[300px] lg:w-[300px] lg:h-[250px] lg:-mt-30 lg:mr-8 max-lg:mb-10  self-center lg:self-end"
//                     }`}
//                 >
//                   <div
//                     className={`${isExpanded
//                       ? "w-full max-w-[780px] h-[580px]"
//                       : "relative w-full h-full"
//                       }`}
//                   >
//                     <Image
//                       src="/discussionForum/flower.png"
//                       alt="Flower Image"
//                       fill={isExpanded ? false : true}
//                       width={isExpanded ? 780 : undefined}
//                       height={isExpanded ? 580 : undefined}
//                       className={`object-cover ${isExpanded
//                         ? "rounded-[50px]  "
//                         : "rounded-[40px] lg:rounded-[50px] "
//                         } w-full h-full`}
//                     />
//                   </div>
//                 </div>

//                 {/* Stats Section */}
//                 <div
//                   className={` flex gap-4 w-[50%] flex-wrap ${!isExpanded ? "lg:-mt-10  px-10" : ""
//                     }`}
//                 >
//                   <div className="bg-[#224674] text-white px-4 py-2 flex items-center justify-center rounded-full text-lg gap-1">
//                     <IoArrowUpOutline className="text-white text-xl" />
//                     8.7k
//                     <IoArrowDownOutline className="text-white text-xl" />
//                   </div>
//                   <div className="bg-[#224674] text-white px-4 py-2 flex items-center justify-center rounded-full text-lg gap-1">
//                     <FaRegComment className="text-white text-lg" />
//                     7k
//                   </div>
//                   <div className="bg-[#224674] text-white px-4 py-2 flex items-center justify-center rounded-full text-lg gap-1">
//                     <IoShareSocialOutline className="text-white text-xl" />
//                     Share
//                   </div>
//                 </div>
//               </div>

//               {/* Separate Section for Add a Button */}
//               {isExpanded && (

//                 <div className="mt-4 sm:mt-8 ml-4 sm:ml-8">
//                   <div className="gradient-border">
//                     <button
//                       className="w-full h-full rounded-full bg-app text-black text-base sm:text-lg md:text-xl font-medium
//                     flex items-center justify-center transition-colors duration-100
//                     ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white px-4 py-2"
//                       style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                     >
//                       Add Comment
//                     </button>
//                   </div>
//                   <div className="flex items-start mb-4 mt-6">
//                     <Image
//                       src="/discussionForum/dropDown.png"
//                       alt="Card Image"
//                       width={48}
//                       height={48}
//                       className="object-cover aspect-square rounded-full  mr-3"
//                     />
//                     <div className="flex flex-col">
//                       <div className="flex items-center gap-2">
//                         <h1 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-tight">
//                           Fales dreams
//                         </h1>
//                         <div className="font-medium flex capitalize">
//                           <div className=" max-md:pl-1  max-md:px-1  px-2 py-2 flex items-center justify-center rounded-full text-lg ">
//                             -7hr.ago
//                           </div>
//                           <div className=" max-md:pl-1  max-md:px-1  px-2 py-2 flex items-center justify-center rounded-full text-lg ">
//                             <FiTag className=" text-xl pr-1" />
//                             tag
//                           </div>
//                           <div className=" max-md:pl-1  max-md:px-1  px-2 py-2 flex items-center justify-center rounded-full text-lg ">
//                             <IoBookmarkOutline className=" text-xl pr-1" />
//                             save
//                           </div>
//                         </div>
//                       </div>
//                       <p className="text-base sm:text-lg md:text-xl font-medium mt-2">
//                         Definition of professionalism
//                       </p>

//                       <div className="flex md:gap-1 font-medium flex-wrap">
//                         <div className=" max-md:pl-1  max-md:px-1 px-3 py-2 flex items-center justify-center rounded-full text-lg ">
//                           <IoArrowUpOutline className=" text-xl" />
//                           8.7k
//                           <IoArrowDownOutline className=" text-xl" />
//                         </div>
//                         <div className=" max-md:pl-1  max-md:px-1  px-3 py-2 flex items-center justify-center rounded-full text-lg ">
//                           <FaRegComment className=" text-xl pr-1" />
//                           7k
//                         </div>
//                         <div className=" max-md:pl-1  max-md:px-1  px-3 py-2 flex items-center justify-center rounded-full text-lg ">
//                           <AiOutlineLike className=" text-xl" />
//                           2k
//                         </div>
//                       </div>

//                       <div className=" px-4 py-2 font-medium flex items-center rounded-full text-lg gap-1">
//                         <FiPlusCircle className=" text-xl" />
//                         40 more replies
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Popup Modal – appears *above* the blurred content */}
//             {showPopup && (
//               <div className="absolute z-30 top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-app rounded-3xl p-6 shadow-lg">
//                 {/* <h2 className="text-2xl font-bold mb-4 text-center">
//                 Create New Topic
//               </h2> */}
//                 <div className="space-y-4 m-4">
//                   <h2 className="text-2xl font-medium mb-4">Title</h2>
//                   <input
//                     type="text"
//                     // placeholder="Topic Title"
//                     className="w-full border border-gray-100 bg-[#94C4ED]/30 rounded-2xl px-4 py-4"
//                   />
//                   <h2 className="text-2xl font-medium mb-4">Content</h2>
//                   <textarea
//                     rows={4}
//                     // placeholder="Description"
//                     className="w-full border border-gray-100 bg-[#94C4ED]/30 rounded-2xl px-4 py-4 resize-none"
//                   />
//                   <h2 className="text-2xl font-medium mb-4">Tag</h2>
//                   <input
//                     type="text"
//                     // placeholder="Category"
//                     className="w-full border border-gray-100 bg-[#94C4ED]/30 rounded-2xl px-4 py-4"
//                   />
//                 </div>
//                 <div className="flex justify-end gap-4 mt-6">
//                   <div className="w-fit">
//                     <div className="gradient-border w-[160px] h-[50px]">
//                       <button
//                         onClick={() => setShowPopup(false)}
//                         className="w-full h-full rounded-full bg-app text-black text-base sm:text-lg md:text-xl font-medium
//                       flex items-center justify-center transition-colors duration-100
//                       ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white px-2 py-2"
//                         style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
//                       >
//                         Create Topic
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {showPopup && <div className="h-[100px]" />}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DiscussionPage;


"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiTag } from "react-icons/fi";
import { IoBookmarkOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";

import {
  IoShareSocialOutline,
  IoArrowUpOutline,
  IoArrowDownOutline,
} from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import  MoleculeTopLeftAnimation  from "@/component/MoleculeTopLeftAnimation/MoleculeTopLeftAnimation";

const DiscussionPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  return (
    <>

      <div className="px-4 sm:px-6 md:px-10 h-full -mt-10 ">
        {/* Top Button */}
        <div className="flex justify-end mb-6">
          <div className="gradient-border">
            <button
              onClick={() => setShowPopup(true)}
              className="w-full h-full rounded-full bg-app text-black text-base sm:text-lg md:text-xl font-medium
            flex items-center justify-center transition-colors duration-100 
            ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white px-4 py-2"
              style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
            >
              Create Topic
            </button>
          </div>


        </div>




        <div
          className="py-8 sm:py-10 md:py-16"
          style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
        >
          {/* <MoleculeTopLeftAnimation
            mainheading="Physician"
            span=" Discussion Forum"
            para="Connect and collaborate with fellow medical professionals."

          /> */}
          <div className="z-10 ">
            <MoleculeTopLeftAnimation
              mainheading=" Physician Discussion"
              span="Forum"
              para="Share your thoughts and ideas with the community."

            />
          </div>




          <div className="relative mb-50">

            {/* Blur only this wrapper when showPopup is true */}
            <div className={`${showPopup ? "blur-sm pointer-events-none" : ""}`}>
              {/* Discussion Card */}
              <div className="relative flex flex-col p-6 sm:px-10 bg-[#94C4ED]/30 md:mt-50 max-md:mt-20 rounded-4xl ">
                <div
                  className={`absolute top-5 ${isExpanded
                    ? "md:right-6 lg:right-[640px] right-10"
                    : "sm:right-6 md:right-[40px] right-10"
                    } text-[28px] text-[#224674] dark:text-[var(--foreground)] cursor-pointer transition-all duration-200`}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <BsThreeDots />
                </div>

                {/* Avatar + Text */}
                <div className="flex items-start mb-4 mt-6">
                  <Image
                    src="/discussionForum/discussImg.png"
                    alt="Card Image"
                    width={48}
                    height={48}
                    className="object-cover aspect-square rounded-full border-2 border-white mr-3"
                  />
                  {/* <div className="flex flex-col">
                  <div className="flex flex-wrap flex-row">
                  <h1 className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-tight">
                    Peptide 101
                    <p className="text-xl sm:text-2xl  font-medium mt-1">
                    - 14 hr. ago
                  </p>
                  </h1>
                  </div> */}
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <h1 className="text-[34px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-bold leading-tight">
                        Peptide 101
                      </h1>
                      <p className="text-xl sm:text-2xl font-medium ml-4 md:mt-4">
                        - 14 hr. ago
                      </p>
                    </div>
                    <p className="text-xl sm:text-2xl  font-medium mt-1">
                      What they are, how they work, and their benefits.
                    </p>
                  </div>
                </div>

                {/* Conditionally Render Flower Image Between Text and Buttons */}
                <div
                  className={`relative  ${isExpanded
                    ? "w-full flex justify-start mt-6 mb-6 overflow-hidden "
                    : "w-[200px] h-[200px] sm:h-[230px] sm:w-[270px] md:h-[260px] md:w-[300px] lg:w-[300px] lg:h-[250px] lg:-mt-30 lg:mr-8 max-lg:mb-10  self-center lg:self-end"
                    }`}
                >
                  <div
                    className={`${isExpanded
                      ? "w-full max-w-[780px] md:h-[580px]"
                      : "relative w-full h-full"
                      }`}
                  >
                    <Image
                      src="/discussionForum/flower.png"
                      alt="Flower Image"
                      fill={isExpanded ? false : true}
                      width={isExpanded ? 780 : undefined}
                      height={isExpanded ? 580 : undefined}
                      className={`object-cover ${isExpanded
                        ? "rounded-[50px]  "
                        : "rounded-[40px] lg:rounded-[50px] "
                        } w-full h-[55vh] md:h-full`}
                    />
                  </div>
                </div>

                {/* Stats Section */}
                <div
                  className={` flex gap-1 md:gap-4 ${!isExpanded ? "lg:-mt-10 px-0 lg:px-10 max-sm:-ml-3" : "max-sm:-ml-3"
                    }`}
                >
                  <div className="bg-[#224674] text-white px-4 py-2 flex items-center justify-center rounded-full txt-20 gap-1">
                    <IoArrowUpOutline className="text-white txt-20" />
                    8.7k
                    <IoArrowDownOutline className="text-white txt-20" />
                  </div>
                  <div className="bg-[#224674] text-white px-4 py-2 flex items-center justify-center rounded-full txt-20 gap-1">
                    <FaRegComment className="text-white txt-20" />
                    7k
                  </div>
                  <div className="bg-[#224674] text-white px-4 py-2 flex items-center justify-center rounded-full txt-20 gap-1">
                    <IoShareSocialOutline className="text-white txt-20" />
                    Share
                  </div>
                </div>
              </div>

              {/* Separate Section for Add a Button */}
              {isExpanded && (

                <div className="mt-4 sm:mt-8 ml-4 sm:ml-8">
                  <div className="gradient-border">
                    <button
                      className="w-full h-full rounded-full bg-app text-black text-base sm:text-lg md:text-xl font-medium
                    flex items-center justify-center transition-colors duration-100 
                    ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white px-4 py-2"
                      style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                    >
                      Add Comment
                    </button>
                  </div>
                  <div className="flex items-start mb-4 mt-6 max-sm:-ml-4">
                    <Image
                      src="/discussionForum/dropDown.png"
                      alt="Card Image"
                      width={48}
                      height={48}
                      className="object-cover aspect-square rounded-full  mr-3"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <h1 className="txt-34 font-bold leading-tight">
                          Fales dreams
                        </h1>
                        <div className="font-medium flex capitalize">
                          <div className=" max-md:pl-1  max-md:px-1  px-2 py-2 flex items-center justify-center rounded-full txt-20 ">
                            -7hr.ago
                          </div>
                          <div className=" max-md:pl-1  max-md:px-1  px-2 py-2 flex items-center justify-center rounded-full txt-20 ">
                            <FiTag className=" text-xl pr-1" />
                            tag
                          </div>
                          <div className=" max-md:pl-1  max-md:px-1  px-2 py-2 flex items-center justify-center rounded-full txt-20 ">
                            <IoBookmarkOutline className=" text-xl pr-1" />
                            save
                          </div>
                        </div>
                      </div>
                      <p className="txt-20 font-medium mt-2">
                        Definition of professionalism
                      </p>

                      <div className="flex md:gap-1 font-medium flex-wrap">
                        <div className=" max-md:pl-1  max-md:px-1 px-3 py-2 flex items-center justify-center rounded-full txt-20 ">
                          <IoArrowUpOutline className=" text-xl" />
                          8.7k
                          <IoArrowDownOutline className=" text-xl" />
                        </div>
                        <div className=" max-md:pl-1  max-md:px-1  px-3 py-2 flex items-center justify-center rounded-full txt-20 ">
                          <FaRegComment className=" text-xl pr-1" />
                          7k
                        </div>
                        <div className=" max-md:pl-1  max-md:px-1  px-3 py-2 flex items-center justify-center rounded-full txt-20 ">
                          <AiOutlineLike className=" text-xl" />
                          2k
                        </div>
                      </div>

                      <div className=" px-4 py-2 font-medium flex items-center rounded-full txt-20 gap-1">
                        <FiPlusCircle className=" text-xl" />
                        40 more replies
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Popup Modal – appears *above* the blurred content */}
            {showPopup && (
              <div className="absolute z-30 top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-xl bg-app rounded-3xl p-6 shadow-lg">
                {/* <h2 className="text-2xl font-bold mb-4 text-center">
                Create New Topic
              </h2> */}
                <div className="space-y-4 m-4">
                  <h2 className="text-2xl font-medium mb-4">Title</h2>
                  <input
                    type="text"
                    // placeholder="Topic Title"
                    className="w-full border border-gray-100 bg-[#94C4ED]/30 rounded-2xl px-4 py-4"
                  />
                  <h2 className="text-2xl font-medium mb-4">Content</h2>
                  <textarea
                    rows={4}
                    // placeholder="Description"
                    className="w-full border border-gray-100 bg-[#94C4ED]/30 rounded-2xl px-4 py-4 resize-none"
                  />
                  <h2 className="text-2xl font-medium mb-4">Tag</h2>
                  <input
                    type="text"
                    // placeholder="Category"
                    className="w-full border border-gray-100 bg-[#94C4ED]/30 rounded-2xl px-4 py-4"
                  />
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <div className="w-fit">
                    <div className="gradient-border w-[160px] h-[50px]">
                      <button
                        onClick={() => setShowPopup(false)}
                        className="w-full h-full rounded-full bg-app text-black text-base sm:text-lg md:text-xl font-medium
                      flex items-center justify-center transition-colors duration-100 
                      ease-in-out hover:bg-gradient-to-tr hover:from-[#5CB0E2] hover:to-[#EB6793] hover:text-white px-2 py-2"
                        style={{ fontFamily: " 'Afacad Flux', sans-serif" }}
                      >
                        Create Topic
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {showPopup && <div className="h-[100px]" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscussionPage;
