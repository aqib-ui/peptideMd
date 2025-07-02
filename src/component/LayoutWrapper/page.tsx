"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/component/Header/page";
import DashboardHeader from "@/component/DashboardHeader/DashboardHeader";
import Footer from "../Footer/page";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noLayoutRoutes = [
    "/login",
    "/signup",
    "/forgetpassword",
    "/sixdigitverify",
    "/createnewpassword",
  ];
 console.log(pathname)
  const shouldHideLayout = noLayoutRoutes.includes(pathname.toLowerCase());

  const isDashboard = pathname.toLowerCase().startsWith("/dashboard");

  useEffect(() => {
    if (shouldHideLayout) {
      // Ensure scroll is restored if sidebar left overflow-hidden
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");

      // Also restore height just in case
      document.body.style.height = "auto";
      document.documentElement.style.height = "auto";
    }
  }, [shouldHideLayout]);

  return (
    <>
      {!shouldHideLayout && (isDashboard ? <DashboardHeader /> : <Header />)}
      <main className={`${!shouldHideLayout ? "" : ""}`}>{children}</main>
      {/* footer */}
      {!shouldHideLayout && (isDashboard ? null : <Footer />)}
    </>
  );
}
