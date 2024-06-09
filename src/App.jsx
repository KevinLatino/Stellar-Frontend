import React, { useState } from 'react';
import { Home, BriefcaseBusiness, CalendarHeart, Trophy, Telescope, UserRound } from 'lucide-react';

import './index.css';

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Inicio");

  const menu = [
    {
      title: "Inicio",
      icon: <Home />
    },
    {
      title: "Tareas",
      icon: <BriefcaseBusiness />
    },
    {
      title: "Calendario",
      icon: <CalendarHeart />
    },
    {
      title: "Ranking",
      icon: <Trophy />
    },
    {
      title: "Descubre",
      icon: <Telescope />
    },
    {
      title: "Perfil",
      icon: <UserRound />
    }
  ];

  const handleMenuClick = (title) => {
    setSelectedMenu(title);
  };

  return (
    <>
      <div className="flex">
        <div className='flex flex-col bg-dark-purple pt-5 pl-5 h-screen w-1/6'>
          <h1 className='text-light-white text-2xl font-semibold pb-14'>🌠 Stelar</h1>
          <div className="flex-1">
            {menu.map((menuItem, index) => (
              <div
                key={index}
                onClick={() => handleMenuClick(menuItem.title)}
                className={`flex list-none text-sm items-center gap-x-8 cursor-pointer p-3 rounded-l-full ${selectedMenu === menuItem.title ? 'bg-light-white text-dark-purple' : 'text-light-white'
                  }`}
              >
                <span className={selectedMenu === menuItem.title ? 'text-dark-purple' : 'text-light-white'}>
                  {menuItem.icon}
                </span>
                <span>{menuItem.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='p-7 rounded-l-lg'><h1 className='text-2xl font-semibold'>HomePage</h1></div>
      </div>
    </>
  );
}

export default App;
