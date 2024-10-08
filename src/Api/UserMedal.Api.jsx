import axios from "axios";
import getUserFromCookie from "../Utils/getUserCookies";

const BASE_URL = "http://localhost:3000";

const getAuthorizedConfig = () => {
    const { token } = getUserFromCookie("user");
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

const getUserId = () => {
    return getUserFromCookie("user").userId;
};

const findMedalRequest = async (endpoint) => {
    const res = await axios.get(`${BASE_URL}${endpoint}`, getAuthorizedConfig());
    return res.data;
};

const postMedalRequest = async (endpoint, medalId) => {
    const userId = getUserId();
    const res = await axios.post(
        `${BASE_URL}${endpoint}`, 
        { userId, medalId },
        getAuthorizedConfig()
    );
    return res.data;
};


export const userMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/medals/${userId}`);
};

export const checkGoalMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/checkGoalMedal/${userId}`);
};

export const checkEisenhowerMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/checkEisenhowerMedal/${userId}`);
};

export const checkPomodoroMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/checkPomodoroMedal/${userId}`);
};

export const checkDateMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/checkDateMedal/${userId}`);
};

export const checkEnvironmentMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/checkEnvironmentMedal/${userId}`);
};

export const checkMindfulnessMedal = async () => {
    const userId = getUserId();
    return findMedalRequest(`/users/checkMindfulnessMedal/${userId}`);
};

export const findAllMedals = async () => {
    const userId = getUserId();
    return findMedalRequest(`/user-medal/findAll/${userId}`);
};

export const addGoalMedal = async () => {
    const GOAL_MEDAL_ID = "1c12c649-cac3-44f7-9164-ab38a8e53928";
    return postMedalRequest("/user-medal/goals", GOAL_MEDAL_ID);
};

export const addEisenhowerMedal = async () => {
    const EISENHOWER_MEDAL_ID = "8c498df9-c95e-47f4-ae62-454dca1b1e0b";
    return postMedalRequest("/user-medal/Eisenhower", EISENHOWER_MEDAL_ID);
};

export const addPomodoroMedal = async () => {
    const POMODORO_MEDAL_ID = "8cd34f20-e4f3-448c-8dd6-d2b736577783";
    return postMedalRequest("/user-medal/Pomodoro", POMODORO_MEDAL_ID);
};

export const addDateMedal = async () => {
    const DATE_MEDAL_ID = "3d0a5cf4-b932-4937-85f9-f51cbc09dfa6";
    return postMedalRequest("/user-medal/Dates", DATE_MEDAL_ID);
};

export const addEnvironmentMedal = async () => {
    const ENVIRONMENT_MEDAL_ID = "1c6c94ed-95d6-4231-b653-bf3719098e35";
    return postMedalRequest("/user-medal/Environment", ENVIRONMENT_MEDAL_ID);
};

export const addMindfulnessMedal = async () => {
    const MINDFULNESS_MEDAL_ID = "e78f9bfa-8e5d-4708-ace9-c4e1c3edde98";
    return postMedalRequest("/user-medal/Mindfulness", MINDFULNESS_MEDAL_ID);
};
