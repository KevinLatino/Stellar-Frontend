import React, { useState } from 'react';
import { Plus, Pencil, Captions, Star, CalendarHeart } from 'lucide-react';
import { motion } from 'framer-motion';
import 'animate.css';

const AddTask = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [priority, setPriority] = useState('');

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center fixed bg-light-green w-[55px] h-[55px] rounded-full bottom-10 left-[93.5%] cursor-pointer z-10"
                onClick={handleOpenPopup}
            >
                <Plus size={38} color='white' />
            </motion.div>

            {isPopupOpen && (
                <div className="animate__animated animate__fadeIn fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">

                    <div className="flex flex-col justify-center items-center animate__animated animate__bounceInDown bg-white p-6 rounded-lg w-[32rem] max-w-full text-center">

                        <h2 className="text-2xl mb-4 font-raleway border-b-[0.1rem] border-light-blue">Crear una nueva tarea</h2>

                        <div className="relative mb-4 w-full max-w-md">
                            <Pencil size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe el título"
                                className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <Captions size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe una descripción"
                                className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <Star size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <select
                                value={priority}
                                onChange={handlePriorityChange}
                                className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-10 pr-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option className='text-gray-800 font-raleway'>Selecciona la prioridad</option>
                                <option value="espera" className='text-light-green font-raleway'>Espera</option>
                                <option value="normal" className='text-light-yellow font-raleway' >Normal</option>
                                <option value="urgente" className='text-strong-red font-raleway'>Urgente</option>
                            </select>
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <CalendarHeart size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="date"
                                placeholder="Fecha"
                                className=" bg-[#E0E4EE] placeholder-strong-blue text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className='flex gap-4'>
                            <button
                                onClick={handleClosePopup}
                                className="bg-light-blue text-white px-4 py-2 rounded-xl"
                            >
                                Crear tarea
                            </button>

                            <button
                                onClick={handleClosePopup}
                                className="bg-strong-red text-white px-4 py-2 rounded-xl"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export { AddTask };
