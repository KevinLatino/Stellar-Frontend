import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';


const DiscoverCardComponent = ({ title, description, route, img }) => {

    const gradientBorderStyle = {
        '--gradient-start': '#7A3AFF',
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
                    <div className='flex justify-between items-center'>
                    <h2 className="text-lg font-bold text-stellar-blue font-raleway">{title}</h2>
                    <Link to={route} className="flex items-center text-black text-sm font-raleway ">
                        <ChevronRight size={22}/>
                    </Link>
                    </div>
                    <p className="text-stellar-grey font-raleway text-l flex-wrap">{description}</p>
                </div>
                <div className="flex justify-between">
                    <div className='text-stellar-grey font-raleway flex justify-center items-center gap-4'>
                        <h5>Medalla:</h5>
                        <img src={img} width={35} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverCardComponent;
