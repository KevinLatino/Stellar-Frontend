import { Home, BriefcaseBusiness, CalendarHeart, Trophy, Telescope, UserRound } from 'lucide-react';

import './index.css';



function App() {

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
  ]

  return (
    <>
      <div className="flex">
        <div className='bg-dark-purple p-5 h-screen pt-5 w-1/6'>
          <h1 className='text-white text-2xl font-semibold pb-14'>🌠 Stelar</h1>
          {menu.map((menu, index) => (
            <>
            <div key={index} className='flex list-none text-gray-300 text-sm items-center gap-x-2 cursor-pointer p-5'>
              <span>{menu.icon}</span>
              <span>{menu.title}</span>
            </div>
            </>
          ))}
        </div>


        <div className='p-7'><h1 className='text-2xl font-semibold'>HomePage</h1></div>
      </div>
    </>
  )
}

export default App
