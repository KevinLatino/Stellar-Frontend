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

export const createTask = async (task) => {
    const token = getUserFromCookie("user").token;

    const res = await axios.post(`${base}/tasks/create`, task, getAuthorizedConfig());

    return res.data;
}


export const updateTask = async (id, bodyUpdated) => {
    const token = getUserFromCookie("user").token;

    const res = await axios.put(`${base}/tasks/update/${id}`, bodyUpdated, getAuthorizedConfig());

    return res.data;
}


export const getNormalTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/normal/${userId}`, getAuthorizedConfig())

    return res.data;
}


export const getWaitingTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/waiting/${userId}`, getAuthorizedConfig())

    return res.data;
}


export const getCompletedTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId

    const res = await axios.get(`${base}/tasks/completed/${userId}`, getAuthorizedConfig());

    return res.data;
}

export const getUrgentTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/urgent/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getUrgentTasksCompleted = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/completed/urgent/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getWaitingTasksCompleted = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/completed/waiting/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getNormalTasksCompleted = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/completed/normal/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getTodayTasks = async () => {
    const token = getUserFromCookie("user").token;

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/tasks/today/${userId}`, getAuthorizedConfig())

    return res.data
}



