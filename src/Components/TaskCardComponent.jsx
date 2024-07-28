import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useMutation } from 'react-query';
import { updateTask } from '../Api/Task.Api';
import { useQueryClient } from 'react-query';
import { CircleCheckBig, PencilLine } from 'lucide-react'

const priorityGradientStyles = {
    Baja: {
        '--gradient-start': '#3CD058',
        '--gradient-end': '#036615'
    },
    Moderada: {
        '--gradient-start': '#F9B742',
        '--gradient-end': '#CA860E'
    },
    Alta: {
        '--gradient-start': '#FC5A5A',
        '--gradient-end': '#990505'
    }
};

const priorityClasses = {
    Baja: 'text-light-green font-raleway text-l font-bold',
    Moderada: 'text-light-yellow font-raleway text-l font-bold',
    Alta: 'text-light-red font-raleway text-l font-bold',
};

const formatDate = (dateString) => {
    const utcDate = new Date(dateString);
    const localDate = new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCHours(), utcDate.getUTCMinutes(), utcDate.getUTCSeconds());
    const day = String(localDate.getDate()).padStart(2, '0');
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const year = localDate.getFullYear();
    return `${day}/${month}/${year}`;
};

const TaskCard = ({ id, title, description, priority, date, completed }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const priorityClass = priorityClasses[priority] || priorityClasses.default;
    const gradientStyle = priorityGradientStyles[priority] || priorityGradientStyles.Baja;

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const queryClient = useQueryClient();

    const completedMutation = useMutation(
        ({ id, bodyUpdate }) => updateTask(id, bodyUpdate),
        {
            onSuccess: () => {
                queryClient.refetchQueries(["urgentTasks"]);
                queryClient.refetchQueries(["normalTasks"]);
                queryClient.refetchQueries(["waitingTasks"]);
            },
            onError: (error) => {
                console.error('Error al actualizar la tarea:', error);
            }
        }
    );

    const handleCompleted = () => {
        completedMutation.mutate({ id, bodyUpdate: { completed: !completed } });
    };


    return (
        <div>
            <div className="relative bg-white shadow-md rounded-[0.6rem] w-[23.2rem] h-[11rem] overflow-hidden flex" style={gradientStyle}>
                <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: `linear-gradient(to bottom, ${gradientStyle['--gradient-start']}, ${gradientStyle['--gradient-end']})` }} />
                <div className="flex flex-col justify-between h-full pl-6 pr-4 py-4 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold text-stellar-blue font-raleway truncate pr-2">{title}</h2>
                        <div className="relative">
                            <button className="text-stellar-blue" onClick={handleMenuToggle}>
                                <MoreHorizontal size={24} />
                            </button>
                            {menuVisible && (
                                <div className="absolute right-0 w-48 bg-white shadow-md rounded-lg z-10">
                                    <button className="flex gap-1 px-4 py-2 text-stellar-blue hover:bg-gray-200 w-full text-left" onClick={handleCompleted}>
                                        Completado
                                        <CircleCheckBig size={19} color='#48BC5E' />
                                    </button>
                                    <button className="flex gap-1 px-4 py-2 text-stellar-blue hover:bg-gray-200 w-full text-left" onClick={() => setIsEditing(true)}>
                                        Editar
                                        <PencilLine size={20} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="text-stellar-grey font-raleway flex-grow overflow-hidden">{description}</p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className={`px-3 py-1 rounded-full ${priorityClass}`}>
                            {priority}
                        </span>
                        <div className="flex items-center text-stellar-grey">
                            {completed ? 'Completado' : 'No completado'}

                        </div>
                        <span className="text-stellar-blue">{formatDate(date)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
