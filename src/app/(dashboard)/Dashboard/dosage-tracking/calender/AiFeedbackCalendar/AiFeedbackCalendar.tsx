// src/app/(dashboard)/Dashboard/dosage-tracking/calender/AiFeedbackCalendar/AiFeedbackCalendar.tsx
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useRouter } from "next/navigation";

import DosageRemoteService from "@/services/remote/modules/dosage";

const Calendar1: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // new!
  const [errorMsg, setErrorMsg] = useState<string>("");

  // define single‑date vs range here
  const isSingleLocal = endDate === null;

  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Get today's date without time component
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Disable future dates
  const isFutureDate = (date: Date) => {
    return date > today;
  };

  // Disable next month button if next month is in the future
  const isNextMonthDisabled = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    return nextMonth > today;
  };

  // Generate years for dropdown
  // const generateYears = () => {
  //   const currentYear = new Date().getFullYear();
  //   const years = [];
  //   for (let i = currentYear - 4; i <= currentYear + 0; i++) {
  //     years.push(i);
  //   }
  //   return years;
  // };
const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  const START_YEAR = 2021;  // Fixed starting point
  
  for (let i = START_YEAR; i <= currentYear; i++) {
    years.push(i);
  }
  return years;
};

  const years = generateYears();

  // Generate days for the current month
  const getDaysInMonth = (): (number | null)[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    const days: (number | null)[] = [];

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days = getDaysInMonth();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (day: number | null) => {
    if (day === null) return;

    // Create full date object for selected day
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    // Reset if both dates selected
    if (startDate && endDate) {
      setStartDate(selectedDate);
      setEndDate(null);
      return;
    }

    // First selection
    if (!startDate) {
      setStartDate(selectedDate);
      return;
    }

    // Second selection - set end date
    if (selectedDate < startDate) {
      setStartDate(selectedDate);
      setEndDate(startDate);
    } else {
      setEndDate(selectedDate);
    }
  };

  const handleYearChange = (selectedYear: number) => {
    setCurrentDate(new Date(selectedYear, currentDate.getMonth(), 1));
    setShowYearDropdown(false);
  };

  // Helper functions for styling
  const isDateInCurrentMonth = (date: Date) => {
    return (
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    );
  };

  const isStartDate = (day: number) => {
    return (
      !!startDate &&
      isDateInCurrentMonth(startDate) &&
      startDate.getDate() === day
    );
  };

  const isEndDate = (day: number) => {
    return (
      !!endDate && isDateInCurrentMonth(endDate) && endDate.getDate() === day
    );
  };

  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false;

    const currentDayDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );

    return (
      currentDayDate > startDate &&
      currentDayDate < endDate &&
      isDateInCurrentMonth(currentDayDate)
    );
  };

  // Helper function to get all dates in a range
  const getAllDatesInRange = (start: Date, end: Date): Date[] => {
    const dates = [];
    const current = new Date(start);
    const last = new Date(end);

    while (current <= last) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  };

  const router = useRouter();

  const handleContinue = async () => {
    if (!startDate) {
      // alert("Please select at least one date");
      setErrorMsg("Please select a date or date range.");
      return;
    }

    // clear any prior error
    setErrorMsg("");

    // format to YYYY‑MM‑DD
    const formatLocalDate = (date: Date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

    const startISO = formatLocalDate(startDate);
    const endISO = endDate ? formatLocalDate(endDate) : startISO;

    try {
      // choose the right endpoint
      const res = isSingleLocal
        ? await DosageRemoteService.getPeptideDosageByDate(startISO)
        : await DosageRemoteService.getPeptideDosageByDateRange(
            startISO,
            endISO
          );

      // if no records, show error and bail out
       if (res.status !== "success" || !res.data?.length) {
        setErrorMsg(
          isSingleLocal
            ? "No data exists for this date."
            : "No data exists for the selected date range."
        );
        return;
      }

      // otherwise navigate
      router.push(`/Dashboard/chat-pepi?start=${startISO}&end=${endISO}`);
    } catch (err) {
      console.error(err);
      setErrorMsg("Error checking peptide data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[448px] min-h-[360px] h-auto gap-6 ">
      {/* Calendar Container */}
      <div
        className="bg-white rounded-4xl px-6 py-2 w-full"
        style={{
          boxShadow: "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
        }}
      >
        {/* Calendar Header */}
        <div className="flex justify-between items-center w-full mb-2">
          <div className="flex txt-14 items-center gap- font-medium text-[#626D6F]">
            <span>{month}</span>
            <div className="relative">
              <span
                className="flex items-end gap-2 text-[#626D6F] cursor-pointer p-1 rounded"
                onClick={() => setShowYearDropdown(!showYearDropdown)}
              >
                {year}
                <IoMdArrowDropdown
                  className={`text-[#626D6F] text-lg transition-transform ${
                    showYearDropdown ? "rotate-0" : ""
                  }`}
                />
              </span>

              {showYearDropdown && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-md z-10 max-h-52 overflow-auto w-20">
                  {years.map((y) => (
                    <div
                      key={y}
                      className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${
                        y === year
                          ? "bg-blue-500 text-white hover:bg-blue-500"
                          : ""
                      }`}
                      onClick={() => handleYearChange(y)}
                    >
                      {y}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex">
            <button
              className="flex items-center justify-center rounded-full w-12 h-12 hover:bg-gray-100 transition-colors"
              onClick={handlePrevMonth}
            >
              <MdChevronLeft className="text-[#626D6F] text-2xl" />
            </button>
            <button
              className={`flex items-center justify-center rounded-full w-12 h-12 ${
                isNextMonthDisabled()
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-100 transition-colors"
              }`}
              onClick={isNextMonthDisabled() ? undefined : handleNextMonth}
              disabled={isNextMonthDisabled()}
            >
              <MdChevronRight
                className={`text-2xl ${
                  isNextMonthDisabled() ? "text-gray-400" : "text-[#626D6F]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Weekday Headers */}
        <div className="grid grid-cols-7 mb-4">
          {weekdays.map((day, index) => (
            <div
              key={index}
              className="text-center txt-14 text-[#25292A] font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={index} className="aspect-square flex"></div>;
            }

            const date = new Date(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            );
            const isFuture = isFutureDate(date);

            return (
              <div
                key={index}
                className="aspect-square flex"
                onClick={() => !isFuture && handleDateSelect(day)}
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center txt-14 font-medium ${
                    isFuture
                      ? "text-gray-400 cursor-not-allowed"
                      : "cursor-pointer text-gray-800"
                  } ${
                    !isFuture &&
                    (isStartDate(day) || isEndDate(day)
                      ? "bg-[#224674] text-white font-semibold"
                      : isInRange(day)
                      ? "bg-[#C8E4FC] text-[#224674]"
                      : "")
                  }`}
                >
                  {day}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="w-full max-w-[448px] flex flex-col justify-center items-center gap-1">
        {/* <p> */}
          {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
        {/* </p> */}
      {/* Continue Button */}
      <button
        className="w-full py-3.5 bg-[#224674] cursor-pointer !text-white rounded-full font-semibold transition-colors hover:bg-[#1a3559]"
        onClick={handleContinue}
      >
        Continue
      </button>
      </div>

      {/* {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>} */}

    </div>
  );
};

export default Calendar1;
