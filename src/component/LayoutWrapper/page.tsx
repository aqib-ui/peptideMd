// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/component/Header/page";
// import Footer from "@/component/Footer/page";

// export default function LayoutWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname(); // returns something like "/Login"

//   // Match the actual route casing: /Login, /ForgetPassword
//   const noLayoutRoutes = ["/Login", "/Signup", "/ForgetPassword", "/SixDigitVerify"];

//   const shouldHideLayout = noLayoutRoutes.includes(pathname);

//   return (
//     <>
//       {!shouldHideLayout && <Header />}
//       <main className={`${!shouldHideLayout ? "pt-9 md:pt-16" : ""}`}>
//         {children}
//       </main>
//       {!shouldHideLayout && <Footer />}
//     </>
//   );
// }



// ////////////////////////////////  11-6-25  /////////////////////////

// "use client";

// import { usePathname } from "next/navigation";
// import Header from "@/component/Header/page";
// import Footer from "@/component/Footer/page";

// export default function LayoutWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname(); // e.g. "/login"

//   // Lowercase the list to match pathname
//   const noLayoutRoutes = ["/login", "/signup", "/forgetpassword", "/sixdigitverify", "/createnewpassword"];

//   const shouldHideLayout = noLayoutRoutes.includes(pathname.toLowerCase());

//   return (
//     <>
//       {!shouldHideLayout && <Header />}
//       <main className={`${!shouldHideLayout ? "pt-9 md:pt-16" : ""}`}>
//         {children}
//       </main>
//       {!shouldHideLayout && <Footer />}
//     </>
//   );
// }


// ////////////////////////////////// 12-6-25 /////////////////////////////////////////////////////////////////////////////////

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/component/Header/page";
// import Footer from "@/component/Footer/page";

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

  const shouldHideLayout = noLayoutRoutes.includes(pathname.toLowerCase());

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
      {!shouldHideLayout && <Header />}
      <main className={`${!shouldHideLayout ? "pt-9 md:pt-16" : ""}`}>
        {children}
      </main>
      {/* {!shouldHideLayout && <Footer />} */}
    </>
  );
}
