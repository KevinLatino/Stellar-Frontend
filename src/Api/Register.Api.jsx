import React from 'react'
import axios from 'axios'


const RegisterApi = async (user) => {
    const base = "http://localhost:3000"

    const res = await axios.post(`${base}/users/create`, user);

    return res;
}

export { RegisterApi }
