import axios from 'axios'

const verifyToken = async (token) => {

    const base = "http://localhost:3000";

    const res = await axios.post(`${base}/sessions/verifyToken`, {token});

    const verify = res.data

    return verify;
}

export default verifyToken
