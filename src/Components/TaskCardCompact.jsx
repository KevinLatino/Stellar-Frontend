import React, { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { useMutation } from 'react-query';
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
    espera: 'text-light-green font-raleway font-bold',
    normal: 'text-light-yellow font-raleway font-bold',
    urgente: 'text-light-red font-raleway font-bold',
};

const formatDate = (dateString) => {
    const utcDate = new Date(dateString);
    const localDate = new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), utcDate.getUTCHours(), utcDate.getUTCMinutes(), utcDate.getUTCSeconds());
    const day = String(localDate.getDate()).padStart(2, '0');
    const month = String(localDate.getMonth() + 1).padStart(2, '0');
    const year = localDate.getFullYear();
    return `${day}/${month}/${year}`;
};

const TaskCardCompact = ({ id, title, description, priority, date, completed }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const priorityClass = priorityClasses[priority] || priorityClasses.default;
    const gradientStyle = priorityGradientStyles[priority] || priorityGradientStyles.espera;

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    const completedMutation = useMutation({ mutationFn: ({ id, bodyUpdate }) => updateTask(id, bodyUpdate) });

    const handleCompleted = () => {
        completedMutation.mutate({ id, bodyUpdate: { completed: !completed } });
    };

    return (
        <div className="relative bg-white shadow-md rounded-[0.6rem] w-[18rem] h-[8rem] overflow-hidden flex" style={gradientStyle}>
            <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: `linear-gradient(to bottom, ${gradientStyle['--gradient-start']}, ${gradientStyle['--gradient-end']})` }} />
            <div className="flex flex-col justify-between h-full pl-4 pr-3 py-3 flex-grow">
                <div className="flex justify-between items-start mb-1">
                    <h2 className="text-lg font-bold text-strong-blue font-raleway truncate pr-2">{title}</h2>
                    <div className="relative">
                        <button className="text-stellar-blue" onClick={handleMenuToggle}>
                            <MoreHorizontal size={20} />
                        </button>
                        {menuVisible && (
                            <div className="absolute right-0 w-36 bg-white shadow-md rounded-lg z-10">
                                <button className="block px-3 py-1 text-stellar-blue hover:bg-gray-200 w-full text-left"
                                    onClick={handleCompleted}>
                                    Completado
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-stellar-grey font-raleway text-sm flex-grow overflow-hidden">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className={`${priorityClass}`}>
                        {priority}
                    </span>
                    <div className="flex items-center text-stellar-grey text-sm">
                    </div>
                    <span className="text-stellar-blue text-sm">{formatDate(date)}</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCardCompact;
