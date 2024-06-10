import React, { useState } from 'react';
import {
  Home,
  CalendarHeart,
  Trophy,
  Telescope,
  UserRound,
  FolderHeart
} from 'lucide-react';

import './index.css';

function App() {

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

  console.log();

  return (
    <>
      <div className="flex">
        <div className='bg-light-white'>
          <div className='bg-dark-purple pl-8 pt-6 h-screen w-[15rem]'>
            <h1 className='text-white text-2xl font-semibold pb-14'>🌠 Stelar</h1>
            {menu.map((menuItem, index) => (

              <div className={`${selectedMenu == index ? 'bg-dark-purple' : 'bg-light-white'}`}>
                <div
                  key={index}
                  onClick={(index > 0) && (index < menu.length - 1) ? () => handleMenuClick(index) : null}
                  className={`flex bg-dark-purple list-none items-center gap-x-8 cursor-pointer font-semibold p-3
                 ${selectedMenu === index ? 'bg-light-white text-dark-purple rounded-l-full' : 'text-icon-color'}
                 ${selectedMenu === index + 1 ? 'rounded-br-[2rem]' : ''} 
                ${selectedMenu === index - 1 ? 'rounded-tr-[2rem]' : ''}  
                 `}
                >
                  <span className={selectedMenu === index ? 'text-dark-purple' : 'text-icon-color'}>
                    {menuItem.icon}
                  </span>
                  <span>{menuItem.title}</span>
                </div>

              </div>
            ))}
          </div>
        </div>


        <div className='bg-dark-purple w-full'>
          <div className='p-7 rounded-tl-[2.7rem] rounded-bl-[2.7rem] bg-light-white w-full h-screen'>
            <h1 className='text-2xl font-semibold'>HomePage</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
