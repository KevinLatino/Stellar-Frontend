import React, { useState } from 'react';
import useFormSetters from '@Hooks/useFormSetter';
import { Plus, Pencil, Captions, Star, CalendarHeart, ClipboardList } from 'lucide-react';
import { useQueryClient, useMutation } from 'react-query';
import { createTask } from '@Api/Task.Api';
import { motion } from 'framer-motion';
import { useAuth } from '@Context/context';
import 'animate.css';


const AddTask = () => {
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const userId = user.userId;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const [formState, createFormSetter] = useFormSetters({ title: '', description: '', priority: '', dueDate: '' });

    const taskMutation = useMutation({
        mutationFn: createTask,
        onSuccess: () => {
            queryClient.refetchQueries(["urgentTasks"]);
            queryClient.refetchQueries(["normalTasks"]);
            queryClient.refetchQueries(["waitingTasks"]);
        },
        onError: (error) => {
            console.error('Error al crear tarea:', error);
        }
    });

    const handleSubmit = () => {
        taskMutation.mutate({ ...formState, userId });
        handleClosePopup();
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.2 }}
                className="  text-white flex items-center justify-center fixed bg-light-blue w-[55px] h-[55px] rounded-full bottom-10 left-[93.5%] cursor-pointer z-10"
                onClick={handleOpenPopup}
                data-tip="Nueva Tarea"
            >
                <Plus size={38} color='white' />
            </motion.div>

            {isPopupOpen && (
                <div className="animate__animated animate__fadeIn fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <div className="flex flex-col justify-center items-center animate__animated animate__bounceInDown bg-white p-6 rounded-lg w-[32rem] max-w-full text-center">
                        <h2 className="text-2xl flex gap-3 mb-4 font-raleway border-b-[0.1rem] border-light-yellow">
                            Crear una nueva tarea
                            <ClipboardList size={25}  />
                        </h2>

                        <div className="relative mb-4 w-full max-w-md">
                            <Pencil size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe el título"
                                className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("title")(event.target.value)}
                                value={formState.title}
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <Captions size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Escribe una descripción"
                                className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("description")(event.target.value)}
                                value={formState.description}
                            />
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <Star size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <select
                                onChange={event => createFormSetter("priority")(event.target.value)}
                                value={formState.priority}
                                className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-2 pl-10 pr-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option className='text-gray-800 font-raleway'>Selecciona el nivel de prioridad</option>
                                <option value="Alta" className='text-strong-red font-raleway'>Alta</option>
                                <option value="Moderada" className='text-light-yellow font-raleway' >Moderada</option>
                                <option value="Baja" className='text-light-green font-raleway'>Baja</option>
                            </select>
                        </div>

                        <div className="relative mb-4 w-full max-w-md">
                            <CalendarHeart size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                            <input
                                type="date"
                                placeholder="Fecha"
                                className="bg-[#E0E4EE] placeholder-strong-blue text-gray-800 py-2 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={event => createFormSetter("dueDate")(event.target.value)}
                                value={formState.dueDate}
                            />
                        </div>

                        <div className='flex gap-4'>
                            <button
                                onClick={handleSubmit}
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
