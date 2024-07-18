import React from 'react';

const CompletedTaskComponent = () => {
    const gradientBorderStyle = {
        '--gradient-start': '#C364FF',
        '--gradient-end': '#763DF2'
    };

    return (
        <div className="relative bg-white shadow-md rounded-[0.6rem] w-[23rem] h-[11rem] overflow-hidden flex" style={gradientBorderStyle}>
            <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: `linear-gradient(to bottom, ${gradientBorderStyle['--gradient-start']}, ${gradientBorderStyle['--gradient-end']})` }} />
            <div className="flex flex-col justify-between h-full pl-6 pr-4 py-4 flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stellar-blue font-raleway truncate pr-2">Yo decido</h2>
                </div>
                <p className="text-stellar-grey font-raleway flex-grow overflow-hidden">Debo terminar la presentación de yo decido hasta la lección 8</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#763DF2] font-bold">
                        Completado
                    </span>
                    <span className="text-stellar-blue">20/12/2024</span>
                </div>
            </div>
        </div>
    );
}

export default CompletedTaskComponent;
