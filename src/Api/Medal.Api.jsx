import axios from "axios";
import getUserFromCookie from '../Utils/getUserCookies';

const base = "http://localhost:3000";

const getAuthorizedConfig = () => {
    const { token } = getUserFromCookie("user");
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};


export const getAllMedals = async () => {
    try {
        const userId = getUserFromCookie("user").userId;
        const response = await axios.get(`${base}/medals/findAll/${userId}`, getAuthorizedConfig());
        return response.data;
    } catch (error) {
        console.error("Error fetching medals:", error);
        throw error; 
    }
};
