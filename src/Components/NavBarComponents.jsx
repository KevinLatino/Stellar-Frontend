import React, { useState } from 'react';
import {
  Home,
  CalendarHeart,
  Trophy,
  Telescope,
  UserRound,
  FolderHeart
} from 'lucide-react';
import { useNavigate, Outlet } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const menu = [
    {},
    {
      title: "Inicio",
      icon: <Home size={22} />,
      router: "/sidebar/dashboard"
    },
    {
      title: "Tareas",
      icon: <FolderHeart size={22} />,
      router: "/sidebar/tasks"
    },
    {
      title: "Calendario",
      icon: <CalendarHeart size={22} />,
      router: "/sidebar/calendar"
    },
    {
      title: "Ranking",
      icon: <Trophy size={22} />,
      router: "/sidebar/ranking"
    },
    {
      title: "Descubre",
      icon: <Telescope size={22} />,
      router: "/sidebar/discover"
    },
    {
      title: "Perfil",
      icon: <UserRound size={22} />,
      router: "/sidebar/profile"
    },
    {}
  ];

  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuClick = (index, router) => {
    setSelectedMenu(index);
    navigate(router);
  };

  return (
    <div className="flex h-screen">
      <div className='bg-light-White'>
        <div className='bg-[#0b103d] pl-8 pt-8 h-full w-[15rem]'>
          <h1 className='text-white text-2xl font-semibold pb-14'>🌠 Stellar</h1>
          {menu.map((menuItem, index) => (
            <div key={index} className={`${selectedMenu === index ? 'bg-Blue-Gray' : 'bg-light-White'}`}>
              <div
                onClick={(index > 0) && (index < menu.length - 1) ? () => handleMenuClick(index, menuItem.router) : null}
                className={`flex bg-Blue-Gray list-none items-center gap-x-8 cursor-pointer font-semibold p-3
                  ${index === 0 || index === menu.length - 1 ? 'cursor-auto' : 'cursor-pointer'}
                  ${selectedMenu === index ? 'bg-light-White text-Blue-Gray rounded-l-full' : 'text-icon-color'}
                  ${selectedMenu === index + 1 ? 'rounded-br-[2rem]' : ''} 
                  ${selectedMenu === index - 1 ? 'rounded-tr-[2rem]' : ''}  
                `}>
                <span className={selectedMenu === index ? 'text-Blue-Gray' : 'text-icon-color'}>
                  {menuItem.icon}
                </span>
                <span>{menuItem.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-Blue-Gray w-full h-full'>
        <div className='p-7 rounded-tl-[3rem] rounded-bl-[3rem] bg-light-White w-full h-full overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { NavBar };
