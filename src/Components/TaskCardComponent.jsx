import React from 'react';
import { BadgeCheck } from 'lucide-react';


const TaskCard = ({title, description, priority, date, completed}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-bold text-stellar-blue font-raleway">{title}</h2>
                    <button
                        className='flex gap-1 text-[#29985d]'
                    >
                        {completed}
                        <BadgeCheck color='#48BC5E' />
                    </button>
                </div>
                <p className="text-[#565555] mb-4 font-raleway">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="bg-light-red text-white px-3 py-1 rounded-full mr-2">{priority}</span>
                    <span className="text-stellar-blue">{new Date(date).toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
