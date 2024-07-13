import React from 'react'
import { useAuth } from '../Context/context';
import Profile from '../../public/Ilustrations/Profile.svg'
import { EditProfile } from '../Components/ViewMedalsComponent';
import ProfileBg from '../../public/Ilustrations/Vector.svg'
import { UserRound, KeyRound, LayoutPanelTop } from 'lucide-react';
import useFormSetters from '../hooks/useFormSetter'


const ProfileScreen = () => {

    const [formState, createFormSetter] = useFormSetters({ name: '', lastName: '', email: '', password: '' });

    const { logout } = useAuth();

    const handleButtonClick = () => {
        logout();
    }

    return (
        <>
            <div className='flex flex-col gap-[3rem]'>
                <div className='flex justify-center items-center flex-col gap-y-4'>
                    <img src={ProfileBg} width={1000} 
                    className=''
                    />
                    <h1 className='font-raleway text-2xl border-b-2 border-light-blue'>Kevin Latino</h1>
                </div>

                <div className='flex justify-center items-center flex-col gap-2'>

                    <div className="relative mb-4 w-full max-w-md">
                        <UserRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A3AFF]" />
                        <input
                            type="text"
                            placeholder="Escribe tu nombre"
                            className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative mb-4 w-full max-w-md">
                        <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A3AFF]" />
                        <input
                            type="text"
                            placeholder="Escribe tu apellido"
                            className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue p-4 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="relative mb-4 w-full max-w-md">
                        <KeyRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#7A3AFF]" />
                        <input
                            type="password"
                            placeholder="Escribe tu nueva contraseña"
                            className=" bg-[#E0E4EE] placeholder-strong-blue text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        className="bg-light-blue text-white px-4 py-2 rounded-xl"
                    >
                        Modificar Perfil
                    </button>
                </div>
            </div>
            <EditProfile />
        </>
    )
}

export { ProfileScreen }
