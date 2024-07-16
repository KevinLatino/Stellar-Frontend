import axios from 'axios';

const LoginApi = async (credentials) => {
    const base = "http://localhost:3000";

    try {
        const res = await axios.post(`${base}/sessions/login`, credentials);

        const { token, userId, user: userData } = res.data;

        const user = {
            token,
            userId,
            name: userData.name,
            lastName: userData.lastName,
            secondLastName: userData.secondLastName
        };

        document.cookie = `user=${encodeURIComponent(JSON.stringify(user))}; SameSite=Strict; path=/`;

        return res;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
};

export { LoginApi };
