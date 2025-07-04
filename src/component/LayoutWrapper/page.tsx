

"use client"; // Must be first line

import { usePathname } from "next/navigation";
import Header from "../Header/page";
import Footer from "../Footer/page";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { useEffect, useState } from "react"; // Add useState

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false); // Add client check
  
  // Sab routes ko lowercase mein define karein
  const noLayoutRoutes = [
    "/login",
    "/signup",
    "/forgetpassword",
    "/sixdigitverify",
    "/createnewpassword"
  ];

  // Add useEffect for client-side detection
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Pathname ko lowercase mein convert karke compare karein
  const currentPath = isClient && pathname ? pathname.toLowerCase() : "";
  
  const shouldHideLayout = noLayoutRoutes.some(route => 
    currentPath === route.toLowerCase() || 
    currentPath.startsWith(route.toLowerCase() + "/")
  );

  // Dashboard detection bhi lowercase mein
  const isDashboard = currentPath.startsWith("/dashboard");

  return (
    <>
      {isClient && !shouldHideLayout && (isDashboard ? <DashboardHeader /> : <Header />)}
      <main>{children}</main>
      {isClient && !shouldHideLayout && !isDashboard && <Footer />}
    </>
  );
}




















// "use client"; // Must be first line

// import { usePathname } from "next/navigation";
// import Header from "../Header/page";
// import Footer from "../Footer/page";
// import DashboardHeader from "../DashboardHeader/DashboardHeader";


// export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
  
//   // Sab routes ko lowercase mein define karein
//   const noLayoutRoutes = [
//     "/login",
//     "/signup",
//     "/forgetpassword",
//     "/sixdigitverify",
//     "/createnewpassword"
//   ];

//   // Pathname ko lowercase mein convert karke compare karein
//   const currentPath = pathname.toLowerCase();
//   const shouldHideLayout = noLayoutRoutes.some(route => 
//     currentPath === route.toLowerCase() || 
//     currentPath.startsWith(route.toLowerCase() + "/")
//   );

//   // Dashboard detection bhi lowercase mein
//   const isDashboard = currentPath.startsWith("/dashboard");

//   return (
//     <>
//       {!shouldHideLayout && (isDashboard ? <DashboardHeader /> : <Header />)}
//       <main>{children}</main>
//       {!shouldHideLayout && !isDashboard && <Footer />}
//     </>
//   );
// }



// bilal code 
// "use client";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Header from "@/component/Header/page";
// import DashboardHeader from "@/component/DashboardHeader/DashboardHeader";
// import Footer from "../Footer/page";

// export default function LayoutWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();

//   const noLayoutRoutes = [
//     "/login",
//     "/signup",
//     "/forgetpassword",
//     "/sixdigitverify",
//     "/createnewpassword",
//   ];
//  console.log(pathname)
//   const shouldHideLayout = noLayoutRoutes.includes(pathname.toLowerCase());

//   const isDashboard = pathname.toLowerCase().startsWith("/dashboard");

//   useEffect(() => {
//     if (shouldHideLayout) {
//       // Ensure scroll is restored if sidebar left overflow-hidden
//       document.body.classList.remove("overflow-hidden");
//       document.documentElement.classList.remove("overflow-hidden");

//       // Also restore height just in case
//       document.body.style.height = "auto";
//       document.documentElement.style.height = "auto";
//     }
//   }, [shouldHideLayout]);

//   return (
//     <>
//       {!shouldHideLayout && (isDashboard ? <DashboardHeader /> : <Header />)}
//       <main className={`${!shouldHideLayout ? "" : ""}`}>{children}</main>
//       {/* footer */}
//       {!shouldHideLayout && (isDashboard ? null : <Footer />)}
//     </>
//   );
// }
