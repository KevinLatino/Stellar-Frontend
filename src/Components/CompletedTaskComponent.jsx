import React from 'react';

const CompletedTaskComponent = ({id, title, description, dueDate, priority}) => {
    const gradientBorderStyle = {
        '--gradient-start': '#C364FF',
        '--gradient-end': '#763DF2'
    };

    return (
        <div className="relative bg-white shadow-md rounded-[0.6rem] w-[18rem] h-[7rem] overflow-hidden flex" style={gradientBorderStyle}>
            <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: `linear-gradient(to bottom, ${gradientBorderStyle['--gradient-start']}, ${gradientBorderStyle['--gradient-end']})` }} />
            <div className="flex flex-col justify-between h-full pl-4 pr-3 py-3 flex-grow">
                <div className="flex justify-between items-start mb-1">
                    <h2 className="text-lg font-bold text-stellar-blue font-raleway truncate pr-2">{title}</h2>
                </div>
                <p className="text-stellar-grey font-raleway text-sm flex-grow overflow-hidden">{description}</p>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#763DF2] font-bold text-sm">
                        {priority}
                    </span>
                    <span className="text-stellar-blue text-sm">20/12/2024</span>
                </div>
            </div>
        </div>
    );
}

export default CompletedTaskComponent;
