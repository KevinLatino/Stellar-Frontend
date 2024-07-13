import React, { useState } from 'react';
import { Trophy, UserRound, KeyRound, Inbox, LayoutPanelTop } from 'lucide-react';
import { motion } from 'framer-motion';
import 'animate.css';

const EditProfile = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [priority, setPriority] = useState('');

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.2 }}
                className=""
                onClick={handleOpenPopup}
            >
                <Trophy size={30} color='white' />
            </motion.button>

            {isPopupOpen && (
                <div className="animate__animated animate__fadeIn fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">

                    <div className="flex flex-col justify-center items-center animate__animated animate__bounceInDown bg-white p-6 rounded-lg w-[32rem] max-w-full text-center">
                        <h1>Tus medallas</h1>
                    </div>
                </div>
            )}
        </>
    );
};

export { EditProfile };
