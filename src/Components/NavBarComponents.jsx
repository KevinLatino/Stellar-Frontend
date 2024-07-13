import React, { useState } from 'react';
import {
  Home,
  CalendarHeart,
  Trophy,
  Telescope,
  UserRound,
  FolderHeart,
  LogOut
} from 'lucide-react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/context';

const NavBar = () => {

  const menu = [
    {},
    {
      title: "Inicio",
      icon: <Home size={22} />,
      route: "/sidebar/dashboard"
    },
    {
      title: "Tareas",
      icon: <FolderHeart size={22} />,
      route: "/sidebar/tasks"
    },
    {
      title: "Ranking",
      icon: <Trophy size={22} />,
      route: "/sidebar/ranking"
    },
    {
      title: "Descubre",
      icon: <Telescope size={22} />,
      route: "/sidebar/discover"
    },
    {
      title: "Perfil",
      icon: <UserRound size={22} />,
      route: "/sidebar/profile"
    },
    {
      title: "Logout",
      icon: <LogOut size={22} />,
      route: "/sidebar/profile"
    },
    {}
  ];

  const { user } = useAuth();

  const navigate = useNavigate();

  if (user === null) navigate('/login')

  const [selectedMenu, setSelectedMenu] = useState(1);

  const handleMenuClick = (index, route) => {
    setSelectedMenu(index);
    navigate(route);
  };

  return (
    <div className="flex h-screen">
      <div className='bg-stellar-white'>
        <div className='bg-stellar-blue pl-8 pt-10 h-full w-[15rem]'>
          <h1 className='text-white text-2xl font-semibold pb-14'>🌠 Stellar</h1>
          {menu.map((menuItem, index) => (
            <div key={index} className={`transition-color ${selectedMenu === index ? 'bg-stellar-blue' : 'bg-stellar-white'}`}>
              <div
                onClick={(index > 0) && (index < menu.length - 1) ? () => handleMenuClick(index, menuItem.route) : null}
                className={`flex bg-stellar-blue list-none items-center gap-x-8 cursor-pointer font-semibold p-3
                  ${index === 0 || index === menu.length - 1 ? 'cursor-auto' : 'cursor-pointer'}
                  ${selectedMenu === index ? 'bg-stellar-white text-stellar-blue rounded-l-full' : 'text-stellar-icon-color'}
                  ${selectedMenu === index + 1 ? 'rounded-br-[2rem]' : ''} 
                  ${selectedMenu === index - 1 ? 'rounded-tr-[2rem]' : ''}  
                `}>
                <span className={selectedMenu === index ? 'text-stellar-blue' : 'text-stellar-icon-color'}>
                  {menuItem.icon}
                </span>
                <span>{menuItem.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-stellar-blue w-full h-full '>
        <div className='p-7 rounded-tl-[3rem] rounded-bl-[3rem] bg-stellar-white w-full h-full overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { NavBar };
