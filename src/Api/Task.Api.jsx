import axios from 'axios';
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

const getUserId = () => getUserFromCookie("user").userId;

const getTaskByCategory = async (category) => {
    const res = await axios.get(`${base}/${category}/${getUserId()}`, getAuthorizedConfig());
    return res.data;
};

export const createTask = async (task) => {
    const res = await axios.post(`${base}/create`, task, getAuthorizedConfig());
    return res.data;
};

export const updateTask = async (id, bodyUpdated) => {
    const res = await axios.put(`${base}/update/${id}`, bodyUpdated, getAuthorizedConfig());
    return res.data;
};

export const getNormalTasks = () => getTaskByCategory('normal');

export const getWaitingTasks = () => getTaskByCategory('waiting');

export const getCompletedTasks = () => getTaskByCategory('completed');

export const getUrgentTasks = () => getTaskByCategory('urgent');

export const getUrgentTasksCompleted = () => getTaskByCategory('completed/urgent');

export const getWaitingTasksCompleted = () => getTaskByCategory('completed/waiting');

export const getNormalTasksCompleted = () => getTaskByCategory('completed/normal');

export const getTodayTasks = () => getTaskByCategory('today');

export const getWeekTasks = () => getTaskByCategory('week');

export const getPendingWaitingTasks = () => getTaskByCategory('pending/waiting');

export const getPendingNormalTasks = () => getTaskByCategory('pending/normal');

export const getPendingUrgentgTasks = () => getTaskByCategory('pending/urgent');

export const getTotalPending = () => getTaskByCategory('pending/total');

export const getOverdue = () => getTaskByCategory('overdue');

export const countOverdue = () => getTaskByCategory('total/overdue');

export const getJanuaryCompletedTask = () => getTaskByCategory('completed/january');

export const getFebruaryCompletedTask = () => getTaskByCategory('completed/february');

export const getMarchCompletedTask = () => getTaskByCategory('completed/march');

export const getAprilCompletedTask = () => getTaskByCategory('completed/april');

export const getMayCompletedTask = () => getTaskByCategory('completed/may');

export const getJuneCompletedTask = () => getTaskByCategory('completed/june');

export const getJulyCompletedTask = () => getTaskByCategory('completed/july');

export const getAugustCompletedTask = () => getTaskByCategory('completed/august');

export const getTitleAndDate = async () => {
    const res = await axios.get(`${base}/titles-dates/${getUserId()}`, getAuthorizedConfig());
    return res.data;
};

export const deleteTask = async (id) => {
    const res = await axios.delete(`${base}/delete/${id}`, getAuthorizedConfig());
    return res.data;
};
