import React, { useState } from 'react';
import { Home, BriefcaseBusiness, CalendarHeart, Trophy, Telescope, UserRound } from 'lucide-react';

import './index.css';

function App() {
  const [selectedMenu, setSelectedMenu] = useState("Inicio");

  const menu = [
    {
      title: "Inicio",
      icon: <Home size={20} />
    },
    {
      title: "Tareas",
      icon: <BriefcaseBusiness size={20} />
    },
    {
      title: "Calendario",
      icon: <CalendarHeart size={20} />
    },
    {
      title: "Ranking",
      icon: <Trophy size={20} />
    },
    {
      title: "Descubre",
      icon: <Telescope size={20}/>
    },
    {
      title: "Perfil",
      icon: <UserRound size={20}/>
    }
  ];

  const handleMenuClick = (title) => {
    setSelectedMenu(title);
  };

  return (
    <>
      <div className="flex">
        <div className='bg-dark-purple pl-5 pt-5 h-screen w-1/6'>
          <h1 className='text-white text-2xl font-semibold pb-14'>🌠 Stelar</h1>
          {menu.map((menu, index) => (
            <div
              key={index}
              onClick={() => handleMenuClick(menu.title)}
              className={`flex list-none text-l items-center gap-x-8 cursor-pointer font-semibold p-3 mt-5 rounded-l-full ${selectedMenu === menu.title ? 'bg-light-white text-dark-purple my-2' : 'text-gray-300'
                }`}
            >
              <span className={selectedMenu === menu.title ? 'text-dark-purple' : 'text-light-white'}>
                {menu.icon}
              </span>
              <span>{menu.title}</span>
            </div>
          ))}
        </div>
        <div className='bg-dark-purple w-full'>
          <div className='p-7 rounded-tl-[3rem] rounded-bl-[3rem] bg-light-white w-full h-screen'><h1 className='text-2xl font-semibold'>HomePage</h1></div>
        </div>
      </div>
    </>
  );
}

export default App;
