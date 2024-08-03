import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useMutation, useQueryClient } from 'react-query';
import { updateTask, deleteTask } from '../Api/Task.Api';
import { CircleCheckBig, Trash2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const priorityGradientStyles = {
    Baja: {
        '--gradient-start': '#56D06D',
        '--gradient-end': '#388F48'
    },
    Moderada: {
        '--gradient-start': '#FFC55D',
        '--gradient-end': '#E19716'
    },
    Alta: {
        '--gradient-start': '#FF7F7F',
        '--gradient-end': '#D20A0A'
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

    const priorityClass = priorityClasses[priority];
    const gradientStyle = priorityGradientStyles[priority] || priorityGradientStyles.Baja;

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const queryClient = useQueryClient();

    const launchConfetti = () => {
        const end = Date.now() + 3 * 1000;
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    const refetchTasks = () => {
        queryClient.refetchQueries(["urgentTasks"]);
        queryClient.refetchQueries(["normalTasks"]);
        queryClient.refetchQueries(["waitingTasks"]);
    };


    const completedMutation = useMutation(
        ({ id, bodyUpdate }) => updateTask(id, bodyUpdate),
        {
            onSuccess: () => {
                refetchTasks();
                launchConfetti();
            },
            onError: (error) => {
                console.error('Error al actualizar la tarea:', error);
            }
        }
    );

    const handleCompleted = () => {
        completedMutation.mutate({ id, bodyUpdate: { completed: !completed } });
    };

    const deleteMutation = useMutation(
        ({ id }) => deleteTask(id),
        {
            onSuccess: () => {
                refetchTasks();
            },
            onError: (error) => {
                console.error('Error al actualizar la tarea:', error);
            }
        }
    );

    const handleDelete = () => {
        deleteMutation.mutate({ id });
    }




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
                                    <button className="flex gap-1 px-4 py-2 text-stellar-blue hover:bg-gray-200 w-full text-left" onClick={handleDelete}>
                                        Eliminar
                                        <Trash2 size={19} color='#EF4545' />
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
