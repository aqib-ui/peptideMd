import axiosClient from "../base_api_class";

class DosageRemoteService {
  constructor() {
    this.apiRoutes = {
      getPeptideDosageByDate: "/peptide-dosage/getByDate", // getting data from database by date
      getPeptideDosageByDateRange: "/peptide-dosage/getByDateRange",

      createPeptideDosage: "/peptide-dosage/create", // creating new dosage (adding new dosage)
      updatePeptideDosage: (id) => `/peptide-dosage/update/${id}`, // updating existing dosage
      deletePeptideDosage: (id) => `/peptide-dosage/delete/${id}`, // deleting existing dosage
    };
  }

  async getPeptideDosageByDate(date) {
    try {
      const response = await axiosClient.get(
        this.apiRoutes.getPeptideDosageByDate,
        {
          params: { date },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Get Dosage By Date Error:", error);
      throw error;
    }
  }
  // NEW: fetch all doses between start and end (inclusive)
  async getPeptideDosageByDateRange(start, end) {
    try {
      const response = await axiosClient.get(
        this.apiRoutes.getPeptideDosageByDateRange,
        { params: { start, end } }
      );
      return response.data; // { status, message, data: [ ... ], statusCode }
    } catch (error) {
      console.error("Get Dosage By DateRange Error:", error);
      throw error;
    }
  }

  async createPeptideDosage(data) {
    try {
      const response = await axiosClient.post(
        this.apiRoutes.createPeptideDosage,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Create Dosage Error:", error);
      throw error;
    }
  }

  async updatePeptideDosage(id, data) {
    try {
      const response = await axiosClient.patch(
        this.apiRoutes.updatePeptideDosage(id),
        data
      );
      return response.data;
    } catch (error) {
      console.error("Update Dosage Error:", error);
      throw error;
    }
  }

  async deletePeptideDosage(id) {
    try {
      const response = await axiosClient.delete(
        this.apiRoutes.deletePeptideDosage(id)
      );
      return response.data;
    } catch (error) {
      console.error("Delete Dosage Error:", error);
      throw error;
    }
  }
}

export default new DosageRemoteService(); // ✅ Correct
