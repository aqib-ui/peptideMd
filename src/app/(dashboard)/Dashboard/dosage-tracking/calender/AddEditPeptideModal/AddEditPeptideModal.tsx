// // // api integration
// // // AddEditPeptideModal.tsx
// // import React, { useState, useEffect, useRef } from "react";
// // import dayjs, { Dayjs } from "dayjs";
// // import { DatePicker } from "antd";
// // import Image from "next/image";
// // import { RxCross2 } from "react-icons/rx";
// // import dosageService from "@/services/remote/modules/dosage";
// // import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// // import { IoMdArrowDropdown } from "react-icons/io";
// // import PeptideDropdown from "../PeptideDropDown/PeptideDropDown";
// // import type { PeptideOption } from "../PeptideDropDown/PeptideDropDown";
// // import type { CalendarEvent } from "@/app/(dashboard)/Dashboard/dosage-tracking/calender/page";

// // import "./AddEditPeptideModal.css";

// // interface AddEditPeptideModalProps {
// //   isModalOpen: boolean;
// //   setIsModalOpen: (isOpen: boolean) => void;
// //   editingEvent: CalendarEvent | null;
// //   selectedDate: string | null;
// //   setSelectedDate: (date: string | null) => void;
// //   selectedPeptide: PeptideOption | null;
// //   setSelectedPeptide: (peptide: PeptideOption | null) => void;
// //   dosage: string;
// //   setDosage: (dosage: string) => void;
// //   goal: string;
// //   setGoal: (goal: string) => void;
// //   // onSuccess: () => void;
// //   onSuccess: (data: {
// //     type: "create" | "update";
// //     event: CalendarEvent;
// //   }) => void;
// // }

// // const AddEditPeptideModal: React.FC<AddEditPeptideModalProps> = ({
// //   isModalOpen,
// //   setIsModalOpen,
// //   editingEvent,
// //   selectedDate,
// //   setSelectedDate,
// //   selectedPeptide,
// //   setSelectedPeptide,
// //   dosage,
// //   setDosage,
// //   goal,
// //   setGoal,
// //   onSuccess,
// // }) => {
// //   const [pickerValue, setPickerValue] = useState<Dayjs>(dayjs());
// //   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isClient, setIsClient] = useState(false); // Track client-side rendering

// //   // Use directly
// //   // await dosageService.createPeptideDosage(data);
// //   const [authError, setAuthError] = useState<string | null>(null);

// //   const calendarRef = useRef<HTMLDivElement>(null);

// //   // inside AddEditPeptideModal, just below your hooks
// // useEffect(() => {
// //   // when modal opens, prevent background scroll…
// //   if (isModalOpen) {
// //     // save existing setting so if something else was controlling it we don’t break it
// //     const original = document.body.style.overflow
// //     document.body.style.overflow = "hidden"

// //     // cleanup when the modal closes or unmounts
// //     return () => {
// //       document.body.style.overflow = original
// //     }
// //   }
// // }, [isModalOpen])

// //   // Initialize client-side state
// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   const getUserData = () => {
// //     if (typeof window === "undefined") return null;

// //     const token = localStorage.getItem("peptide_user_token");
// //     const rawUser = localStorage.getItem("peptide_user");

// //     if (!token || !rawUser) {
// //       setAuthError("Authentication required. Please log in.");
// //       return null;
// //     }

// //     try {
// //       const user = JSON.parse(rawUser);
// //       return {
// //         token, // your JWT
// //         id: user.id, // or whatever the user object shape is
// //         ...user, // any other user fields you need
// //       };
// //     } catch {
// //       setAuthError("Session error. Please log in again.");
// //       return null;
// //     }
// //   };

// //   // Sync header/month view with selectedDate
// //   useEffect(() => {
// //     if (selectedDate) {
// //       setPickerValue(dayjs(selectedDate));
// //     } else {
// //       setPickerValue(dayjs());
// //     }
// //   }, [selectedDate]);

// //   const handleSubmit = async () => {
// //     if (!isFormValid) return;
// //     setIsSubmitting(true);
// //     setAuthError(null);

// //     // ensure we have a token in localStorage (your axiosClient will read it)
// //     const userData = getUserData();
// //     if (!userData?.token) {
// //       setAuthError("Authentication required. Please log in.");
// //       setIsSubmitting(false);
// //       return;
// //     }

// //     // strip any mg/mcg, then always append mg
// //     const numericDosage = dosage.trim().replace(/mg$|mcg$/i, "");
// //     const dosagePayload = `${numericDosage}mg`;

// //     // **NO** user_id here!
// //     const payload = {
// //       date: selectedDate!,
// //       peptide_id: selectedPeptide!.id,
// //       dosage: dosagePayload,
// //       goals: goal,
// //     };

// //     console.log("📤 Payload:", payload);

// //     try {
// //       // call the right endpoint
// //       const wrapper = editingEvent
// //         ? await dosageService.updatePeptideDosage(
// //             Number(editingEvent.id),
// //             payload
// //           )
// //         : await dosageService.createPeptideDosage(payload);

// //       const saved = wrapper.data;

// //       // rebuild the calendar event
// //       const eventData: CalendarEvent = {
// //         id: saved.id.toString(),
// //         date: saved.date,
// //         dateValue: dayjs(saved.date).format("YYYY-MM-DD"),
// //         peptide: selectedPeptide!,
// //         dosage: numericDosage,
// //         goal,
// //         isFDAApproved: selectedPeptide!.tag === "FDA",
// //       };

// //       onSuccess({
// //         type: editingEvent ? "update" : "create",
// //         event: eventData,
// //       });

// //       handleClose();
// //     } catch (err: any) {
// //       console.error("❌ Submit error:", err);
// //       if (err.response?.data) {
// //         console.error("Server replied:", err.response.data);
// //       }
// //       setAuthError("Something went wrong. Please try again.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   // Close modal and reset state
// //   const handleClose = () => {
// //     setIsModalOpen(false);
// //     resetFormState();
// //   };

// //   // Reset form fields
// //   const resetFormState = () => {
// //     setSelectedDate(null);
// //     setSelectedPeptide(null);
// //     setDosage("");
// //     setGoal("");
// //   };

// //   // Disable future dates
// //   const disabledDate = (current: Dayjs) => {
// //     return current.isAfter(dayjs().endOf("day"));
// //   };

// //   // Fixed next month disable logic
// //   const isNextMonthDisabled = pickerValue
// //     .add(1, "month")
// //     .startOf("month")
// //     .isAfter(dayjs().endOf("day"));

// //   // Compute years dynamically
// //   const years = Array.from({ length: 5 }, (_, i) => pickerValue.year() - 4 + i);

// //   // Update handler to maintain month when changing year
// //   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const newYear = parseInt(e.target.value);
// //     setPickerValue(pickerValue.year(newYear));
// //   };

// //   const handlePrevMonthPicker = () => {
// //     setPickerValue(pickerValue.subtract(1, "month"));
// //   };

// //   const handleNextMonthPicker = () => {
// //     if (!isNextMonthDisabled) {
// //       setPickerValue(pickerValue.add(1, "month"));
// //     }
// //   };

// //   // Calculate weeks in current month
// //   const getWeeksInMonth = () => {
// //     const firstDay = pickerValue.startOf("month");
// //     const lastDay = pickerValue.endOf("month");

// //     // Get starting weekday (0=Sunday, 6=Saturday)
// //     const firstDayOfWeek = firstDay.day();

// //     // Get total days in month
// //     const daysInMonth = lastDay.date();

// //     // Calculate visible days from previous month
// //     const daysFromPrevMonth = firstDayOfWeek;

// //     // Total cells needed in calendar
// //     const totalCells = daysInMonth + daysFromPrevMonth;

// //     // Return number of weeks (rows)
// //     return Math.ceil(totalCells / 7);
// //   };

// //   // Update calendar height based on weeks
// //   const updateCalendarHeight = () => {
// //     if (!calendarRef.current) return;

// //     const weeks = getWeeksInMonth();
// //     const baseHeight = 344; // Base height for 5 weeks
// //     const rowHeight = 50; // Approx height per week row

// //     // Calculate new height
// //     const newHeight =
// //       weeks > 5 ? baseHeight + (weeks - 5) * rowHeight : baseHeight;

// //     // Apply to calendar popup
// //     calendarRef.current.style.height = `${newHeight}px`;
// //     calendarRef.current.style.minHeight = `${newHeight}px`;
// //   };

// //   // Update height when month changes or calendar opens
// //   useEffect(() => {
// //     if (isCalendarOpen) {
// //       // Small delay to allow DOM update
// //       setTimeout(updateCalendarHeight, 10);
// //     }
// //   }, [pickerValue, isCalendarOpen]);

// //   const isFormValid =
// //     selectedDate &&
// //     selectedPeptide &&
// //     dosage.trim() !== "" &&
// //     goal.trim() !== "";

// //   if (!isModalOpen) return null;

// // //   return (
// // //     <div
// // //       className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center"
// // //       onClick={handleClose}
// // //     >
// // //       <div
// // //         className="bg-red-400 rounded-[16px] p-6 w-[496px] max-sm:w-[300px] h-[90vh] max-2xl:max-h-[550px] relative flex- flex-col"
// // //         onClick={(e) => e.stopPropagation()}
// // //       >
// // //         {/* Header Section */}
// // //         <div className="flex items-center justify-between mb-6">
// // //           <h2 className="txt-32 font-semibold text-[#25292A] mb-4">
// // //             {editingEvent ? "Edit Peptide" : "Add Peptide"}
// // //           </h2>
// // //           <div
// // //             className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// // //             onClick={handleClose}
// // //           >
// // //             <RxCross2 className="text-[#9EA9AA] font-extrabold" />
// // //           </div>
// // //         </div>

// // // {/* Scrollable Content Area - Fixed height with overflow */}
// // //         <div className="flex flex-col gap-4 mb-6 overflow-y-auto flex-grow">
// // //           <div className="flex flex-col gap-6">
// // //             {/* Date Picker */}
// // //             <div className="relative">
// // //               <p>Date<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// // //               <DatePicker
// // //                 allowClear
// // //                 open={isCalendarOpen}
// // //                 onOpenChange={(open) => {
// // //                   setIsCalendarOpen(open);
// // //                   if (open) setTimeout(updateCalendarHeight, 50);
// // //                 }}
// // //                 placement="topRight"
// // //                 picker="date"
// // //                 key={pickerValue.format("YYYY-MM")}
// // //                 value={selectedDate ? dayjs(selectedDate) : null}
// // //                 format={(val) =>
// // //                   val && selectedDate ? val.format("YYYY-MM-DD") : ""
// // //                 }
// // //                 onChange={(date) => {
// // //                   if (date) {
// // //                     setSelectedDate(date.format("YYYY-MM-DD"));
// // //                     setPickerValue(date);
// // //                     setIsCalendarOpen(false);
// // //                   } else {
// // //                     setSelectedDate(null);
// // //                     setPickerValue(dayjs());
// // //                   }
// // //                 }}
// // //                 defaultPickerValue={pickerValue}
// // //                 inputReadOnly
// // //                 className="w-full h-auto 2xl:w-[448px] xl:h-[48px] !bg-[#F2F5F6] rounded-md px-3 py-2"
// // //                 rootClassName="custom-datepicker-input"
// // //                 suffixIcon={
// // //                   <Image
// // //                     src="/Dashboard/dosage-tracking/calendarIcon.svg"
// // //                     alt="calendar"
// // //                     width={24}
// // //                     height={24}
// // //                     className="cursor-pointer"
// // //                   />
// // //                 }
// // //                 popupClassName="custom-datepicker-dropdown no-header-datepicker"
// // //                 disabledDate={disabledDate}
// // //                 panelRender={(panelNode) => (
// // //                   <div
// // //                     className="custom-panel-container"
// // //                     ref={calendarRef}
// // //                     onMouseDown={(e) => e.preventDefault()}
// // //                   >
// // //                     <div
// // //                       className="flex justify-between items-center px-6 py-3 text-[#626D6F] font-medium"
// // //                       onMouseDown={(e) => e.preventDefault()}
// // //                     >
// // //                       <div className="flex items-center gap-1 relative">
// // //                         <span className="txt-16">
// // //                           {pickerValue.format("MMMM")}
// // //                         </span>
// // //                         <div className="relative flex items-center">
// // //                           <select
// // //                             onMouseDown={(e) => e.preventDefault()}
// // //                             value={pickerValue.year()}
// // //                             onChange={handleYearChange}
// // //                             className="bg-transparent border-none txt-16 focus:outline-none focus:ring-0 appearance-none pr-6"
// // //                           >
// // //                             {years.map((year) => (
// // //                               <option key={year} value={year}>
// // //                                 {year}
// // //                               </option>
// // //                             ))}
// // //                           </select>
// // //                           <IoMdArrowDropdown
// // //                             className="absolute right-0 pointer-events-none text-[#626D6F]"
// // //                             size={16}
// // //                           />
// // //                         </div>
// // //                       </div>
// // //                       <div className="flex gap-2">
// // //                         <button
// // //                           onMouseDown={(e) => e.preventDefault()}
// // //                           onClick={(e) => {
// // //                             e.preventDefault();
// // //                             handlePrevMonthPicker();
// // //                           }}
// // //                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
// // //                         >
// // //                           <MdKeyboardArrowLeft size={24} />
// // //                         </button>
// // //                         <button
// // //                           onMouseDown={(e) => e.preventDefault()}
// // //                           onClick={(e) => {
// // //                             e.preventDefault();
// // //                             handleNextMonthPicker();
// // //                           }}
// // //                           disabled={isNextMonthDisabled}
// // //                           className={`w-8 h-8 flex items-center justify-center rounded-full ${
// // //                             isNextMonthDisabled
// // //                               ? "opacity-50 cursor-not-allowed"
// // //                               : "hover:bg-gray-100"
// // //                           }`}
// // //                         >
// // //                           <MdKeyboardArrowRight
// // //                             size={24}
// // //                             className={
// // //                               isNextMonthDisabled ? "text-gray-400" : ""
// // //                             }
// // //                           />
// // //                         </button>
// // //                       </div>
// // //                     </div>
// // //                     {panelNode}
// // //                   </div>
// // //                 )}
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Peptide Dropdown */}
// // //           <div className="relative">
// // //             <p>Peptide<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// // //             <PeptideDropdown
// // //               selected={selectedPeptide}
// // //               setSelected={setSelectedPeptide}
// // //             />
// // //           </div>

// // //           {/* Dosage Input */}
// // //           <div className="relative">
// // //             <p>Dosage<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// // //             <div className="relative">
// // //               <input
// // //                 type="text"
// // //                 inputMode="numeric"
// // //                 pattern="[0-9]*"
// // //                 placeholder="Enter dosage you have taken"
// // //                 className="w-full h-auto 2xl:w-[448px] xl:h-[48px] bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent font-medium placeholder:font-normal placeholder:text-[#8D9A9B] rounded-md px-4 py-2 pr-12"
// // //                 value={dosage}
// // //                 onChange={(e) => {
// // //                   const value = e.target.value;
// // //                   if (value === "" || /^\d+$/.test(value)) {
// // //                     setDosage(value);
// // //                   }
// // //                 }}
// // //               />
// // //               <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8D9A9B]">
// // //                 mcg
// // //               </span>
// // //             </div>
// // //           </div>

// // //           {/* Goal Textarea */}
// // //           <div className="relative">
// // //             <p>Goal<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// // //             <textarea
// // //               placeholder="Write your primary goal"
// // //               className="w-full 2xl:w-[448px] h-[100px] font-medium placeholder:font-normal bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-[#8D9A9B] rounded-md px-4 py-2 resize-none"
// // //               value={goal}
// // //               onChange={(e) => setGoal(e.target.value)}
// // //             ></textarea>
// // //           </div>

// // //           {/* Add error display near the submit button */}
// // //           {authError && (
// // //             <div className="text-red-500 text-sm mb-4 text-center">
// // //               {authError}
// // //             </div>
// // //           )}

// // //           <button
// // //             className={`txt-18 font-semibold leading-none text-center px-4 py-4 rounded-full w-full ${
// // //               isFormValid && !isSubmitting
// // //                 ? "bg-[#224674] !text-white cursor-pointer"
// // //                 : "bg-[#D8DFE0] !text-[#8D9A9B] cursor-not-allowed"
// // //             }`}
// // //             disabled={!isFormValid || isSubmitting}
// // //             onClick={handleSubmit}
// // //           >
// // //             {isSubmitting ? "Processing..." : editingEvent ? "Save" : "Add"}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // return (
// //   <div
// //     className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center"
// //     onClick={handleClose}
// //   >
// //     <div
// //       className="bg-red-400 rounded-[16px] p-6 w-[496px] max-sm:w-[300px] max-2xl:h-[90vh] 2xl:h-auto relative flex flex-col"
// //       onClick={(e) => e.stopPropagation()}
// //     >
// //       {/* Header - Fixed at top */}
// //       <div className="flex items-center justify-between mb-6 flex-shrink-0">
// //         <h2 className="txt-32 font-semibold text-[#25292A]">
// //           {editingEvent ? "Edit Peptide" : "Add Peptide"}
// //         </h2>
// //         <div
// //           className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// //           onClick={handleClose}
// //         >
// //           <RxCross2 className="text-[#9EA9AA] font-extrabold" />
// //         </div>
// //       </div>

// //       {/* Scrollable Content Area */}
// //       <div className="flex flex-col gap-4 overflow-y-auto xl:flex-grow bg-green-400">
// //         <div className="flex flex-col gap-6">
// //           {/* Date Picker */}
// //           <div className="relative">
// //             <p>Date<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //             <DatePicker
// //               allowClear
// //               open={isCalendarOpen}
// //               onOpenChange={(open) => {
// //                 setIsCalendarOpen(open);
// //                 if (open) setTimeout(updateCalendarHeight, 50);
// //               }}
// //               placement="topRight"
// //               picker="date"
// //               key={pickerValue.format("YYYY-MM")}
// //               value={selectedDate ? dayjs(selectedDate) : null}
// //               format={(val) =>
// //                 val && selectedDate ? val.format("YYYY-MM-DD") : ""
// //               }
// //               onChange={(date) => {
// //                 if (date) {
// //                   setSelectedDate(date.format("YYYY-MM-DD"));
// //                   setPickerValue(date);
// //                   setIsCalendarOpen(false);
// //                 } else {
// //                   setSelectedDate(null);
// //                   setPickerValue(dayjs());
// //                 }
// //               }}
// //               defaultPickerValue={pickerValue}
// //               inputReadOnly
// //               className="w-full h-auto 2xl:w-[448px] xl:h-[48px] !bg-[#F2F5F6] rounded-md px-3 py-2"
// //               rootClassName="custom-datepicker-input"
// //               suffixIcon={
// //                 <Image
// //                   src="/Dashboard/dosage-tracking/calendarIcon.svg"
// //                   alt="calendar"
// //                   width={24}
// //                   height={24}
// //                   className="cursor-pointer"
// //                 />
// //               }
// //               popupClassName="custom-datepicker-dropdown no-header-datepicker"
// //               disabledDate={disabledDate}
// //               panelRender={(panelNode) => (
// //                 <div
// //                   className="custom-panel-container"
// //                   ref={calendarRef}
// //                   onMouseDown={(e) => e.preventDefault()}
// //                 >
// //                   <div
// //                     className="flex justify-between items-center px-6 py-3 text-[#626D6F] font-medium"
// //                     onMouseDown={(e) => e.preventDefault()}
// //                   >
// //                     <div className="flex items-center gap-1 relative">
// //                       <span className="txt-16">
// //                         {pickerValue.format("MMMM")}
// //                       </span>
// //                       <div className="relative flex items-center">
// //                         <select
// //                           onMouseDown={(e) => e.preventDefault()}
// //                           value={pickerValue.year()}
// //                           onChange={handleYearChange}
// //                           className="bg-transparent border-none txt-16 focus:outline-none focus:ring-0 appearance-none pr-6"
// //                         >
// //                           {years.map((year) => (
// //                             <option key={year} value={year}>
// //                               {year}
// //                             </option>
// //                           ))}
// //                         </select>
// //                         <IoMdArrowDropdown
// //                           className="absolute right-0 pointer-events-none text-[#626D6F]"
// //                           size={16}
// //                         />
// //                       </div>
// //                     </div>
// //                     <div className="flex gap-2">
// //                       <button
// //                         onMouseDown={(e) => e.preventDefault()}
// //                         onClick={(e) => {
// //                           e.preventDefault();
// //                           handlePrevMonthPicker();
// //                         }}
// //                         className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
// //                       >
// //                         <MdKeyboardArrowLeft size={24} />
// //                       </button>
// //                       <button
// //                         onMouseDown={(e) => e.preventDefault()}
// //                         onClick={(e) => {
// //                           e.preventDefault();
// //                           handleNextMonthPicker();
// //                         }}
// //                         disabled={isNextMonthDisabled}
// //                         className={`w-8 h-8 flex items-center justify-center rounded-full ${
// //                           isNextMonthDisabled
// //                             ? "opacity-50 cursor-not-allowed"
// //                             : "hover:bg-gray-100"
// //                         }`}
// //                       >
// //                         <MdKeyboardArrowRight
// //                           size={24}
// //                           className={
// //                             isNextMonthDisabled ? "text-gray-400" : ""
// //                           }
// //                         />
// //                       </button>
// //                     </div>
// //                   </div>
// //                   {panelNode}
// //                 </div>
// //               )}
// //             />
// //           </div>

// //           {/* Peptide Dropdown */}
// //           <div className="relative">
// //             <p>Peptide<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //             <PeptideDropdown
// //               selected={selectedPeptide}
// //               setSelected={setSelectedPeptide}
// //             />
// //           </div>

// //           {/* Dosage Input */}
// //           <div className="relative">
// //             <p>Dosage<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //             <div className="relative">
// //               <input
// //                 type="text"
// //                 inputMode="numeric"
// //                 pattern="[0-9]*"
// //                 placeholder="Enter dosage you have taken"
// //                 className="w-full h-auto 2xl:w-[448px] xl:h-[48px] bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent font-medium placeholder:font-normal placeholder:text-[#8D9A9B] rounded-md px-4 py-2 pr-12"
// //                 value={dosage}
// //                 onChange={(e) => {
// //                   const value = e.target.value;
// //                   if (value === "" || /^\d+$/.test(value)) {
// //                     setDosage(value);
// //                   }
// //                 }}
// //               />
// //               <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8D9A9B]">
// //                 mcg
// //               </span>
// //             </div>
// //           </div>

// //           {/* Goal Textarea */}
// //           <div className="relative">
// //             <p>Goal<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //             <textarea
// //               placeholder="Write your primary goal"
// //               className="w-full 2xl:w-[448px] h-[100px] font-medium placeholder:font-normal bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-[#8D9A9B] rounded-md px-4 py-2 resize-none"
// //               value={goal}
// //               onChange={(e) => setGoal(e.target.value)}
// //             ></textarea>
// //           </div>

// //           {/* Error Message */}
// //           {authError && (
// //             <div className="text-red-500 text-sm mb-4 text-center">
// //               {authError}
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Submit Button - Fixed at bottom */}
// //       <div className="pt-4 flex-shrink-0">
// //         <button
// //           className={`txt-18 font-semibold leading-none text-center px-4 py-4 rounded-full w-full ${
// //             isFormValid && !isSubmitting
// //               ? "bg-[#224674] !text-white cursor-pointer"
// //               : "bg-[#D8DFE0] !text-[#8D9A9B] cursor-not-allowed"
// //           }`}
// //           disabled={!isFormValid || isSubmitting}
// //           onClick={handleSubmit}
// //         >
// //           {isSubmitting ? "Processing..." : editingEvent ? "Save" : "Add"}
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // );
// // };

// // export default AddEditPeptideModal;

// // // function getFDAStatus(tag: string) {
// // //   throw new Error("Function not implemented.");
// // // }
// // const getFDAStatus = (tag: string): boolean => tag === "FDA";

// // // AddEditPeptideModal.tsx
// // import React, { useState, useEffect, useRef } from "react";
// // import dayjs, { Dayjs } from "dayjs";
// // import { DatePicker } from "antd";
// // import Image from "next/image";
// // import { RxCross2 } from "react-icons/rx";
// // import dosageService from "@/services/remote/modules/dosage";
// // import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// // import { IoMdArrowDropdown } from "react-icons/io";
// // import PeptideDropdown from "../PeptideDropDown/PeptideDropDown";
// // import type { PeptideOption } from "../PeptideDropDown/PeptideDropDown";
// // import type { CalendarEvent } from "@/app/(dashboard)/Dashboard/dosage-tracking/calender/page";

// // import "./AddEditPeptideModal.css";

// // interface AddEditPeptideModalProps {
// //   isModalOpen: boolean;
// //   setIsModalOpen: (isOpen: boolean) => void;
// //   editingEvent: CalendarEvent | null;
// //   selectedDate: string | null;
// //   setSelectedDate: (date: string | null) => void;
// //   selectedPeptide: PeptideOption | null;
// //   setSelectedPeptide: (peptide: PeptideOption | null) => void;
// //   dosage: string;
// //   setDosage: (dosage: string) => void;
// //   goal: string;
// //   setGoal: (goal: string) => void;
// //   onSuccess: (data: {
// //     type: "create" | "update";
// //     event: CalendarEvent;
// //   }) => void;
// // }

// // const AddEditPeptideModal: React.FC<AddEditPeptideModalProps> = ({
// //   isModalOpen,
// //   setIsModalOpen,
// //   editingEvent,
// //   selectedDate,
// //   setSelectedDate,
// //   selectedPeptide,
// //   setSelectedPeptide,
// //   dosage,
// //   setDosage,
// //   goal,
// //   setGoal,
// //   onSuccess,
// // }) => {
// //   const [pickerValue, setPickerValue] = useState<Dayjs>(dayjs());
// //   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isClient, setIsClient] = useState(false);
// //   const [authError, setAuthError] = useState<string | null>(null);
// //   const calendarRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     if (isModalOpen) {
// //       const original = document.body.style.overflow;
// //       document.body.style.overflow = "hidden";
// //       return () => {
// //         document.body.style.overflow = original;
// //       };
// //     }
// //   }, [isModalOpen]);

// //   useEffect(() => {
// //     setIsClient(true);
// //   }, []);

// //   const getUserData = () => {
// //     if (typeof window === "undefined") return null;

// //     const token = localStorage.getItem("peptide_user_token");
// //     const rawUser = localStorage.getItem("peptide_user");

// //     if (!token || !rawUser) {
// //       setAuthError("Authentication required. Please log in.");
// //       return null;
// //     }

// //     try {
// //       const user = JSON.parse(rawUser);
// //       return {
// //         token,
// //         id: user.id,
// //         ...user,
// //       };
// //     } catch {
// //       setAuthError("Session error. Please log in again.");
// //       return null;
// //     }
// //   };

// //   useEffect(() => {
// //     if (selectedDate) {
// //       setPickerValue(dayjs(selectedDate));
// //     } else {
// //       setPickerValue(dayjs());
// //     }
// //   }, [selectedDate]);

// //   const handleSubmit = async () => {
// //     if (!isFormValid) return;
// //     setIsSubmitting(true);
// //     setAuthError(null);

// //     const userData = getUserData();
// //     if (!userData?.token) {
// //       setAuthError("Authentication required. Please log in.");
// //       setIsSubmitting(false);
// //       return;
// //     }

// //     const numericDosage = dosage.trim().replace(/mg$|mcg$/i, "");
// //     const dosagePayload = `${numericDosage}mg`;

// //     const payload = {
// //       date: selectedDate!,
// //       peptide_id: selectedPeptide!.id,
// //       dosage: dosagePayload,
// //       goals: goal,
// //     };

// //     console.log("📤 Payload:", payload);

// //     try {
// //       const wrapper = editingEvent
// //         ? await dosageService.updatePeptideDosage(
// //             Number(editingEvent.id),
// //             payload
// //           )
// //         : await dosageService.createPeptideDosage(payload);

// //       const saved = wrapper.data;

// //       const eventData: CalendarEvent = {
// //         id: saved.id.toString(),
// //         date: saved.date,
// //         dateValue: dayjs(saved.date).format("YYYY-MM-DD"),
// //         peptide: selectedPeptide!,
// //         dosage: numericDosage,
// //         goal,
// //         isFDAApproved: selectedPeptide!.tag === "FDA",
// //       };

// //       onSuccess({
// //         type: editingEvent ? "update" : "create",
// //         event: eventData,
// //       });

// //       handleClose();
// //     } catch (err: any) {
// //       console.error("❌ Submit error:", err);
// //       if (err.response?.data) {
// //         console.error("Server replied:", err.response.data);
// //       }
// //       setAuthError("Something went wrong. Please try again.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const handleClose = () => {
// //     setIsModalOpen(false);
// //     resetFormState();
// //   };

// //   const resetFormState = () => {
// //     setSelectedDate(null);
// //     setSelectedPeptide(null);
// //     setDosage("");
// //     setGoal("");
// //   };

// //   const disabledDate = (current: Dayjs) => {
// //     return current.isAfter(dayjs().endOf("day"));
// //   };

// //   const isNextMonthDisabled = pickerValue
// //     .add(1, "month")
// //     .startOf("month")
// //     .isAfter(dayjs().endOf("day"));

// //   const years = Array.from({ length: 5 }, (_, i) => pickerValue.year() - 4 + i);

// //   const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
// //     const newYear = parseInt(e.target.value);
// //     setPickerValue(pickerValue.year(newYear));
// //   };

// //   const handlePrevMonthPicker = () => {
// //     setPickerValue(pickerValue.subtract(1, "month"));
// //   };

// //   const handleNextMonthPicker = () => {
// //     if (!isNextMonthDisabled) {
// //       setPickerValue(pickerValue.add(1, "month"));
// //     }
// //   };

// //   const getWeeksInMonth = () => {
// //     const firstDay = pickerValue.startOf("month");
// //     const lastDay = pickerValue.endOf("month");
// //     const firstDayOfWeek = firstDay.day();
// //     const daysInMonth = lastDay.date();
// //     const daysFromPrevMonth = firstDayOfWeek;
// //     const totalCells = daysInMonth + daysFromPrevMonth;
// //     return Math.ceil(totalCells / 7);
// //   };

// //   const updateCalendarHeight = () => {
// //     if (!calendarRef.current) return;

// //     const weeks = getWeeksInMonth();
// //     const baseHeight = 344;
// //     const rowHeight = 50;
// //     const newHeight =
// //       weeks > 5 ? baseHeight + (weeks - 5) * rowHeight : baseHeight;

// //     calendarRef.current.style.height = `${newHeight}px`;
// //     calendarRef.current.style.minHeight = `${newHeight}px`;
// //   };

// //   useEffect(() => {
// //     if (isCalendarOpen) {
// //       setTimeout(updateCalendarHeight, 10);
// //     }
// //   }, [pickerValue, isCalendarOpen]);

// //   const isFormValid =
// //     selectedDate &&
// //     selectedPeptide &&
// //     dosage.trim() !== "" &&
// //     goal.trim() !== "";

// //   if (!isModalOpen) return null;

// //   return (
// //     <div
// //       className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center"
// //       onClick={handleClose}
// //     >
// //       <div
// //         className="bg-white rounded-[16px] p-6 w-[496px] max-sm:w-[300px]
// //                    max-h-[90vh] min-h-[300px] flex flex-col overflow-hidden"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         {/* Header - Fixed at top */}
// //         <div className="flex items-center justify-between mb-6 flex-shrink-0">
// //           <h2 className="txt-32 font-semibold text-[#25292A]">
// //             {editingEvent ? "Edit Peptide" : "Add Peptide"}
// //           </h2>
// //           <div
// //             className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
// //             onClick={handleClose}
// //           >
// //             <RxCross2 className="text-[#9EA9AA] font-extrabold" />
// //           </div>
// //         </div>

// //         {/* Scrollable Content Area */}
// //         <div className="flex flex-col gap-4 overflow-y-auto flex-grow min-h-0">
// //           <div className="flex flex-col gap-6">
// //             {/* Date Picker */}
// //             <div className="relative">
// //               <p>Date<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //               <DatePicker
// //                 allowClear
// //                 open={isCalendarOpen}
// //                 onOpenChange={(open) => {
// //                   setIsCalendarOpen(open);
// //                   if (open) setTimeout(updateCalendarHeight, 50);
// //                 }}
// //                 placement="topRight"
// //                 picker="date"
// //                 key={pickerValue.format("YYYY-MM")}
// //                 value={selectedDate ? dayjs(selectedDate) : null}
// //                 format={(val) =>
// //                   val && selectedDate ? val.format("YYYY-MM-DD") : ""
// //                 }
// //                 onChange={(date) => {
// //                   if (date) {
// //                     setSelectedDate(date.format("YYYY-MM-DD"));
// //                     setPickerValue(date);
// //                     setIsCalendarOpen(false);
// //                   } else {
// //                     setSelectedDate(null);
// //                     setPickerValue(dayjs());
// //                   }
// //                 }}
// //                 defaultPickerValue={pickerValue}
// //                 inputReadOnly
// //                 className="w-full h-auto 2xl:w-[448px] xl:h-[48px] !bg-[#F2F5F6] rounded-md px-3 py-2"
// //                 rootClassName="custom-datepicker-input"
// //                 suffixIcon={
// //                   <Image
// //                     src="/Dashboard/dosage-tracking/calendarIcon.svg"
// //                     alt="calendar"
// //                     width={24}
// //                     height={24}
// //                     className="cursor-pointer"
// //                   />
// //                 }
// //                 popupClassName="custom-datepicker-dropdown no-header-datepicker"
// //                 disabledDate={disabledDate}
// //                 panelRender={(panelNode) => (
// //                   <div
// //                     className="custom-panel-container"
// //                     ref={calendarRef}
// //                     onMouseDown={(e) => e.preventDefault()}
// //                   >
// //                     <div
// //                       className="flex justify-between items-center px-6 py-3 text-[#626D6F] font-medium"
// //                       onMouseDown={(e) => e.preventDefault()}
// //                     >
// //                       <div className="flex items-center gap-1 relative">
// //                         <span className="txt-16">
// //                           {pickerValue.format("MMMM")}
// //                         </span>
// //                         <div className="relative flex items-center">
// //                           <select
// //                             onMouseDown={(e) => e.preventDefault()}
// //                             value={pickerValue.year()}
// //                             onChange={handleYearChange}
// //                             className="bg-transparent border-none txt-16 focus:outline-none focus:ring-0 appearance-none pr-6"
// //                           >
// //                             {years.map((year) => (
// //                               <option key={year} value={year}>
// //                                 {year}
// //                               </option>
// //                             ))}
// //                           </select>
// //                           <IoMdArrowDropdown
// //                             className="absolute right-0 pointer-events-none text-[#626D6F]"
// //                             size={16}
// //                           />
// //                         </div>
// //                       </div>
// //                       <div className="flex gap-2">
// //                         <button
// //                           onMouseDown={(e) => e.preventDefault()}
// //                           onClick={(e) => {
// //                             e.preventDefault();
// //                             handlePrevMonthPicker();
// //                           }}
// //                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
// //                         >
// //                           <MdKeyboardArrowLeft size={24} />
// //                         </button>
// //                         <button
// //                           onMouseDown={(e) => e.preventDefault()}
// //                           onClick={(e) => {
// //                             e.preventDefault();
// //                             handleNextMonthPicker();
// //                           }}
// //                           disabled={isNextMonthDisabled}
// //                           className={`w-8 h-8 flex items-center justify-center rounded-full ${
// //                             isNextMonthDisabled
// //                               ? "opacity-50 cursor-not-allowed"
// //                               : "hover:bg-gray-100"
// //                           }`}
// //                         >
// //                           <MdKeyboardArrowRight
// //                             size={24}
// //                             className={
// //                               isNextMonthDisabled ? "text-gray-400" : ""
// //                             }
// //                           />
// //                         </button>
// //                       </div>
// //                     </div>
// //                     {panelNode}
// //                   </div>
// //                 )}
// //               />
// //             </div>

// //             {/* Peptide Dropdown */}
// //             <div className="relative">
// //               <p>Peptide<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //               <PeptideDropdown
// //                 selected={selectedPeptide}
// //                 setSelected={setSelectedPeptide}
// //               />
// //             </div>

// //             {/* Dosage Input */}
// //             <div className="relative">
// //               <p>Dosage<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //               <div className="relative">
// //                 <input
// //                   type="text"
// //                   inputMode="numeric"
// //                   pattern="[0-9]*"
// //                   placeholder="Enter dosage you have taken"
// //                   className="w-full h-auto 2xl:w-[448px] xl:h-[48px] bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent font-medium placeholder:font-normal placeholder:text-[#8D9A9B] rounded-md px-4 py-2 pr-12"
// //                   value={dosage}
// //                   onChange={(e) => {
// //                     const value = e.target.value;
// //                     if (value === "" || /^\d+$/.test(value)) {
// //                       setDosage(value);
// //                     }
// //                   }}
// //                 />
// //                 <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8D9A9B]">
// //                   mcg
// //                 </span>
// //               </div>
// //             </div>

// //             {/* Goal Textarea */}
// //             <div className="relative">
// //               <p>Goal<span className="ml-0.5 text-[#F14D4D]">*</span></p>
// //               <textarea
// //                 placeholder="Write your primary goal"
// //                 className="w-full 2xl:w-[448px] h-[100px] font-medium placeholder:font-normal bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-[#8D9A9B] rounded-md px-4 py-2 resize-none"
// //                 value={goal}
// //                 onChange={(e) => setGoal(e.target.value)}
// //               ></textarea>
// //             </div>

// //             {/* Error Message */}
// //             {authError && (
// //               <div className="text-red-500 text-sm mb-4 text-center">
// //                 {authError}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* Submit Button - Fixed at bottom */}
// //         <div className="pt-4 flex-shrink-0">
// //           <button
// //             className={`txt-18 font-semibold leading-none text-center px-4 py-4 rounded-full w-full ${
// //               isFormValid && !isSubmitting
// //                 ? "bg-[#224674] !text-white cursor-pointer"
// //                 : "bg-[#D8DFE0] !text-[#8D9A9B] cursor-not-allowed"
// //             }`}
// //             disabled={!isFormValid || isSubmitting}
// //             onClick={handleSubmit}
// //           >
// //             {isSubmitting ? "Processing..." : editingEvent ? "Save" : "Add"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddEditPeptideModal;

// // const getFDAStatus = (tag: string): boolean => tag === "FDA";

// // AddEditPeptideModal.tsx
// import React, { useState, useEffect, useRef } from "react";
// import dayjs, { Dayjs } from "dayjs";
// import { DatePicker } from "antd";
// import Image from "next/image";
// import { RxCross2 } from "react-icons/rx";
// import dosageService from "@/services/remote/modules/dosage";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdArrowDropdown } from "react-icons/io";
// import PeptideDropdown from "../PeptideDropDown/PeptideDropDown";
// import type { PeptideOption } from "../PeptideDropDown/PeptideDropDown";
// import type { CalendarEvent } from "@/app/(dashboard)/Dashboard/dosage-tracking/calender/page";

// import "./AddEditPeptideModal.css";

// interface AddEditPeptideModalProps {
//   isModalOpen: boolean;
//   setIsModalOpen: (isOpen: boolean) => void;
//   editingEvent: CalendarEvent | null;
//   selectedDate: string | null;
//   setSelectedDate: (date: string | null) => void;
//   selectedPeptide: PeptideOption | null;
//   setSelectedPeptide: (peptide: PeptideOption | null) => void;
//   dosage: string;
//   setDosage: (dosage: string) => void;
//   goal: string;
//   setGoal: (goal: string) => void;
//   onSuccess: (data: {
//     type: "create" | "update";
//     event: CalendarEvent;
//   }) => void;
// }

// const AddEditPeptideModal: React.FC<AddEditPeptideModalProps> = ({
//   isModalOpen,
//   setIsModalOpen,
//   editingEvent,
//   selectedDate,
//   setSelectedDate,
//   selectedPeptide,
//   setSelectedPeptide,
//   dosage,
//   setDosage,
//   goal,
//   setGoal,
//   onSuccess,
// }) => {
//   const [pickerValue, setPickerValue] = useState<Dayjs>(dayjs());
//   const [isCalendarOpen, setIsCalendarOpen] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isClient, setIsClient] = useState(false);
//   const [authError, setAuthError] = useState<string | null>(null);
//   const calendarRef = useRef<HTMLDivElement>(null);
//   const [showYearDropdown, setShowYearDropdown] = useState(false);
//   const yearDropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (isModalOpen) {
//       const original = document.body.style.overflow;
//       document.body.style.overflow = "hidden";
//       return () => {
//         document.body.style.overflow = original;
//       };
//     }
//   }, [isModalOpen]);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         yearDropdownRef.current &&
//         !yearDropdownRef.current.contains(event.target as Node)
//       ) {
//         setShowYearDropdown(false);
//       }
//     };

//     if (showYearDropdown) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showYearDropdown]);

//   const getUserData = () => {
//     if (typeof window === "undefined") return null;

//     const token = localStorage.getItem("peptide_user_token");
//     const rawUser = localStorage.getItem("peptide_user");

//     if (!token || !rawUser) {
//       setAuthError("Authentication required. Please log in.");
//       return null;
//     }

//     try {
//       const user = JSON.parse(rawUser);
//       return {
//         token,
//         id: user.id,
//         ...user,
//       };
//     } catch {
//       setAuthError("Session error. Please log in again.");
//       return null;
//     }
//   };

//   useEffect(() => {
//     if (selectedDate) {
//       setPickerValue(dayjs(selectedDate));
//     } else {
//       setPickerValue(dayjs());
//     }
//   }, [selectedDate]);

//   const handleSubmit = async () => {
//     if (!isFormValid) return;
//     setIsSubmitting(true);
//     setAuthError(null);

//     const userData = getUserData();
//     if (!userData?.token) {
//       setAuthError("Authentication required. Please log in.");
//       setIsSubmitting(false);
//       return;
//     }

//     const numericDosage = dosage.trim().replace(/mg$|mcg$/i, "");
//     const dosagePayload = `${numericDosage}mg`;

//     const payload = {
//       date: selectedDate!,
//       peptide_id: selectedPeptide!.id,
//       dosage: dosagePayload,
//       goals: goal,
//     };

//     console.log("📤 Payload:", payload);

//     try {
//       const wrapper = editingEvent
//         ? await dosageService.updatePeptideDosage(
//             Number(editingEvent.id),
//             payload
//           )
//         : await dosageService.createPeptideDosage(payload);

//       const saved = wrapper.data;

//       const eventData: CalendarEvent = {
//         id: saved.id.toString(),
//         date: saved.date,
//         dateValue: dayjs(saved.date).format("YYYY-MM-DD"),
//         peptide: selectedPeptide!,
//         dosage: numericDosage,
//         goal,
//         isFDAApproved: selectedPeptide!.tag === "FDA",
//       };

//       onSuccess({
//         type: editingEvent ? "update" : "create",
//         event: eventData,
//       });

//       handleClose();
//     } catch (err: any) {
//       console.error("❌ Submit error:", err);
//       if (err.response?.data) {
//         console.error("Server replied:", err.response.data);
//       }
//       setAuthError("Something went wrong. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleClose = () => {
//     setIsModalOpen(false);
//     resetFormState();
//   };

//   const resetFormState = () => {
//     setSelectedDate(null);
//     setSelectedPeptide(null);
//     setDosage("");
//     setGoal("");
//   };

//   const disabledDate = (current: Dayjs) => {
//     return current.isAfter(dayjs().endOf("day"));
//   };

//   const isNextMonthDisabled = pickerValue
//     .add(1, "month")
//     .startOf("month")
//     .isAfter(dayjs().endOf("day"));

//   const years = Array.from({ length: 5 }, (_, i) => pickerValue.year() - 4 + i);

//   const handlePrevMonthPicker = () => {
//     setPickerValue(pickerValue.subtract(1, "month"));
//   };

//   const handleNextMonthPicker = () => {
//     if (!isNextMonthDisabled) {
//       setPickerValue(pickerValue.add(1, "month"));
//     }
//   };

//   const getWeeksInMonth = () => {
//     const firstDay = pickerValue.startOf("month");
//     const lastDay = pickerValue.endOf("month");
//     const firstDayOfWeek = firstDay.day();
//     const daysInMonth = lastDay.date();
//     const daysFromPrevMonth = firstDayOfWeek;
//     const totalCells = daysInMonth + daysFromPrevMonth;
//     return Math.ceil(totalCells / 7);
//   };

//   const updateCalendarHeight = () => {
//     if (!calendarRef.current) return;

//     const weeks = getWeeksInMonth();
//     const baseHeight = 344;
//     const rowHeight = 50;
//     const newHeight =
//       weeks > 5 ? baseHeight + (weeks - 5) * rowHeight : baseHeight;

//     calendarRef.current.style.height = `${newHeight}px`;
//     calendarRef.current.style.minHeight = `${newHeight}px`;
//   };

//   useEffect(() => {
//     if (isCalendarOpen) {
//       setTimeout(updateCalendarHeight, 10);
//     }
//   }, [pickerValue, isCalendarOpen]);

//   const isFormValid =
//     selectedDate &&
//     selectedPeptide &&
//     dosage.trim() !== "" &&
//     goal.trim() !== "";

//   if (!isModalOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center"
//       onClick={handleClose}
//     >
//       <div
//         className="bg-white rounded-[16px] p-6 w-[496px] max-sm:w-[300px]
//                    max-h-[90vh] min-h-[300px] flex flex-col overflow-hidden"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Header - Fixed at top */}
//         <div className="flex items-center justify-between mb-6 flex-shrink-0">
//           <h2 className="txt-32 font-semibold text-[#25292A]">
//             {editingEvent ? "Edit Peptide" : "Add Peptide"}
//           </h2>
//           <div
//             className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
//             onClick={handleClose}
//           >
//             <RxCross2 className="text-[#9EA9AA] font-extrabold" />
//           </div>
//         </div>

//         {/* Scrollable Content Area */}
//         <div className="flex flex-col gap-4 overflow-y-auto flex-grow min-h-0">
//           <div className="flex flex-col gap-6">
//             {/* Date Picker */}
//             <div className="relative">
//               <p>Date<span className="ml-0.5 text-[#F14D4D]">*</span></p>
//               <DatePicker
//                 allowClear
//                 open={isCalendarOpen}
//                 onOpenChange={(open) => {
//                   setIsCalendarOpen(open);
//                   if (open) setTimeout(updateCalendarHeight, 50);
//                 }}
//                 placement="topRight"
//                 picker="date"
//                 key={pickerValue.format("YYYY-MM")}
//                 value={selectedDate ? dayjs(selectedDate) : null}
//                 format={(val) =>
//                   val && selectedDate ? val.format("YYYY-MM-DD") : ""
//                 }
//                 onChange={(date) => {
//                   if (date) {
//                     setSelectedDate(date.format("YYYY-MM-DD"));
//                     setPickerValue(date);
//                     setIsCalendarOpen(false);
//                   } else {
//                     setSelectedDate(null);
//                     setPickerValue(dayjs());
//                   }
//                 }}
//                 defaultPickerValue={pickerValue}
//                 inputReadOnly
//                 className="w-full h-auto 2xl:w-[448px] xl:h-[48px] !bg-[#F2F5F6] rounded-md px-3 py-2"
//                 rootClassName="custom-datepicker-input"
//                 suffixIcon={
//                   <Image
//                     src="/Dashboard/dosage-tracking/calendarIcon.svg"
//                     alt="calendar"
//                     width={24}
//                     height={24}
//                     className="cursor-pointer"
//                   />
//                 }
//                 popupClassName="custom-datepicker-dropdown no-header-datepicker"
//                 disabledDate={disabledDate}
//                 panelRender={(panelNode) => (
//                   <div
//                     className="custom-panel-container"
//                     ref={calendarRef}
//                     onMouseDown={(e) => e.preventDefault()}
//                   >
//                     <div
//                       className="flex justify-between items-center px-6 py-3 text-[#626D6F] font-medium"
//                       onMouseDown={(e) => e.preventDefault()}
//                     >
//                       <div className="flex items-center gap-1">
//                         <span className="txt-16">
//                           {pickerValue.format("MMMM")}
//                         </span>

//                         {/* Custom Year Dropdown */}
//                         <div className="relative" ref={yearDropdownRef}>
//                           <span
//                             className="flex items-center gap-1 cursor-pointer rounded txt-16"
//                             onClick={() => setShowYearDropdown(!showYearDropdown)}
//                           >
//                             {pickerValue.year()}
//                             <IoMdArrowDropdown
//                               className={`text-[#626D6F] transition-transform ${
//                                 showYearDropdown ? "rotate-180" : ""
//                               }`}
//                               size={16}
//                             />
//                           </span>

//                           {/* Year dropdown list */}
//                           {showYearDropdown && (
//                             <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-md z-20 max-h-52 overflow-auto w-20">
//                               {years.map((y) => (
//                                 <div
//                                   key={y}
//                                   className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
//                                     y === pickerValue.year()
//                                       ? "bg-blue-500 text-white hover:bg-blue-500"
//                                       : ""
//                                   }`}
//                                   onClick={() => {
//                                     setPickerValue(pickerValue.year(y));
//                                     setShowYearDropdown(false);
//                                   }}
//                                 >
//                                   {y}
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       <div className="flex gap-2">
//                         <button
//                           onMouseDown={(e) => e.preventDefault()}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handlePrevMonthPicker();
//                           }}
//                           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
//                         >
//                           <MdKeyboardArrowLeft size={24} />
//                         </button>
//                         <button
//                           onMouseDown={(e) => e.preventDefault()}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             handleNextMonthPicker();
//                           }}
//                           disabled={isNextMonthDisabled}
//                           className={`w-8 h-8 flex items-center justify-center rounded-full ${
//                             isNextMonthDisabled
//                               ? "opacity-50 cursor-not-allowed"
//                               : "hover:bg-gray-100"
//                           }`}
//                         >
//                           <MdKeyboardArrowRight
//                             size={24}
//                             className={
//                               isNextMonthDisabled ? "text-gray-400" : ""
//                             }
//                           />
//                         </button>
//                       </div>
//                     </div>
//                     {panelNode}
//                   </div>
//                 )}
//               />
//             </div>

//             {/* Peptide Dropdown */}
//             <div className="relative">
//               <p>Peptide<span className="ml-0.5 text-[#F14D4D]">*</span></p>
//               <PeptideDropdown
//                 selected={selectedPeptide}
//                 setSelected={setSelectedPeptide}
//               />
//             </div>

//             {/* Dosage Input */}
//             <div className="relative">
//               <p>Dosage<span className="ml-0.5 text-[#F14D4D]">*</span></p>
//               <div className="relative">
//                 <input
//                   type="text"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   placeholder="Enter dosage you have taken"
//                   className="w-full h-auto 2xl:w-[448px] xl:h-[48px] bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent font-medium placeholder:font-normal placeholder:text-[#8D9A9B] rounded-md px-4 py-2 pr-12"
//                   value={dosage}
//                   onChange={(e) => {
//                     const value = e.target.value;
//                     if (value === "" || /^\d+$/.test(value)) {
//                       setDosage(value);
//                     }
//                   }}
//                 />
//                 <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8D9A9B]">
//                   mcg
//                 </span>
//               </div>
//             </div>

//             {/* Goal Textarea */}
//             <div className="relative">
//               <p>Goal<span className="ml-0.5 text-[#F14D4D]">*</span></p>
//               <textarea
//                 placeholder="Write your primary goal"
//                 className="w-full 2xl:w-[448px] h-[100px] font-medium placeholder:font-normal bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-[#8D9A9B] rounded-md px-4 py-2 resize-none"
//                 value={goal}
//                 onChange={(e) => setGoal(e.target.value)}
//               ></textarea>
//             </div>

//             {/* Error Message */}
//             {authError && (
//               <div className="text-red-500 text-sm mb-4 text-center">
//                 {authError}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Submit Button - Fixed at bottom */}
//         <div className="pt-4 flex-shrink-0">
//           <button
//             className={`txt-18 font-semibold leading-none text-center px-4 py-4 rounded-full w-full ${
//               isFormValid && !isSubmitting
//                 ? "bg-[#224674] !text-white cursor-pointer"
//                 : "bg-[#D8DFE0] !text-[#8D9A9B] cursor-not-allowed"
//             }`}
//             disabled={!isFormValid || isSubmitting}
//             onClick={handleSubmit}
//           >
//             {isSubmitting ? "Processing..." : editingEvent ? "Save" : "Add"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddEditPeptideModal;

// const getFDAStatus = (tag: string): boolean => tag === "FDA";

// AddEditPeptideModal.tsx
import React, { useState, useEffect, useRef } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "antd";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import dosageService from "@/services/remote/modules/dosage";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import PeptideDropdown from "../PeptideDropDown/PeptideDropDown";
import type { PeptideOption } from "../PeptideDropDown/PeptideDropDown";
import type { CalendarEvent } from "@/app/(dashboard)/Dashboard/dosage-tracking/calender/page";

import "./AddEditPeptideModal.css";

interface AddEditPeptideModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  editingEvent: CalendarEvent | null;
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  selectedPeptide: PeptideOption | null;
  setSelectedPeptide: (peptide: PeptideOption | null) => void;
  dosage: string;
  setDosage: (dosage: string) => void;
  goal: string;
  setGoal: (goal: string) => void;
  onSuccess: (data: {
    type: "create" | "update";
    event: CalendarEvent;
  }) => void;
}

const AddEditPeptideModal: React.FC<AddEditPeptideModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  editingEvent,
  selectedDate,
  setSelectedDate,
  selectedPeptide,
  setSelectedPeptide,
  dosage,
  setDosage,
  goal,
  setGoal,
  onSuccess,
}) => {
  const [pickerValue, setPickerValue] = useState<Dayjs>(dayjs());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const yearDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isModalOpen]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target as Node)
      ) {
        setShowYearDropdown(false);
      }
    };

    if (showYearDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showYearDropdown]);

  const getUserData = () => {
    if (typeof window === "undefined") return null;

    const token = localStorage.getItem("peptide_user_token");
    const rawUser = localStorage.getItem("peptide_user");

    if (!token || !rawUser) {
      setAuthError("Authentication required. Please log in.");
      return null;
    }

    try {
      const user = JSON.parse(rawUser);
      return {
        token,
        id: user.id,
        ...user,
      };
    } catch {
      setAuthError("Session error. Please log in again.");
      return null;
    }
  };

  useEffect(() => {
    if (selectedDate) {
      setPickerValue(dayjs(selectedDate));
    } else {
      setPickerValue(dayjs());
    }
  }, [selectedDate]);

  const handleSubmit = async () => {
    if (!isFormValid) return;
    setIsSubmitting(true);
    setAuthError(null);

    const userData = getUserData();
    if (!userData?.token) {
      setAuthError("Authentication required. Please log in.");
      setIsSubmitting(false);
      return;
    }

    const numericDosage = dosage.trim().replace(/mg$|mcg$/i, "");
    const dosagePayload = `${numericDosage}mg`;

    const payload = {
      date: selectedDate!,
      peptide_id: selectedPeptide!.id,
      dosage: dosagePayload,
      goals: goal,
    };

    console.log("📤 Payload:", payload);

    try {
      const wrapper = editingEvent
        ? await dosageService.updatePeptideDosage(
            Number(editingEvent.id),
            payload
          )
        : await dosageService.createPeptideDosage(payload);

      const saved = wrapper.data;

      const eventData: CalendarEvent = {
        id: saved.id.toString(),
        date: saved.date,
        dateValue: dayjs(saved.date).format("YYYY-MM-DD"),
        peptide: selectedPeptide!,
        dosage: numericDosage,
        goal,
        isFDAApproved: selectedPeptide!.tag === "FDA",
      };

      onSuccess({
        type: editingEvent ? "update" : "create",
        event: eventData,
      });

      handleClose();
    } catch (err: any) {
      console.error("❌ Submit error:", err);
      if (err.response?.data) {
        console.error("Server replied:", err.response.data);
      }
      setAuthError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    resetFormState();
  };

  const resetFormState = () => {
    setSelectedDate(null);
    setSelectedPeptide(null);
    setDosage("");
    setGoal("");
  };

  const disabledDate = (current: Dayjs) => {
    return current.isAfter(dayjs().endOf("day"));
  };

  const isNextMonthDisabled = pickerValue
    .add(1, "month")
    .startOf("month")
    .isAfter(dayjs().endOf("day"));

  const years = Array.from({ length: 5 }, (_, i) => pickerValue.year() - 4 + i);

  const handlePrevMonthPicker = () => {
    setPickerValue(pickerValue.subtract(1, "month"));
  };

  const handleNextMonthPicker = () => {
    if (!isNextMonthDisabled) {
      setPickerValue(pickerValue.add(1, "month"));
    }
  };

  const getWeeksInMonth = () => {
    const firstDay = pickerValue.startOf("month");
    const lastDay = pickerValue.endOf("month");
    const firstDayOfWeek = firstDay.day();
    const daysInMonth = lastDay.date();
    const daysFromPrevMonth = firstDayOfWeek;
    const totalCells = daysInMonth + daysFromPrevMonth;
    return Math.ceil(totalCells / 7);
  };

  const updateCalendarHeight = () => {
    if (!calendarRef.current) return;

    const weeks = getWeeksInMonth();
    const baseHeight = 344;
    const rowHeight = 50;
    const newHeight =
      weeks > 5 ? baseHeight + (weeks - 5) * rowHeight : baseHeight;

    calendarRef.current.style.height = `${newHeight}px`;
    calendarRef.current.style.minHeight = `${newHeight}px`;
  };

  useEffect(() => {
    if (isCalendarOpen) {
      setTimeout(updateCalendarHeight, 10);
    }
  }, [pickerValue, isCalendarOpen]);

  const isFormValid =
    selectedDate &&
    selectedPeptide &&
    dosage.trim() !== "" &&
    goal.trim() !== "";

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-[16px] p-6 w-full max-w-[496px] 
                   max-h-[90vh] min-h-[300px] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between mb-6 flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-semibold text-[#25292A]">
            {editingEvent ? "Edit Peptide" : "Add Peptide"}
          </h2>
          <div
            className="bg-[#D8DFE0] rounded-full p-2 cursor-pointer"
            onClick={handleClose}
          >
            <RxCross2 className="text-[#9EA9AA] font-extrabold" />
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex flex-col gap-4 overflow-y-auto flex-grow min-h-0">
          <div className="flex flex-col gap-6">
            {/* Date Picker */}
            <div className="relative">
              <p>
                Date<span className="ml-0.5 text-[#F14D4D]">*</span>
              </p>
              <DatePicker
                allowClear
                open={isCalendarOpen}
                onOpenChange={(open) => {
                  setIsCalendarOpen(open);
                  if (open) setTimeout(updateCalendarHeight, 50);
                }}
                placement="topRight"
                picker="date"
                key={pickerValue.format("YYYY-MM")}
                value={selectedDate ? dayjs(selectedDate) : null}
                format={(val) =>
                  val && selectedDate ? val.format("YYYY-MM-DD") : ""
                }
                onChange={(date) => {
                  if (date) {
                    setSelectedDate(date.format("YYYY-MM-DD"));
                    setPickerValue(date);
                    setIsCalendarOpen(false);
                  } else {
                    setSelectedDate(null);
                    setPickerValue(dayjs());
                  }
                }}
                defaultPickerValue={pickerValue}
                inputReadOnly
                className="w-full xl:h-[48px] !bg-[#F2F5F6] rounded-md px-3 py-2"
                rootClassName="custom-datepicker-input w-full"
                suffixIcon={
                  <Image
                    src="/Dashboard/dosage-tracking/calendarIcon.svg"
                    alt="calendar"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                }
                classNames={{
                  popup: {
                    root: "custom-datepicker-dropdown no-header-datepicker",
                  },
                }}
                disabledDate={disabledDate}
                panelRender={(panelNode) => (
                  <div
                    className="custom-panel-container"
                    ref={calendarRef}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    <div
                      className="flex justify-between items-center px-6 py-3 text-[#626D6F] font-medium"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-base">
                          {pickerValue.format("MMMM")}
                        </span>

                        {/* Custom Year Dropdown */}
                        <div className="relative" ref={yearDropdownRef}>
                          <span
                            className="flex items-center gap-1 cursor-pointer p-1 rounded  text-base"
                            onClick={() =>
                              setShowYearDropdown(!showYearDropdown)
                            }
                          >
                            {pickerValue.year()}
                            <IoMdArrowDropdown
                              className={`text-[#626D6F] transition-transform ${
                                showYearDropdown ? "rotate-180" : ""
                              }`}
                              size={16}
                            />
                          </span>

                          {/* Year dropdown list */}
                          {showYearDropdown && (
                            <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-md z-20 max-h-52 overflow-auto w-20">
                              {years.map((y) => (
                                <div
                                  key={y}
                                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                                    y === pickerValue.year()
                                      ? "bg-blue-500 text-white hover:bg-blue-500"
                                      : ""
                                  }`}
                                  onClick={() => {
                                    setPickerValue(pickerValue.year(y));
                                    setShowYearDropdown(false);
                                  }}
                                >
                                  {y}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePrevMonthPicker();
                          }}
                          className="w-8 h-8 flex items-center justify-center rounded-full "
                        >
                          <MdKeyboardArrowLeft size={24} />
                        </button>
                        <button
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNextMonthPicker();
                          }}
                          disabled={isNextMonthDisabled}
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${
                            isNextMonthDisabled
                              ? "opacity-50 cursor-not-allowed"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          <MdKeyboardArrowRight
                            size={24}
                            className={
                              isNextMonthDisabled ? "text-gray-400" : ""
                            }
                          />
                        </button>
                      </div>
                    </div>
                    {panelNode}
                  </div>
                )}
              />
            </div>

            {/* Peptide Dropdown */}
            <div className="relative">
              <p>
                Peptide<span className="ml-0.5 text-[#F14D4D]">*</span>
              </p>
              <PeptideDropdown
                selected={selectedPeptide}
                setSelected={setSelectedPeptide}
              />
            </div>

            {/* Dosage Input */}
            <div className="relative">
              <p>
                Dosage<span className="ml-0.5 text-[#F14D4D]">*</span>
              </p>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter dosage you have taken"
                  className="w-full bg-[#F2F5F6] xl:h-[48px] border-none focus:outline-none focus:ring-0 focus:border-transparent font-medium placeholder:font-normal placeholder:text-[#8D9A9B] rounded-md px-4 py-2 pr-12"
                  value={dosage}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "" || /^\d+$/.test(value)) {
                      setDosage(value);
                    }
                  }}
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#8D9A9B]">
                  mcg
                </span>
              </div>
            </div>

            {/* Goal Textarea */}
            <div className="relative">
              <p>
                Goal<span className="ml-0.5 text-[#F14D4D]">*</span>
              </p>
              <textarea
                placeholder="Write your primary goal"
                className="w-full h-[100px] font-medium placeholder:font-normal bg-[#F2F5F6] border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder:text-[#8D9A9B] rounded-md px-4 py-2 resize-none"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              ></textarea>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="text-red-500 text-sm mb-4 text-center">
                {authError}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button - Fixed at bottom */}
        <div className="pt-4 flex-shrink-0">
          <button
            className={`text-base md:text-lg font-semibold leading-none text-center px-4 py-3 md:py-4 rounded-full w-full ${
              isFormValid && !isSubmitting
                ? "bg-[#224674] !text-white cursor-pointer"
                : "bg-[#D8DFE0] !text-[#8D9A9B] cursor-not-allowed"
            }`}
            disabled={!isFormValid || isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? "Processing..." : editingEvent ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditPeptideModal;

const getFDAStatus = (tag: string): boolean => tag === "FDA";
