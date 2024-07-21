import React from 'react';

const ToggleButton = ({ isOn, handleToggle }) => {
    return (
        <div 
            onClick={handleToggle} 
            className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
        >
            <div 
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : ''}`}
            ></div>
        </div>
    );
};

export default ToggleButton;
