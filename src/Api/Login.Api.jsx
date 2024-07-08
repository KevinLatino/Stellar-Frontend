import React from 'react'
import axios from 'axios'

const LoginApi = async (credentials) => {
    const base = "http://localhost:3000"

    const res = await axios.post(`${base}/sessions/login`, credentials);

    const token = res.data.token

    document.cookie = `token=${token}`

    return res
}

export { LoginApi }
