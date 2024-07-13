import React, { useState } from 'react';
import {
  Home,
  Trophy,
  Telescope,
  UserRound,
  BookOpenText,
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
      icon: <BookOpenText size={22} />,
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
      route: "/sidebar/logout"
    },
    {}
  ];

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  if (user === null) navigate('/login');

  const [selectedMenu, setSelectedMenu] = useState(1);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleMenuClick = (index, route) => {
    if (route === "/sidebar/logout") {
      setShowLogoutPopup(true);
    } else {
      setSelectedMenu(index);
      navigate(route);
    }
  };

  const confirmLogout = () => {
    setShowLogoutPopup(false);
    logout();
    navigate('/login');
  };

  const cancelLogout = () => {
    setShowLogoutPopup(false);
  };

  return (
    <>
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

      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4">¿Seguro que quieres cerrar sesión?</h2>
            <div className="flex items-center justify-center">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Sí
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { NavBar };
