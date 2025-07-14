import DashboardHeader from "@/components/DashboardHeader/DashboardHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardHeader />
      <main style={{ maxWidth: "1920px", marginInline: "auto" }}>
        {children}
      </main>
    </>
  );
}
