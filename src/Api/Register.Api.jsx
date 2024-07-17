import axios from 'axios'

const RegisterApi = async (task) => {
    const base = "http://localhost:3000"

    const res = await axios.post(`${base}/users/create`, task);

    return res.data;
}

export { RegisterApi }
