import React, { useState } from 'react';
import FallingBg from '../../public/Ilustrations/Falling-Bg.png';
import { UserRound, KeyRound, Inbox, LayoutPanelTop } from 'lucide-react';
import { useMutation } from 'react-query';
import { RegisterApi } from '../Api/Register.Api';
import { useNavigate } from 'react-router-dom';
import useFormSetters from '../hooks/useFormSetter'



const RegisterScreen = () => {

    const [formState, createFormSetter] = useFormSetters({ name: '', lastName: '', email: '', password: '' });

    const navigate = useNavigate();


    const registerMutation = useMutation({ mutationFn: RegisterApi });

    if (registerMutation.isLoading) {
        return <span>loading...</span>
    }

    if(registerMutation.isSuccess){
        return navigate('/login')
    }

    if (registerMutation.isError) {
        return <span>Error...</span>
    }


    return (
        <div className="flex h-screen">
            <div className="bg-strong-blue w-1/2 flex items-center justify-center">
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className="text-4xl font-medium text-light-White">
                        ¡Bienvenido a <b className='text-light-blue'>Stellar</b>!
                    </h1>
                    <p className="text-xl font-medium text-light-White">
                        Crea tu cuenta para comenzar
                    </p>
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
                    <button
                        onClick={() => registerMutation.mutate(formState)}
                        className="bg-light-blue text-white py-2 px-20 rounded-lg hover:bg-blue-600 transition duration-300">
                        Registrarse
                    </button>
                </div>
            </div>
            <div className="bg-strong-blue w-1/2 flex items-center justify-center">
                <img src={FallingBg} className='h-full pointer-events-none' />
            </div>
        </div>
    );
}

export { RegisterScreen };
