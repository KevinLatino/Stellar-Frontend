import axios from 'axios'

const LoginApi = async (credentials) => {
    const base = "http://localhost:3000"

    const res = await axios.post(`${base}/sessions/login`, credentials);

    const { token, userId } = res.data;

    const user =  { token, userId };

    document.cookie = `user=${JSON.stringify(user)}`

    return res;
}



export { LoginApi }
