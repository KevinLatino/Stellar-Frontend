import axios from 'axios'
import getUserFromCookie from '../Utils/getUserCookies';

const base = "http://localhost:3000";

const createTask = async (task) => {
    const token = getUserFromCookie("user").token;

    const res = await axios.post(`${base}/tasks/create`, task, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}

const updateTask = async (id, bodyUpdated) => {
    const token = getUserFromCookie("user").token;

    const res = await axios.put(`${base}/tasks/update/${id}`, bodyUpdated, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}

const getNormalTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/normal/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}

const getWaitingTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/waiting/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}

const getCompletedTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId

    const res = await axios.get(`${base}/tasks/completed/${userId}`, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}

const getUrgentTasks = async () => {
    const token = getUserFromCookie("user").token;
    
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/urgent/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}

export { createTask, getNormalTasks, getWaitingTasks, getUrgentTasks, getCompletedTasks, updateTask }
