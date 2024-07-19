import React, { useEffect, useState } from 'react';
import Welcome from '../../public/Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';
import CompletedTaskComponent from '../Components/CompletedTaskComponent';
import TaskCard from '../Components/TaskCardComponent'; // Importa TaskCard

const HomeScreen = () => {
    const [name, setName] = useState({ name: "" });

    useEffect(() => {
        const user = getUserFromCookie("user");
        if (user) {
            setName({ name: user.name });
        }
    }, []);

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex w-full gap-8">
                    <div className='w-[70%] h-[10rem] my-1'>
                        <div className="flex h-full w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                            <div className="w-1/2 p-4">
                                <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                                    <h1 className="text-2xl font-medium text-white">
                                        <b>¡Bienvenido, {name.name}!</b>
                                    </h1>
                                    <p className="text-xl font-medium text-white">
                                        Ya puedes organizar tus tareas de una mejor manera
                                    </p>
                                </div>
                            </div>
                            <div className="w-[12rem] hidden sm:flex relative">
                                <img
                                    src={Welcome}
                                    alt="Ilustration"
                                    className="absolute left-[168px] bottom-[0%]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[30%] my-1'>
                        <div className="flex flex-col gap-5 bg-[#E0E4EE] p-5 rounded-xl">
                            <h2 className="text-2xl font-medium">Tareas para hoy</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { HomeScreen };
