import axios from 'axios'
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

export const updateUser = async (userBody) => {

    const userId = getUserFromCookie("user").userId; 

    const res = await axios.put(`${base}/users/update/${userId}`, userBody, getAuthorizedConfig());

    return res.data;
}

export const userMedal = async () => {
    const userId = getUserFromCookie("user").userId;
    const res = await axios.get(`${base}/users/medals/${userId}`);
    return res.data; 
};