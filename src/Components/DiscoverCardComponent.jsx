import React from 'react';

const DiscoverCardComponent = ({ title, description, src, bg }) => {
    
    const bgClasses = {
        'light-blue': 'bg-light-blue',
    };

    return (
        <div className="w-[22rem] rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer">
            <div className={`w-full h-[8rem] ${bgClasses[bg]}`}>
                <img className="w-full h-full object-cover" src={src} alt="Card image cap" />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-raleway">{title}</div>
                <p className="text-gray-700 text-base font-raleway">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default DiscoverCardComponent;
