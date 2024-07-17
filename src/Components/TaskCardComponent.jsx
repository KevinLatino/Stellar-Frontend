import React from 'react';
import { BadgeCheck } from 'lucide-react';

const priorityClasses = {
    'espera': 'bg-light-green text-white',
    'normal': 'bg-light-yellow text-white',
    'urgente': 'bg-light-red text-white'
};

const TaskCard = ({ title, description, priority, date, completed }) => {
    const priorityClass = priorityClasses[priority] || 'bg-gray-200 text-gray-800';

    return (
        <div className="bg-white shadow-md rounded-lg p-5 w-[23rem] h-[11rem]">
            <div className='flex flex-col gap-1 justify-between h-full'>
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-bold text-stellar-blue font-raleway">{title}</h2>
                    <button className='flex gap-1 text-stellar-grey'>
                        Completar
                         <BadgeCheck color='#565555' />
                    </button>
                </div>
                <p className="text-stellar-grey font-raleway flex-grow">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className={`${priorityClass} px-3 py-1 rounded-full mr-2`}>
                        {priority}
                    </span>
                    <span className="text-stellar-blue">{new Date(date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
