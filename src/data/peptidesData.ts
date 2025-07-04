// src/data/peptidesData.ts

export interface Peptide {
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
    peptide: "AOD-3664",
    nudaName: "Arden",
    primaryApplications: "Weight management, fat loss",
    protocolDuration: "Medium (6-12 weeks)",
    experiencesLevel: "Beginner",
    sideEffectProfile: "Minimal",
    status: "Not FDA",
  },
  {
    peptide: "BPC-157",
    nudaName: "Omeisane",
    primaryApplications:
      "Accelerates healing of muscles, tendons, and ligaments; supports gut health",
    protocolDuration: "Short to Medium (4-8 weeks)",
    experiencesLevel: "Beginner",
    sideEffectProfile: "Minimal",
    status: "Not FDA",
  },
  {
    peptide: "CJC-1395",
    nudaName: "Crescens",
    primaryApplications:
      "Enhancement of growth hormone (GH) and insulin-like growth factor 1 (IGF-1) levels...",
    protocolDuration: "Medium (6-12 weeks)",
    experiencesLevel: "Intermediate",
    sideEffectProfile: "Moderate",
    status: "FDA",
  },
  {
    peptide: "Igomorelin",
    nudaName: "Pulcar",
    primaryApplications:
      "Stimulates GH release with minimal cortisol/prolactin impact; muscle growth, fat loss, recovery.",
    protocolDuration: "Short to Medium (6 to 12 weeks)",
    experiencesLevel: "Beginner to Intermediate",
    sideEffectProfile: "Minimal",
    status: "FDA",
  },
  {
    peptide: "Risapoptin",
    nudaName: "Catalyst",
    primaryApplications:
      "Regulates reproductive hormone axis; fertility support, puberty initiation, hormone testing",
    protocolDuration: "Short to Medium (2 to 4 weeks)",
    experiencesLevel: "Advanced",
    sideEffectProfile: "Minimal",
    status: "Not FDA",
  },
];

export default peptidesData;
