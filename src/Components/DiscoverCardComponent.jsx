import React from 'react';

const DiscoverCardComponent = ({ title, description }) => {
    const gradientBorderStyle = {
        '--gradient-start': '#C364FF',
        '--gradient-end': '#763DF2'
    };

    return (
        <div className="relative bg-white shadow-md rounded-[0.6rem] w-[23rem] h-[10rem] overflow-hidden flex" style={gradientBorderStyle}>
            <div className="absolute left-0 top-0 bottom-0 w-2" style={{ background: `linear-gradient(to bottom, ${gradientBorderStyle['--gradient-start']}, ${gradientBorderStyle['--gradient-end']})` }} />
            <div className="flex flex-col mt-2 ml-4 p-2">
                <div className="flex justify-start items-start mb-1">
                    <h2 className="text-lg font-bold text-stellar-blue font-raleway">{title}</h2>
                </div>
                <p className="text-stellar-grey font-raleway text-l flex-wrap">{description}</p>
            </div>
        </div>
    );
}

export default DiscoverCardComponent;