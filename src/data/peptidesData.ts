export interface Peptide {
  id: string;
  peptide: string;
  nudaName: string;
  primaryApplications: string;
  protocolDuration: string;
  experiencesLevel: string;
  sideEffectProfile: string;
  status: string;
}

const peptidesData: Peptide[] = [
  {
    id: "1",
    peptide: "AOD-3664",
    nudaName: "Arden",
    primaryApplications: "Weight management, fat loss",
    protocolDuration: "Medium (6-12 weeks)",
    experiencesLevel: "Beginner",
    sideEffectProfile: "Minimal",
    status: "Not FDA",
  },
  {
    id: "2",
    peptide: "BPC-157",
    nudaName: "Omeisane",
    primaryApplications: "Accelerates healing of muscles, tendons, and ligaments; supports gut health",
    protocolDuration: "Short to Medium (4-8 weeks)",
    experiencesLevel: "Beginner",
    sideEffectProfile: "Minimal",
    status: "Not FDA",
  },
  {
    id: "3",
    peptide: "CJC-1395",
    nudaName: "Crescens",
    primaryApplications: "Enhancement of growth hormone (GH) and insulin-like growth factor 1 (IGF-1) levels...",
    protocolDuration: "Medium (6-12 weeks)",
    experiencesLevel: "Intermediate",
    sideEffectProfile: "Moderate",
    status: "FDA",
  },
  {
    id: "4",
    peptide: "Igomorelin",
    nudaName: "Pulcar",
    primaryApplications: "Stimulates GH release with minimal cortisol/prolactin impact; muscle growth, fat loss, recovery.",
    protocolDuration: "Short to Medium (6 to 12 weeks)",
    experiencesLevel: "Beginner to Intermediate",
    sideEffectProfile: "Minimal",
    status: "FDA",
  },
  {
    id: "5",
    peptide: "Risapoptin",
    nudaName: "Catalyst",
    primaryApplications: "Regulates reproductive hormone axis; fertility support, puberty initiation, hormone testing",
    protocolDuration: "Short to Medium (2 to 4 weeks)",
    experiencesLevel: "Advanced",
    sideEffectProfile: "Minimal",
    status: "Not FDA",
  },

  // --- Auto-generated peptide entries 6 to 50 ---
  ...Array.from({ length: 45 }, (_, i) => {
    const id = (i + 6).toString();
    return {
      id,
      peptide: `Peptide-${id}`,
      nudaName: `Nuda-${id}`,
      primaryApplications: `Application summary for peptide ${id}`,
      protocolDuration: i % 2 === 0 ? "Medium (6-12 weeks)" : "Short (2-4 weeks)",
      experiencesLevel: ["Beginner", "Intermediate", "Advanced"][(i % 3)],
      sideEffectProfile: i % 4 === 0 ? "Moderate" : "Minimal",
      status: i % 3 === 0 ? "FDA" : "Not FDA",
    };
  }),
];

export default peptidesData;
