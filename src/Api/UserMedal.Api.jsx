import axios from "axios";
import getUserFromCookie from "../Utils/getUserCookies";

const base = "http://localhost:3000";

const getAuthorizedConfig = () => {
    const { token } = getUserFromCookie("user");
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const userMedal = async () => {
    const userId = getUserFromCookie("user").userId;
    const res = await axios.get(`${base}/users/medals/${userId}`);
    return res.data; 
};

export const addGoalMedal = async () => {

    const userId = getUserFromCookie("user").userId;
    const medalId = "1c12c649-cac3-44f7-9164-ab38a8e53928";
    const res = await axios.post(`${base}/user-medal/goals`, { userId, medalId }, getAuthorizedConfig());
    return res.data;

}

export const checkGoalMedal = async () => {
    const userId = getUserFromCookie("user").userId;
    const res = await axios.get(`${base}/users/checkGoalMedal/${userId}`);
    return res.data;
}

export const findAllMedals = async () => {
    const userId = getUserFromCookie("user").userId;
    const res = await axios.get(`${base}/user-medal/findAll/${userId}`);
    return res.data;
}

