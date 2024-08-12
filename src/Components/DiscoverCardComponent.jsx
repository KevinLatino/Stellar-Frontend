import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverCardComponent = ({ title, description, route }) => {
    const gradientBorderStyle = {
        '--gradient-start': '#C364FF',
        '--gradient-end': '#763DF2'
    };

    return (
        <div
            className="relative bg-white shadow-md rounded-[0.6rem] w-[23rem] h-[10rem] overflow-hidden"
            style={gradientBorderStyle}
        >
            <div
                className="absolute left-0 top-0 bottom-0 w-2"
                style={{
                    background: `linear-gradient(to bottom, ${gradientBorderStyle['--gradient-start']}, ${gradientBorderStyle['--gradient-end']})`
                }}
            />
            <div className="flex flex-col justify-between h-full p-4 ml-2.5">
                <div className='flex flex-col gap-[0.1rem]'>
                    <h2 className="text-lg font-bold text-stellar-blue font-raleway">{title}</h2>
                    <p className="text-stellar-grey font-raleway text-l flex-wrap">{description}</p>
                </div>
                <div className="flex justify-between">
                    <h5>Medalla:</h5>
                    <Link to={route} className="text-white text-sm font-raleway bg-[#7A3AFF] rounded-full px-[10px] py-[4px] shadow-lg">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DiscoverCardComponent;
