import React from 'react';

const DiscoverCardComponent = () => {
    return (
        <div className=" w-[22rem] rounded-xl overflow-hidden shadow-lg bg-white">
            <img className="w-full h-[8rem] bg-black" src="" alt="Card image cap" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-raleway">Card Title</div>
                <p className="text-gray-700 text-base font-raleway ">
                    This is a description for the card.
                </p>
            </div>
        </div>
    );
}

export default DiscoverCardComponent;
