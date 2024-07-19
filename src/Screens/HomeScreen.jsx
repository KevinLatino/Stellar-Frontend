import React, { useEffect, useState } from 'react';
import Welcome from '../../public/Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';
import CompletedTaskComponent from '../Components/CompletedTaskComponent';

const HomeScreen = () => {
    const [name, setName] = useState({ name: "" });

    useEffect(() => {
        const getName = getUserFromCookie("user").name;
        setName({ name: getName });
    }, []);

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex w-full gap-8">
                    {/* Primer Div */}
                    <div className='w-[51rem] h-[10rem]'>
                        <div className="flex my-1 h-full w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                            <div className=" w-1/2">
                                <div className="flex flex-col text-light-White">
                                    <h1 className="text-3xl font-medium">
                                        <b>¡Bienvenido, {name.name}!</b>
                                    </h1>
                                    <p className="text-xl font-medium">
                                        Ya puedes organizar tus tareas de una mejor manera
                                    </p>
                                </div>
                            </div>
                            <div className="w-[12rem] hidden sm:flex relative">
                                <img
                                    src={Welcome}
                                    alt="Ilustration"
                                    className="absolute left-[78px] bottom-[0%]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-[16rem]'>
                        <div className='w-[24rem] h-[12rem] bg-[#E0E4EE] rounded-3xl flex items-center justify-center'>
                            <div className="text-center">
                                <h2 className="text-2xl font-medium">Aquí va tu nuevo contenido</h2>
                                <p className="text-lg">Puedes agregar lo que necesites en este espacio.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { HomeScreen };
