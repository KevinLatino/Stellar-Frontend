import axios from 'axios'

const RegisterApi = async (register) => {
    const base = "http://localhost:3000"

    const res = await axios.post(`${base}/users/create`, register);

    return res.data;
}

export { RegisterApi }
