import ChatShell from "./components/ChatShell";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;

  const startRaw = resolvedParams.start;
  const endRaw = resolvedParams.end;

  const start = Array.isArray(startRaw) ? startRaw[0] : startRaw ?? null;
  const end = Array.isArray(endRaw) ? endRaw[0] : endRaw ?? start;

  return <ChatShell start={start} end={end} />;
}
