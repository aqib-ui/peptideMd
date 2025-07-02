
export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</> // sirf children render karo — no <html>, <body>, <head>
  );
}