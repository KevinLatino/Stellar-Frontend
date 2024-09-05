import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  CalendarHeart,
  Telescope,
  UserRound,
  BookOpenText,
  LogOut
} from 'lucide-react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import Alert from '../../public/People-Ilustrations/Bye.png';
import { useAuth } from '@Context/context';
import StellarLogo from '../../public/Stellar-Logos/StellarLogo-Over-StrongBlue.svg';

const NavBar = () => {

  const menu = [
    {},
    { title: "Dashboard", icon: <LayoutDashboard size={22} />, route: "/sidebar/dashboard" },
    { title: "Tasks", icon: <BookOpenText size={22} />, route: "/sidebar/tasks" },
    { title: "Calendar", icon: <CalendarHeart size={22} />, route: "/sidebar/calendar" },
    { title: "Discover", icon: <Telescope size={22} />, route: "/sidebar/discover" },
    { title: "Profile", icon: <UserRound size={22} />, route: "/sidebar/profile" },
    { title: "Logout", icon: <LogOut size={22} />, route: "/sidebar/logout" },
    {}
  ];

  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (user === null) navigate('/login');

  const [selectedMenu, setSelectedMenu] = useState(1);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    const savedMenuIndex = localStorage.getItem("selectedMenuIndex");
    if (savedMenuIndex) {
      setSelectedMenu(parseInt(savedMenuIndex, 10));
    }
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const index = menu.findIndex(item => item.route === currentPath);
    if (index !== -1) {
      setSelectedMenu(index);
    }
  }, [location.pathname]);

  const handleMenuClick = (index, route) => {
    if (route === "/sidebar/logout") {
      setShowLogoutPopup(true);
    } else {
      setSelectedMenu(index);
      localStorage.setItem("selectedMenuIndex", index);
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

  const handleLogoClick = () => {
    const dashboardIndex = menu.findIndex(item => item.route === '/sidebar/dashboard');
    setSelectedMenu(dashboardIndex);
    localStorage.setItem("selectedMenuIndex", dashboardIndex);
    navigate('/sidebar/dashboard');
  };

  return (
    <>
      <header className="flex h-screen">
        <div className="bg-stellar-white">
          <div className='bg-stellar-blue pl-8 pt-10 h-full w-[14.5rem]'>
            <div className='mb-10 mt-2 ml-3'>
              <img 
                src={StellarLogo} 
                width={136} 
                alt="Stellar-logo" 
                className='cursor-pointer' 
                onClick={handleLogoClick} 
              />
            </div>
            <nav>
              {menu.map((menuItem, index) => (
                <ul
                  key={index} 
                  className={`transition-color ${selectedMenu === index ? 'bg-stellar-blue' : 'bg-stellar-white'}`}>
                  <li
                    onClick={(index > 0) && (index < menu.length - 1) ? () => handleMenuClick(index, menuItem.route) : null}
                    className={`flex bg-stellar-blue list-none items-center gap-x-8 font-semibold p-3
                      ${index === 0 || index === menu.length - 1 ? 'cursor-auto' : 'cursor-pointer'}
                      ${selectedMenu === index ? 'bg-stellar-white text-stellar-blue rounded-l-full' : 'text-stellar-icon-color'}
                      ${selectedMenu === index + 1 ? 'rounded-br-[2rem]' : ''} 
                      ${selectedMenu === index - 1 ? 'rounded-tr-[2rem]' : ''}`}>
                    <span className={selectedMenu === index ? 'text-stellar-blue' : 'text-stellar-icon-color'}>
                      {menuItem.icon}
                    </span>
                    <span>{menuItem.title}</span>
                  </li>
                </ul>
              ))}
            </nav>
          </div>
        </div>

        <main className='bg-stellar-blue w-full h-full'>
          <div className='p-7 rounded-tl-[2rem] rounded-bl-[2rem] bg-stellar-white w-full h-full overflow-auto'>
            <Outlet />
          </div>
        </main>
      </header>

      {showLogoutPopup && (
        <div className="animate__animated animate__fadeIn fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__bounceInDown">
            <div className='flex justify-center items-center flex-col gap-3'>
              <img src={Alert} width={200} />
              <h2 className="text-xl mb-4">¿Seguro que quieres cerrar sesión?</h2>
              <div className="flex items-center justify-center">
                <button
                  onClick={confirmLogout}
                  className="bg-strong-red text-white px-4 py-2 rounded-lg mr-2"
                >
                  Sí
                </button>
                <button
                  onClick={cancelLogout}
                  className="bg-light-blue px-4 py-2 text-white rounded-lg"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { NavBar };
