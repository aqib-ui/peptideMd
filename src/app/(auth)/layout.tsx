export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main style={{ maxWidth: "1920px", marginInline: "auto" }}>
        {children}
      </main>
    </>
  );
}
