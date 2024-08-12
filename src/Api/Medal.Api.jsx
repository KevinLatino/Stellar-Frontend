import axios from "axios";

const base = "http://localhost:3000";

export const getAllMedals = async () => {
    try {
        const response = await axios.get(`${base}/medals/findAll`);
        return response.data;
    } catch (error) {
        console.error("Error fetching medals:", error);
        throw error; 
    }
};
