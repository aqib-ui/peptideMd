import peptidesDataRaw from "@/data/peptidesData";
import PreptideDetails from "../../components/PreptideDetails";

// export const dynmicParmas = false
export async function generateStaticParams() {
  return peptidesDataRaw.map((preptide) => ({
    id: preptide.id,
  }));

}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const peptide = peptidesDataRaw.find((preptide) => preptide.id === id);
 
  if (!peptide) return <div>Video not found</div>;

  return <PreptideDetails obj={peptide} page="peptides"   />;
}
