import React from 'react';
import { UserRound, KeyRound } from 'lucide-react';
import { useMutation } from 'react-query';
import { LoginApi } from '../Api/Login.Api';
import useFormSetters from '../hooks/useFormSetter';
import FallingBg from '../../public/Ilustrations/Falling-Bg.png';
import { useAuth } from '../Context/context';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formState, createFormSetter] = useFormSetters({ email: '', password: '' });
    const loginMutation = useMutation(LoginApi);

    const handleLogin = async () => {
        try {
            const response = await loginMutation.mutateAsync(formState);
            login(response.data); 
            navigate('/sidebar/dashboard'); 
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    if (loginMutation.isLoading) {
        return <span>loading...</span>;
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
                        className="bg-light-blue text-white py-2 px-20 rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={handleLogin} // Llamar a la función que maneja el inicio de sesión
                    >
                        login
                    </button>
                </div>
            </div>
            <div className="bg-strong-blue w-1/2 flex items-center justify-center">
                <img src={FallingBg} className='h-full pointer-events-none' />
            </div>
        </div>
    );
}

export { LoginScreen };
