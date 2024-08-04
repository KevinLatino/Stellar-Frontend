import React from 'react'
import { Undo2  } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BackToDiscover = () => {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="  text-white flex items-center justify-center fixed bg-light-yellow w-[60px] h-[55px] rounded-full bottom-9 left-[93.5%] cursor-pointer z-10"
            >
                <Link to={'/sidebar/discover'}>
                    <Undo2 size={30} />
                </Link>
            </motion.div>
        </>
    )
}

export default BackToDiscover
