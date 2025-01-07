import React, { useState, useEffect } from 'react';
import ProfileBg from '../../public/People-Ilustrations/Profile.svg';
import { UserRound, LayoutPanelTop } from 'lucide-react';
import { updateUser } from '@Api/User.Api';
import { useMutation } from 'react-query';
import { motion } from 'framer-motion';
import getUserFromCookie from '@Utils/getUserCookies';
import useFormSetters from '../hooks/useFormSetter';

const ProfileScreen = () => {
  const [userData, setUserData] = useState({ name: "", lastName: "", secondLastName: "" });
  const [formState, createFormSetter] = useFormSetters({ name: "", lastName: "", secondLastName: "" });

  const editMutation = useMutation({ mutationFn: updateUser });

  useEffect(() => {
    const user = getUserFromCookie("user");
    if (user) {
      setUserData({ name: user.name, lastName: user.lastName, secondLastName: user.secondLastName });
    }
  }, []);

  return (
    <div className='flex flex-col gap-[3rem] animate__animated animate__fadeInDown'>
      <header className='flex justify-center items-center flex-col gap-y-4'>
        <img
          src={ProfileBg}
          width={1000}
          className="mt-[-50px]"
        />
        <h1 className='font-raleway text-3xl border-b-2 border-light-blue'>
          {userData.name} {userData.lastName} {userData.secondLastName}
        </h1>
      </header>

      <main className='flex justify-center items-center flex-col gap-2'>
        <div className="relative mb-4 w-full max-w-md">
          <UserRound size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-blue" />
          <input
            type="text"
            placeholder="Modifica tu nombre"
            className="bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formState.name}
            onChange={event => createFormSetter("name")(event.target.value)}
          />
        </div>

        <div className="relative mb-4 w-full max-w-md">
          <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-blue" />
          <input
            type="text"
            placeholder="Modifica tu primer apellido"
            className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formState.lastName}
            onChange={event => createFormSetter("lastName")(event.target.value)}
          />
        </div>

        <div className="relative mb-4 w-full max-w-md">
          <LayoutPanelTop size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-light-blue" />
          <input
            type="text"
            placeholder="Modifica tu segundo apellido"
            className=" bg-[#E0E4EE] text-gray-800 placeholder-strong-blue py-3 pl-12 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formState.secondLastName}
            onChange={event => createFormSetter("secondLastName")(event.target.value)}
          />
        </div>

        <div className='flex justify-center items-center gap-5'>
          <motion.button className="bg-light-blue text-white px-4 py-2 rounded-xl"
            whileHover={{ scale: 1.1 }}
            onClick={() => editMutation.mutate(formState)}
          >
            Modificar Perfil
          </motion.button>
          <motion.button className="bg-strong-red text-white px-4 py-2 rounded-xl"
            whileHover={{ scale: 1.1 }}
          >
            Eliminar Perfil
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export { ProfileScreen };
