import React from 'react';

const TaskCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-2">Título del Card</h2>
            <p className="text-gray-700 mb-4">Futura description de las tareas las cuales ayudarán a guiar a los estudiantes.</p>
            <div className="flex items-center">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full mr-2">Alta</span>
                <span className="text-gray-600">27/10/2024</span>
            </div>
        </div>
    );
}

export default TaskCard;
