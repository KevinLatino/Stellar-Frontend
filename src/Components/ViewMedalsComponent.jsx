import React, { useState } from 'react';
import { UserRound, KeyRound, Inbox, LayoutPanelTop, Medal } from 'lucide-react';
import { motion } from 'framer-motion';
import 'animate.css';

const ViewMedal = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center fixed bg-light-blue w-[55px] h-[55px] rounded-full bottom-24 left-[55.5%] cursor-pointer z-10"
                onClick={handleOpenPopup}
            >
                <Medal size={30} color='white' />
            </motion.div>

            {isPopupOpen && (
                <div className="animate__animated animate__fadeIn fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">

                    <div className="flex flex-col justify-center items-center animate__animated animate__bounceInDown bg-white p-6 rounded-lg w-[32rem] max-w-full text-center">

                        <h2 className="text-2xl mb-4 font-raleway border-b-[0.1rem] border-light-blue">Edita tu perfil</h2>

                        <div className="relative mb-4 w-full max-w-md">
                            <UserRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe tu nombre"
                                className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe tu apellido"
                                className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <Inbox size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe tu nuevo correo"
                                className=" bg-[#E0E4EE] placeholder-strong-blue text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <KeyRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="password"
                                placeholder="Escribe tu nueva contraseña"
                                className=" bg-[#E0E4EE] placeholder-strong-blue text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className='flex gap-4'>
                            <button
                                onClick={handleClosePopup}
                                className="bg-light-blue text-white px-4 py-2 rounded-xl"
                            >
                                Editar Perfil
                            </button>

                            <button
                                onClick={handleClosePopup}
                                className="bg-strong-red text-white px-4 py-2 rounded-xl"
                            >
                                Atrás
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export { ViewMedal };
