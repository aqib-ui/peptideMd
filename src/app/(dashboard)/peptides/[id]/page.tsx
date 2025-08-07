import { getPeptideById } from "@/services/peptideApi";
import PreptideDetails from "../../components/PreptideDetails";

// Generate static params - add all known peptide IDs
export async function generateStaticParams() {
  // Since we don't have getAllPeptides endpoint, manually specify known IDs
  // we can update this list as you add more peptides
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    // Add more IDs as needed
  ];
  // we can use this code if we have getAllPeptides endpoint
  // export async function generateStaticParams() {
  // const peptides = await getAllPeptides();
  // return peptides.map((peptide) => ({
  //   id: peptide.id.toString(),
  // }));
  // }
}

export default async function Page({ params }: { params: { id: string } }) {


   const { id } = await params;

  const peptide = await getPeptideById(id);
    if (!peptide) return <div>Peptide not found</div>;

  return <PreptideDetails peptideObj={peptide} page="peptides" />;
}
