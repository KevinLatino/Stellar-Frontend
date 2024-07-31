import React from 'react';
import PeoplePlanning from '../../public/Ilustrations/People-Planning.png'
import PeoplePlaying from '../../public/Ilustrations/People-Playing.png'
import PeopleGoal from '../../public/Ilustrations/People-Goal.png'
import PeopleMeditation from '../../public/Ilustrations/People-Meditation.png'
import PeopleNotes from '../../public/Ilustrations/People-Notes.png'

const DiscoverCardComponent = ({ title, description, img, bg }) => {
    
    const bgClasses = {
        'light-blue': 'bg-[#7A3AFF]',
    };

    const images = {
        'PeoplePlanning': PeoplePlanning,
        'PeoplePlaying': PeoplePlaying,
        'PeopleGoal': PeopleGoal,
        'PeopleMeditation': PeopleMeditation,
        'PeopleNotes': PeopleNotes
    }

    return (
        <div className="w-[23rem] h-[17rem] rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer">
            <div className={`w-full h-[8rem] ${bgClasses[bg]}`}>
                <img className="w-[13rem] h-[8rem] object-cover  ml-16" src={images[img]} alt="Card image cap" />
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
