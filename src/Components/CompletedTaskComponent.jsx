import React from 'react';

const CompletedTaskComponent = () => {
    const gradientBorderStyle = {
        backgroundImage: "linear-gradient(to bottom, #763DF2, #C364FF)",
        width: "0.6rem",
        height: "100%",
    };

    return (
        <div className="relative bg-white shadow-md rounded-tl-[0.6rem] rounded-bl-[0.6rem] rounded-tr-[0.6rem] rounded-br-[0.6rem] w-[23rem] h-[11rem] overflow-hidden flex">
            <div style={gradientBorderStyle} />
            <div className='flex flex-col justify-between h-full pl-6 pr-4 py-4 flex-grow'>
                <div className='flex justify-between items-start mb-2'>
                    <h2 className="text-xl font-bold text-stellar-blue font-raleway truncate pr-2">Yo decido</h2>
                </div>
                <p className="text-stellar-grey font-raleway flex-grow overflow-hidden">Terminar la infografía de yo decido hasta la unidad 8</p>
                <div className="flex items-center justify-between mt-auto">
                    <div className='flex items-center text-[#763DF2] font-bold'>
                        completado
                    </div>
                    <span className="text-stellar-blue">20/12/2024</span>
                </div>
            </div>
        </div>
    );
}

export default CompletedTaskComponent;
