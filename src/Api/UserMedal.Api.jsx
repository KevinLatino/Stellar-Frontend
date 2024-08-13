import axios from "axios";
import getUserFromCookie from "../Utils/getUserCookies";

const base = "http://localhost:3000/";

const getAuthorizedConfig = () => {
    const { token } = getUserFromCookie("user");
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const addGoalMedal = async () => {

    const userId = getUserFromCookie("user").userId;
    const medalId = "1c12c649-cac3-44f7-9164-ab38a8e53928";
    const res = await axios.post(`${base}/user-medal/goals`, {userId, medalId});
    return res.data;

}