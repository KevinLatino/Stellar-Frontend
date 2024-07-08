import { useEffect } from 'react'
import getCookie from '../utils/getCookie';
import verifyToken from '../Api/VerifyToken.Api';
import { useNavigate } from 'react-router-dom';

const useVerify = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getCookie("token")
        console.log(token);
        if (!token) {
            navigate('/login')
        }
        verifyToken(token).then(verify => {
            if (!verify) {
                navigate('/login')
            }
        })
    }, [])
}

export default useVerify
