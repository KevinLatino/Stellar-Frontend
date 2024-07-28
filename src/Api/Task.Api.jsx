import axios from 'axios'
import getUserFromCookie from '../Utils/getUserCookies';

const base = "http://localhost:3000/tasks";

const getAuthorizedConfig = () => {
    const { token } = getUserFromCookie("user");
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

export const createTask = async (task) => {

    const res = await axios.post(`${base}/create`, task, getAuthorizedConfig());

    return res.data;
}


export const updateTask = async (id, bodyUpdated) => {

    const res = await axios.put(`${base}/update/${id}`, bodyUpdated, getAuthorizedConfig());

    return res.data;
}


export const getNormalTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/normal/${userId}`, getAuthorizedConfig())

    return res.data;
}


export const getWaitingTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/waiting/${userId}`, getAuthorizedConfig())

    return res.data;
}


export const getCompletedTasks = async () => {

    const userId = getUserFromCookie("user").userId

    const res = await axios.get(`${base}/completed/${userId}`, getAuthorizedConfig());

    return res.data;
}

export const getUrgentTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/urgent/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getUrgentTasksCompleted = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/urgent/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getWaitingTasksCompleted = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/waiting/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getNormalTasksCompleted = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/normal/${userId}`, getAuthorizedConfig())

    return res.data;
}

export const getTodayTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/today/${userId}`, getAuthorizedConfig())

    return res.data
}

export const getWeekTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/week/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getPendingWaitingTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/pending/waiting/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getPendingNormalTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/pending/normal/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getPendingUrgentgTasks = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/pending/urgent/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getTotalPending = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/pending/total/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getOverdue = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/overdue/${userId}`, getAuthorizedConfig());

    return res.data
}

export const countOverdue = async () => {

    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/total/overdue/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getJanuaryCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/january/${userId}`, getAuthorizedConfig());

    return res.data
}


export const getFebruaryCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/february/${userId}`, getAuthorizedConfig());

    return res.data
}


export const getMarchCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/march/${userId}`, getAuthorizedConfig());

    return res.data
}


export const getAprilCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/april/${userId}`, getAuthorizedConfig());

    return res.data
}


export const getMayCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/may/${userId}`, getAuthorizedConfig());

    return res.data
}


export const getJuneCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/june/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getJulyCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/july/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getAugustCompletedTask = async () => {
    const userId = getUserFromCookie("user").userId;

    const res = await axios.get(`${base}/completed/august/${userId}`, getAuthorizedConfig());

    return res.data
}

export const getTitleAndDate = async () => {
    const userId = getUserFromCookie(user).userId;

    const res = await axios.get(`${base}/titles-dates/${userId}`);
    
    return res.data;
}



