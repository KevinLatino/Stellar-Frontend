import React from 'react';
import { X, CircleCheckBig } from 'lucide-react';
import BorderGreen from '../../public/Ilustrations/Border-Green.svg';
import BorderYellow from '../../public/Ilustrations/Border-Yellow.svg';
import BorderRed from '../../public/Ilustrations/Border-Red.svg';

const priorityClasses = {
    'espera': 'bg-light-green text-white',
    'normal': 'bg-light-yellow text-white',
    'urgente': 'bg-light-red text-white'
};

const borderImages = {
    'espera': BorderGreen,
    'normal': BorderYellow,
    'urgente': BorderRed
};

const TaskCard = ({ title, description, priority, date, completed }) => {
    const priorityClass = priorityClasses[priority] || 'bg-gray-200 text-gray-800';
    const borderImage = borderImages[priority] || BorderGreen;

    return (
        <div className="relative bg-white shadow-md rounded-tl-[0.6rem] rounded-bl-[0.6rem] rounded-tr-[0.6rem] rounded-br-[0.6rem]  w-[23rem] h-[11rem] overflow-hidden flex">
            <img src={borderImage} alt="Border" className="absolute left-0 top-0 h-full" />
            <div className='flex flex-col justify-between h-full pl-6 pr-4 py-4 flex-grow'>
                <div className='flex justify-between items-start mb-2'>
                    <h2 className="text-xl font-bold text-stellar-blue font-raleway truncate pr-2">{title}</h2>
                </div>
                <p className="text-stellar-grey font-raleway flex-grow overflow-hidden">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className={`${priorityClass} px-3 py-1 rounded-full`}>
                        {priority}
                    </span>
                    <div className='flex items-center text-stellar-grey'>
                        No completado
                        <X color='#565555' size={20} />
                    </div>
                    <span className="text-stellar-blue">{new Date(date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
