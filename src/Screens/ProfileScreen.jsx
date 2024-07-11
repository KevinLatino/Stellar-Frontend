import React from 'react'
import { useAuth } from '../Context/context';
import Profile from '../../public/Ilustrations/Profile.svg'
import { EditProfile } from '../Components/EditProfileComponent';
import useFormSetters from '../hooks/useFormSetter'


const ProfileScreen = () => {

    const [formState, createFormSetter] = useFormSetters({ name: '', lastName: '', email: '', password: '' });

    const { logout } = useAuth();

    const handleButtonClick = () => {
        logout();
    }

    return (
        <>
            <div className='mt-[3rem]'>
                <div className='flex justify-center items-center flex-col gap-y-4'>
                    <img src={Profile} width={200} />
                    <h1 className='font-raleway text-2xl border-b-2 border-light-blue'>Kevin Latino</h1>
                </div>
                <div className='flex justify-center items-center mt-[4rem]'>
                    <h1 className='font-raleway text-2xl border-b-2 border-light-yellow'>Tus principales medallas</h1>
                </div>
            </div>
            <EditProfile />
        </>
    )
}

export { ProfileScreen }
