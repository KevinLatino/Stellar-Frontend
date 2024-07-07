import React from 'react';
import FallingBg from '../../public/Ilustrations/Falling-Bg.png'

const RegisterScreen = () => {
    return (
        <div className="flex h-screen">
            <div className="bg-[#14162e] w-1/2 flex items-center justify-center">
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className="text-4xl font-medium text-light-White">
                        ¡Bienvenido a <b className='text-[#4461F2]'>Stellar</b>!
                    </h1>
                    <p className="text-xl font-medium text-light-White">
                        Crea tu cuenta para comenzar
                    </p>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        className="bg-gray-100 text-gray-800 py-2 px-4 mb-4 w-full max-w-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa tus apellidos"
                        className="bg-gray-100 text-gray-800 py-2 px-4 mb-4 w-full max-w-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa tu correo electrónico"
                        className="bg-gray-100 text-gray-800 py-2 px-4 mb-4 w-full max-w-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Ingresa tu contraseña"
                        className="bg-gray-100 text-gray-800 py-2 px-4 mb-4 w-full max-w-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-[#4461F2] text-white py-2 px-20 rounded-lg hover:bg-blue-600 transition duration-300">
                        Registrarse
                    </button>
                </div>
            </div>
            <div className="bg-[#14162e] w-1/2 flex items-center justify-center">
                <img src={FallingBg} className='h-full pointer-events-none' />
            </div>
        </div>
    );
}

export { RegisterScreen };