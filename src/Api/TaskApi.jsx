import axios from 'axios'
import getUserFromCookie from '../Utils/getUserCookies';

const TaskApi = async (user) => {
    const base = "http://localhost:3000"

    const token = getUserFromCookie("user").token;

    const res = await axios.post(`${base}/tasks/create`, user, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}

const getUserTasks = async () => {
    const base = "http://localhost:3000";

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/getTask/${userId}`)

    return res.data
}

export { TaskApi, getUserTasks }

