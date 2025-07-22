const API_BASE_URL = 'https://peptide-backend.mazedigital.us/peptides';

export interface PeptideData {
  id: number;
  title: string;
  nuda_name: string;
  content: string;
  primary_applications: string;
  fda_status: string;
  fda_description: string;
  protocol_duration: string;
  experience_level: string;
  side_effect_profile: string;
  popular_combinations: string;
  created_at: string;
  update_at: string;
}

export interface ApiResponse {
  status: string;
  message: string;
  data: PeptideData;
  statusCode: number;
}

// Get single peptide by ID
export async function getPeptideById(id: string): Promise<PeptideData | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/v1_mobile_getPeptideById/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result: ApiResponse = await response.json();
    
    if (result.status === 'success') {
      return result.data;
    } else {
      console.error('API Error:', result.message);
      return null;
    }
  } catch (error) {
    console.error('Error fetching peptide:', error);
    return null;
  }
}

// Get all peptides (if you have this endpoint)
// export async function getAllPeptides(): Promise<PeptideData[]> {
//   try {
//     const response = await fetch(`${API_BASE_URL}/v1_mobile_getAllPeptides`);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const result = await response.json();
    
//     if (result.status === 'success') {
//       return result.data;
//     } else {
//       console.error('API Error:', result.message);
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching peptides:', error);
//     return [];
//   }
// } 