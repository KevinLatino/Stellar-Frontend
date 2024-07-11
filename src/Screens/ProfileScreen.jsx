import React from 'react'
import { useAuth } from '../Context/context';
import { UserRound, KeyRound, Inbox, LayoutPanelTop } from 'lucide-react';
import Profile from '../../public/Ilustrations/Profile.svg'
import useFormSetters from '../hooks/useFormSetter'


const ProfileScreen = () => {

    const [formState, createFormSetter] = useFormSetters({ name: '', lastName: '', email: '', password: '' });

    const { logout } = useAuth();

    const handleButtonClick = () => {
        logout();
    }

    return (
        <>
            <div className='mt-[7rem]'>
                <div className='flex gap-10'>
                    <img src={Profile} width={310} />
                    <div className='flex flex-col'>
                        <div className="relative mb-4 w-full max-w-md">
                            <UserRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre"
                                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("name")(event.target.value)}
                                value={formState.name}
                            />
                        </div>
                        <div className="relative mb-4 w-full max-w-md">
                            <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Ingresa tu primer apellido"
                                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("lastName")(event.target.value)}
                                value={formState.lastName}
                            />
                        </div>
                        <div className="relative mb-4 w-full max-w-md">
                            <Inbox size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Ingresa tu correo electrónico"
                                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("email")(event.target.value)}
                                value={formState.email}
                            />
                        </div>
                        <div className="relative mb-4 w-full max-w-md">
                            <KeyRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                className="bg-gray-100 text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("password")(event.target.value)}
                                value={formState.password}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ProfileScreen }
