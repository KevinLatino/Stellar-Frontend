import React, { useState } from 'react';
import {
    Home,
    CalendarHeart,
    Trophy,
    Telescope,
    UserRound,
    FolderHeart
} from 'lucide-react';


const NavBar = () => {

    const menu = [
        {},
        {
            title: "Inicio",
            icon: <Home size={22} />
        },
        {
            title: "Tareas",
            icon: <FolderHeart size={22} />
        },
        {
            title: "Calendario",
            icon: <CalendarHeart size={22} />
        },
        {
            title: "Ranking",
            icon: <Trophy size={22} />
        },
        {
            title: "Descubre",
            icon: <Telescope size={22} />
        },
        {
            title: "Perfil",
            icon: <UserRound size={22} />
        },
        {}
    ];


    const [selectedMenu, setSelectedMenu] = useState(1);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    return (
        <>
            <div className="flex">
                <div className='bg-light-White'>
                    <div className='bg-Blue-Gray pl-8 pt-8 h-screen w-[15rem]'>
                        <h1 className='text-white text-2xl font-semibold pb-14'>🌠 Stellar</h1>
                        {menu.map((menuItem, index) => (

                            <div className={`${selectedMenu == index ? 'bg-Blue-Gray' : 'bg-light-White'}`}>
                                <div
                                    key={index}
                                    onClick={(index > 0) && (index < menu.length - 1) ? () => handleMenuClick(index) : null}
                                    className={`flex bg-Blue-Gray list-none items-center gap-x-8 cursor-pointer font-semibold p-3
                                      ${index === 0 || index === menu.length - 1 ? 'cursor-auto' : 'cursor-pointer'}
                                      ${selectedMenu === index ? 'bg-light-White text-Blue-Gray  rounded-l-full' : 'text-icon-color'}
                                      ${selectedMenu === index + 1 ? 'rounded-br-[2rem]' : ''} 
                                      ${selectedMenu === index - 1 ? 'rounded-tr-[2rem]' : ''}  
                                  `}>
                                    <span className={selectedMenu === index ? 'text-Blue-Gray ' : 'text-icon-color'}>
                                        {menuItem.icon}
                                    </span>
                                    <span>{menuItem.title}</span>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

                <div className='bg-Blue-Gray w-full'>
                    <div className='p-7 rounded-tl-[3rem] rounded-bl-[3rem] bg-light-White w-full h-screen'>
                        <h1 className='text-2xl font-semibold text-Blue-Gray '></h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export { NavBar };
