import axios from 'axios'
import getUserFromCookie from '../Utils/getUserCookies';

const base = "http://localhost:3000";


export const createTask = async (task) => {
    const token = getUserFromCookie("user").token;

    const res = await axios.post(`${base}/tasks/create`, task, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}


export const updateTask = async (id, bodyUpdated) => {
    const token = getUserFromCookie("user").token;

    const res = await axios.put(`${base}/tasks/update/${id}`, bodyUpdated, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}


export const getNormalTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/normal/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}


export const getWaitingTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/waiting/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}


export const getCompletedTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId

    const res = await axios.get(`${base}/tasks/completed/${userId}`, { headers: { Authorization: `Bearer ${token}` } });

    return res.data;
}

export const getUrgentTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/urgent/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}

export const getUrgentTasksCompleted = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/completed/urgent/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}

export const getWaitingTasksCompleted = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/completed/waiting/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}

export const getNormalTasksCompleted = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/completed/normal/${userId}`, { headers: { Authorization: `Bearer ${token}` } })

    return res.data;
}



