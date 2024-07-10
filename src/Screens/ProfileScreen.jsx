import React from 'react'
import { useAuth } from '../Context/context';


const ProfileScreen = () => {

    const { logout } = useAuth();

    const handleButtonClick = () =>{
        logout();
    }

    return (
        <>
            <button
            onClick={handleButtonClick}
            >salir</button>
        </>
    )
}

export { ProfileScreen }
