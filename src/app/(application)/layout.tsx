import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main style={{ maxWidth: "1920px", marginInline: "auto" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
