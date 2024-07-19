import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useMutation, useQueryClient } from 'react-query';
import { updateTask } from '../Api/Task.Api'; 

const priorityGradientStyles = {
    espera: {
        '--gradient-start': '#3CD058',
        '--gradient-end': '#036615'
    },
    normal: {
        '--gradient-start': '#F9B742',
        '--gradient-end': '#CA860E'
    },
    urgente: {
        '--gradient-start': '#FC5A5A',
        '--gradient-end': '#990505'
    }
};

const priorityClasses = {
    espera: 'bg-light-green text-white',
    normal: 'bg-light-yellow text-white',
    urgente: 'bg-light-red text-white',
    default: 'bg-gray-200 text-gray-800'
};

const TaskCard = ({ id, title, description, priority, date, completed }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const queryClient = useQueryClient();

    const mutation = useMutation(
        (updatedTask) => updateTask(id, updatedTask),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        }
    );

    const priorityClass = priorityClasses[priority] || priorityClasses.default;
    const gradientStyle = priorityGradientStyles[priority] || priorityGradientStyles.espera;

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMarkComplete = () => {
        mutation.mutate({ completed: true });
        setMenuVisible(false);
    };

    return (
        <div className="relative bg-white shadow-md rounded-[0.6rem] w-[23rem] h-[11rem] overflow-hidden flex" style={gradientStyle}>
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
                                <button className="block px-4 py-2 text-stellar-blue hover:bg-gray-200 w-full text-left" onClick={handleMarkComplete}>
                                    Completado
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
                    <span className="text-stellar-blue">{new Date(date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
