import React, { useState, useRef, useEffect } from "react";

interface SocialIcon {
  name: string;
  icon: string | React.ReactNode;
  color: string;
}

const ShareDialog: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const videoUrl = "https://pegidiemd.com/video/What-Peptides-Can-Actually...";

  // Array List of social media icons
  const socialIcons: SocialIcon[] = [
    {
      name: "Embed",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <path
            d="M39.6621 0.970703C60.9268 0.970703 78.165 18.209 78.165 39.4736C78.165 60.7383 60.9268 77.9766 39.6621 77.9766C18.3975 77.9765 1.15918 60.7383 1.15918 39.4736C1.15924 18.209 18.3975 0.970761 39.6621 0.970703Z"
            fill="#F4F4F4"
            stroke="#E7E7E7"
            strokeWidth="0.642442"
          />
          <path
            d="M32.1959 29.0215L21.7432 39.4742L32.1959 49.9269"
            stroke="#606060"
            strokeWidth="1.49324"
          />
          <path
            d="M45.6352 29.7686L56.0879 40.2213L45.6352 50.674"
            stroke="#606060"
            strokeWidth="1.49324"
          />
        </svg>
      ),
      color: "#F4F4F4",
    },
    {
      name: "WhatsApp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <ellipse
            cx="39.7091"
            cy="39.4737"
            rx="38.8243"
            ry="38.8243"
            fill="#65D072"
          />
          <path
            d="M18.8037 60.3792L21.806 49.235C19.3847 44.8938 18.6155 39.8279 19.6394 34.9671C20.6633 30.1062 23.4116 25.7763 27.3801 22.7721C31.3486 19.7678 36.2711 18.2906 41.2442 18.6115C46.2173 18.9325 50.9075 21.03 54.4541 24.5193C58.0007 28.0086 60.1658 32.6555 60.5522 37.6074C60.9385 42.5593 59.5202 47.484 56.5574 51.4777C53.5946 55.4715 49.2862 58.2664 44.4226 59.3497C39.5591 60.433 34.4667 59.7319 30.0799 57.3752L18.8037 60.3792ZM30.6236 53.205L31.321 53.6173C34.4984 55.4943 38.2096 56.271 41.8762 55.8265C45.5428 55.3819 48.9589 53.7409 51.5921 51.1594C54.2253 48.5778 55.9276 45.2006 56.4339 41.5541C56.9402 37.9075 56.222 34.1965 54.3911 30.9993C52.5602 27.8021 49.7196 25.2983 46.3119 23.8781C42.9042 22.4578 39.1208 22.201 35.5514 23.1476C31.9819 24.0941 28.8269 26.1909 26.5779 29.1112C24.329 32.0314 23.1125 35.6111 23.118 39.2924C23.115 42.3448 23.962 45.3381 25.5647 47.9392L26.002 48.6578L24.3236 54.8778L30.6236 53.205Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.6923 42.3813C47.2659 42.0635 46.7666 41.8398 46.2324 41.7273C45.6983 41.6148 45.1434 41.6164 44.61 41.732C43.8086 42.0396 43.2908 43.2016 42.7729 43.7827C42.6637 43.9219 42.5033 44.0196 42.3217 44.0574C42.1401 44.0951 41.9498 44.0704 41.7866 43.9877C38.8527 42.9259 36.3934 40.9786 34.8083 38.4622C34.6731 38.3052 34.6091 38.1058 34.6298 37.9061C34.6505 37.7063 34.7542 37.5218 34.9192 37.3913C35.4968 36.863 35.9208 36.2086 36.1522 35.4887C36.2035 34.6947 36.0066 33.9037 35.585 33.2102C35.2591 32.2379 34.6387 31.3721 33.7973 30.7152C33.3633 30.5348 32.8821 30.4743 32.4117 30.541C31.9414 30.6077 31.502 30.7988 31.1465 31.0911C30.5294 31.5831 30.0395 32.1967 29.7131 32.8868C29.3866 33.5769 29.2318 34.3259 29.2601 35.0786C29.262 35.5013 29.32 35.9221 29.4327 36.3318C29.719 37.316 30.1593 38.2563 30.7396 39.123C31.1583 39.7869 31.6152 40.4296 32.1082 41.0484C33.7104 43.0808 35.7245 44.8065 38.0385 46.1296C39.1997 46.8019 40.4408 47.3486 41.7373 47.7587C43.084 48.3228 44.571 48.5394 46.0402 48.3853C46.8773 48.2683 47.6704 47.9628 48.3498 47.496C49.0292 47.0291 49.574 46.4151 49.9362 45.708C50.1491 45.2809 50.2137 44.8033 50.1212 44.3409C49.8992 43.3953 48.5307 42.8371 47.6923 42.3813Z"
            fill="white"
          />
        </svg>
      ),
      color: "#65D072",
    },
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <ellipse
            cx="39.2501"
            cy="39.4737"
            rx="38.8243"
            ry="38.8243"
            fill="#425893"
          />
          <path
            d="M48.2839 43.2918L49.3842 36.301H42.6064V31.7569C42.6064 29.8454 43.5527 27.9775 46.5784 27.9775H49.7033V22.0244C47.8835 21.7342 46.0448 21.5772 44.2018 21.5547C38.6234 21.5547 34.9815 24.9081 34.9815 30.9705V36.301H28.7979V43.2918H34.9815V60.2008H42.6064V43.2918H48.2839Z"
            fill="white"
          />
        </svg>
      ),
      color: "#425893",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <ellipse
            cx="39.297"
            cy="39.4737"
            rx="38.8243"
            ry="38.8243"
            fill="#4D9FEB"
          />
          <path
            d="M60.0165 27.1918C58.664 27.7744 57.2421 28.1801 55.786 28.3988C56.4668 28.282 57.4685 27.0556 57.8672 26.5591C58.4729 25.8103 58.9346 24.9555 59.2287 24.0381C59.2287 23.9699 59.2968 23.8726 59.2287 23.8239C59.1944 23.8052 59.156 23.7954 59.1169 23.7954C59.0778 23.7954 59.0393 23.8052 59.005 23.8239C57.4239 24.6809 55.7412 25.335 53.9966 25.7707C53.9358 25.7893 53.8711 25.791 53.8094 25.7755C53.7477 25.7601 53.6914 25.7281 53.6465 25.6831C53.5107 25.5212 53.3645 25.3684 53.2088 25.2256C52.4973 24.5875 51.69 24.0652 50.8164 23.6779C49.6373 23.1937 48.3637 22.9841 47.0917 23.0647C45.8575 23.1427 44.6525 23.474 43.5517 24.0381C42.4677 24.6327 41.5151 25.4406 40.7509 26.4131C39.9471 27.4141 39.3668 28.5758 39.049 29.82C38.7869 31.0034 38.7572 32.2266 38.9615 33.4215C38.9615 33.6259 38.9615 33.6551 38.7864 33.6259C31.8524 32.6038 26.1632 30.1412 21.5145 24.8557C21.3103 24.6221 21.2033 24.6221 21.038 24.8557C19.0152 27.9316 19.9974 32.7985 22.5259 35.2028C22.8663 35.524 23.2164 35.8355 23.586 36.1275C22.4267 36.0451 21.2957 35.7306 20.26 35.2028C20.0655 35.0762 19.9585 35.1444 19.9488 35.378C19.9212 35.7018 19.9212 36.0275 19.9488 36.3513C20.1517 37.9035 20.7628 39.3739 21.7197 40.6121C22.6766 41.8503 23.9449 42.8119 25.3949 43.3986C25.7483 43.5502 26.1166 43.6643 26.4938 43.7393C25.4206 43.9508 24.3198 43.9837 23.2359 43.8366C23.0025 43.788 22.9149 43.9145 23.0025 44.1384C24.4321 48.0319 27.5344 49.2194 29.8101 49.8813C30.1213 49.93 30.4325 49.93 30.7826 50.0079C30.7826 50.0079 30.7826 50.0079 30.7243 50.0663C30.0532 51.2927 27.3399 52.1201 26.0951 52.5484C23.823 53.3653 21.4005 53.6775 18.9957 53.4634C18.6164 53.405 18.5289 53.4147 18.4316 53.4634C18.3344 53.5121 18.4316 53.6191 18.5386 53.7165C19.0249 54.0377 19.5111 54.32 20.0168 54.5925C21.5223 55.4144 23.114 56.0673 24.7627 56.5393C33.3014 58.8949 42.9099 57.1622 49.3188 50.7866C54.3564 45.7834 56.1264 38.8821 56.1264 31.9711C56.1264 31.7083 56.4473 31.5526 56.6321 31.4163C57.9066 30.4224 59.0302 29.2486 59.9678 27.9316C60.1302 27.7353 60.2135 27.4853 60.2012 27.2308C60.2012 27.0848 60.2012 27.114 60.0165 27.1918Z"
            fill="white"
          />
        </svg>
      ),
      color: "#4D9FEB",
    },
    {
      name: "Email",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "#888888",
    },
    {
      name: "Reddit",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="79"
          height="79"
          viewBox="0 0 79 79"
          fill="none"
        >
          <ellipse
            cx="39.3917"
            cy="39.4737"
            rx="38.8243"
            ry="38.8243"
            fill="#FF4500"
          />
          <path
            d="M58.9723 40.4772C58.9782 40.8747 58.9284 41.2714 58.823 41.6552C58.7176 42.0389 58.5581 42.4066 58.3488 42.7461C58.1402 43.0856 57.8841 43.3946 57.5885 43.6637C57.2928 43.9328 56.9606 44.1591 56.6012 44.3361C56.6093 44.442 56.6159 44.5486 56.6195 44.6552C56.6283 44.8679 56.6283 45.0809 56.6195 45.2935C56.6159 45.4002 56.6093 45.5068 56.6012 45.6127C56.6012 52.1119 48.9611 57.3924 39.5352 57.3924C30.1094 57.3924 22.4693 52.1119 22.4693 45.6127C22.4612 45.5068 22.4546 45.4002 22.451 45.2935C22.4421 45.0809 22.4421 44.8679 22.451 44.6552C22.4546 44.5486 22.4612 44.442 22.4693 44.3361C21.9063 44.0796 21.4063 43.7049 21.0039 43.238C20.6014 42.7711 20.3061 42.2231 20.1384 41.6319C19.971 41.0405 19.9353 40.4201 20.0339 39.8136C20.1325 39.2071 20.3629 38.6292 20.7092 38.1198C21.0553 37.6105 21.509 37.1819 22.0388 36.8637C22.5687 36.5456 23.1621 36.3455 23.7777 36.2774C24.3935 36.209 25.0169 36.2741 25.6048 36.4682C26.1926 36.6624 26.7308 36.9809 27.1822 37.4017C28.02 36.8388 28.8978 36.3368 29.8087 35.8995C30.7198 35.4628 31.6616 35.0914 32.6269 34.7897C33.5921 34.4879 34.5786 34.2565 35.5776 34.0962C36.5765 33.9359 37.5864 33.8482 38.5985 33.8329L40.7647 23.765C40.7888 23.6482 40.8364 23.538 40.9045 23.4393C40.9718 23.3414 41.0589 23.2573 41.1591 23.1927C41.2601 23.1282 41.3728 23.0839 41.4914 23.0621C41.6092 23.0411 41.7307 23.0433 41.8478 23.0687L49.0196 24.4904C49.7434 23.258 51.2626 22.7299 52.604 23.2435C53.9455 23.757 54.7124 25.1606 54.4124 26.5547C54.1131 27.9489 52.8353 28.9208 51.3995 28.8476C49.9629 28.7743 48.7927 27.6776 48.6391 26.2602L42.3747 24.9546L40.472 34.007C41.4716 34.0281 42.4691 34.1209 43.4556 34.2841C45.4311 34.6105 47.3487 35.2178 49.1491 36.0873C50.0484 36.5211 50.9149 37.0185 51.742 37.5758C52.3366 37.0098 53.0839 36.6267 53.8935 36.4725C54.7031 36.3178 55.5406 36.3987 56.3048 36.7053C57.0692 37.0119 57.7277 37.5311 58.201 38.2003C58.6744 38.8696 58.9423 39.6603 58.9723 40.4772ZM29.9221 44.4891C30.0699 44.8409 30.2851 45.1608 30.5573 45.4299C30.8288 45.6997 31.1515 45.913 31.5065 46.0595C31.8617 46.2051 32.2424 46.2801 32.6269 46.28C33.811 46.28 34.878 45.5728 35.3317 44.4891C35.7847 43.4047 35.5337 42.1571 34.6965 41.3273C33.8593 40.4975 32.6005 40.2487 31.5065 40.6977C30.4131 41.1474 29.6996 42.205 29.6996 43.3786C29.6996 43.7594 29.775 44.1366 29.9221 44.4891ZM46.688 51.454C46.8381 51.3089 46.9237 51.1109 46.9266 50.9034C46.9295 50.6952 46.8483 50.4951 46.7019 50.3464C46.5556 50.1977 46.3558 50.1128 46.1465 50.1099C45.9365 50.107 45.7345 50.1875 45.5654 50.313C45.1252 50.6259 44.6591 50.9013 44.172 51.1363C43.6849 51.3713 43.1787 51.5652 42.6586 51.7158C42.139 51.866 41.607 51.9726 41.0691 52.0343C40.5305 52.0959 39.9882 52.1119 39.4474 52.0829C38.9073 52.1068 38.3658 52.085 37.8294 52.0183C37.2928 51.9522 36.763 51.8406 36.2457 51.6846C35.7276 51.5294 35.2248 51.3307 34.7411 51.0913C34.2574 50.8519 33.7949 50.5719 33.3587 50.255C33.2072 50.1316 33.0147 50.0685 32.8186 50.078C32.6225 50.0874 32.4373 50.1694 32.2983 50.3065C32.16 50.4443 32.0773 50.6278 32.0678 50.8222C32.0583 51.0166 32.1219 51.2073 32.2463 51.3575C32.7608 51.7419 33.3075 52.0814 33.8805 52.373C34.4535 52.6646 35.0514 52.9061 35.6661 53.0962C36.2808 53.2862 36.9109 53.4233 37.5498 53.5067C38.1887 53.5894 38.8334 53.6177 39.4767 53.5916C40.12 53.6177 40.7647 53.5894 41.4036 53.5067C42.6832 53.3399 43.9243 52.9564 45.0729 52.373C45.6459 52.0814 46.1926 51.7419 46.7071 51.3575L46.688 51.454ZM46.1509 46.5121C46.5475 46.5165 46.9412 46.4403 47.3079 46.2894C47.6745 46.1378 48.006 45.9144 48.2827 45.6323C48.5593 45.3501 48.7744 45.015 48.9164 44.6472C49.0585 44.2799 49.1235 43.8877 49.1074 43.4947C49.1074 42.321 48.3939 41.2635 47.3006 40.8137C46.2065 40.3648 44.9478 40.6136 44.1106 41.4434C43.2734 42.2732 43.0224 43.5208 43.4753 44.6052C43.9291 45.6889 44.9961 46.3961 46.1801 46.3961L46.1509 46.5121Z"
            fill="white"
          />
        </svg>
      ),
      color: "#FF4500",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      color: "#0A66C2",
    },
    {
      name: "Telegram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
      color: "#0088CC",
    },
    {
      name: "Tumblr",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "#35465C",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 160;
      if (direction === "left") {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }

      // Update arrow visibility after scrolling
      setTimeout(updateArrowVisibility, 300);
    }
  };

  const updateArrowVisibility = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  // Update arrow visibility on resize and initial render
  useEffect(() => {
    updateArrowVisibility();
    window.addEventListener("resize", updateArrowVisibility);

    return () => {
      window.removeEventListener("resize", updateArrowVisibility);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-[656px] overflow-hidden animate-scaleIn px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className=" py-6 flex justify-between items-center">
          <h3 className="text-3xl font-medium text-[#0F0F0F]  ">Share</h3>
          <button
            onClick={onClose}
            className="text-[#030303] hover:text-gray-700 transition-colors "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19.1357 0.865234L1.2168 18.7842"
                stroke="#030303"
                strokeWidth="1.49324"
              />
              <path
                d="M19.1357 18.7842L1.21682 0.865234"
                stroke="#030303"
                strokeWidth="1.49324"
              />
            </svg>
          </button>
        </div>

        {/* Social Icons Slider */}
        <div className="py-2  relative ">
          {showLeftArrow && (
            <button
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-[0px_2.986px_11.946px_0px_rgba(0,0,0,0.25)] z-10 hover:bg-gray-100 transition-all"
              onClick={() => scrollSlider("left")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}

          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide  scroll-smooth"
            onScroll={updateArrowVisibility}
          >
            {socialIcons.map((item, index) => (
              <button
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-19 p-1"
              >
                <div
                  className="w-19 h-19 rounded-full flex items-center justify-center text-white mb-1 transition-transform hover:scale-105"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <span className="text-sm text-[#0F0F0F]">{item.name}</span>
              </button>
            ))}
          </div>

          {showRightArrow && (
            <button
              className="absolute -right-6 top-1/2 -mt-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-[0px_2.986px_11.946px_0px_rgba(0,0,0,0.25)] z-10 hover:bg-gray-100 transition-all"
              onClick={() => scrollSlider("right")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>

        {/* URL Section */}
        <div className=" mt-10 pb-6">
          <div className="flex items-center  bg-[#F9F9F9] rounded-2xl overflow-hidden border border-[#E0E0E0]">
            <p className="flex-1 p-3 text-lg text-[#0F0F0F] truncate">
              {videoUrl}
            </p>
            <button
              onClick={copyToClipboard}
              className={`m-2 px-5 py-2.5 text-lg  rounded-full font-medium transition-colors ${
                copied
                  ? "bg-green-500 text-white"
                  : "bg-[#2EA7E0] text-white hover:bg-blue-600"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        {/* horizontal line */}
        <div className="w-full h-[2px] bg-[#E5E5E5] mb-20"></div>
      </div>
    </div>
  );
};

export default ShareDialog;
