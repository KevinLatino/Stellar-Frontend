import React, { useEffect, useState } from 'react';
import Welcome from '../../public/Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';

const HomeScreen = () => {
    const [name, setName] = useState({ name: "" });

    useEffect(() => {
        const getName = getUserFromCookie("user").name;
        setName({ name: getName });
    }, []);

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex my-1 bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¡Bienvenido, {name.name}!</b>
                            </h1>
                            <p className="text-xl font-medium">
                                Ya puedes organizar tus tareas de una mejor manera
                            </p>
                        </div>
                    </div>
                    <div className="w-[14rem] hidden sm:flex relative">
                        <img
                            src={Welcome}
                            alt="Ilustration"
                            className="absolute left-[188px] bottom-[0%]"
                        />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className="flex gap-4">
                        <div className="flex bg-light-red h-40 w-[18rem] mx-auto rounded-xl justify-center items-center text-center">
                            <h2 className='font-raleway text-white'>
                                Tareas urgentes completadas
                            </h2>
                        </div>
                        <div className="bg-[#fbd960] h-40 w-[18rem] mx-auto rounded-md"></div>
                        <div className="bg-light-green h-40 w-[18rem] mx-auto rounded-md"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { HomeScreen };
