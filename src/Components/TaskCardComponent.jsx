import React from 'react';
import { BadgeCheck } from 'lucide-react';

const TaskCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <div className='flex justify-between items-center'>
            <h2 className="text-xl font-bold mb-2 text-stellar-blue font-raleway">Título del Card</h2>
            <BadgeCheck color='#48BC5E'/> 
            </div>
            <p className="text-[#565555] mb-4 font-raleway">Futura description de las tareas las cuales ayudarán a guiar a los estudiantes.</p>
            <div className="flex items-center justify-between">
                <span className="bg-light-red text-white px-3 py-1 rounded-full mr-2">Alta</span>
                <span className="text-stellar-blue">27/10/2024</span>
            </div>
        </div>
    );
}

export default TaskCard;
