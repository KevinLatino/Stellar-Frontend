import React, { useState } from 'react';
import { UserRound, KeyRound } from 'lucide-react';
import { useMutation } from 'react-query';
import { LoginApi } from '../Api/Login.Api';
import { useAuth } from '../Context/context';
import { useNavigate } from 'react-router-dom';
import useFormSetters from '../hooks/useFormSetter';
import FallingBg from '../../public/Ilustrations/Falling-Bg.png';
import SpinnerComponent from '../Components/SpinnerComponent';

const LoginScreen = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formState, createFormSetter] = useFormSetters({ email: '', password: '' });
    const [error, setError] = useState('');
    const loginMutation = useMutation(LoginApi, {
        onError: (error) => {
            if (error.response && error.response.data) {
                setError('El correo electrónico o la contraseña son inválidos');
            } else {
                setError('Error durante el inicio de sesión');
            }
        },
        onSuccess: (data) => {
            login(data);
            navigate('/sidebar/dashboard');
        }
    });

    const handleLogin = async () => {
        setError('');
        await loginMutation.mutateAsync(formState);
    };

    const spinnerColor = "blue-500"

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
                    {error && <p className="text-red-500 mt-1">{error}</p>}
                    <button
                        className="bg-light-blue text-white py-2 px-20 rounded-lg hover:bg-blue-600 transition duration-300 relative"
                        onClick={handleLogin}
                        disabled={loginMutation.isLoading}
                    >
                        {!loginMutation.isLoading ? 'Login' : 'Loading...'}
                    </button>
                    {loginMutation.isLoading && (
                        <div className="mt-2">
                            <SpinnerComponent color={spinnerColor} />
                        </div>
                    )}
                </div>
            </div>
            <div className="bg-strong-blue w-1/2 flex items-center justify-center">
                <img src={FallingBg} className='h-full pointer-events-none' />
            </div>
        </div>
    );
}

export { LoginScreen };
