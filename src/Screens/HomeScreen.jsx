import React, { useEffect, useState } from 'react';
import Welcome from '../../public/Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';

import BarChar from '../Components/BarChartComponent';
import LineChart from '../Components/LineChartComponent';

const HomeScreen = () => {
    
    const [name, setName] = useState("");

    useEffect(() => {
        const user = getUserFromCookie("user");
        if (user) {
            setName(user.name);
        }
    }, []);

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex w-full gap-8">
                    <div className='w-[100%] h-[10rem] my-1'>
                        <div className="flex h-full w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                            <div className="w-1/2 p-4">
                                <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                                    <h1 className="text-4xl font-medium text-white">
                                        <b>¡Bienvenido, {name}!</b>
                                    </h1>
                                    <p className="text-xl font-medium text-white">
                                        Ya puedes organizar tus tareas de una mejor manera
                                    </p>
                                </div>
                            </div>
                            <div className="w-[13rem] hidden sm:flex relative">
                                <img
                                    src={Welcome}
                                    alt="Ilustration"
                                    className="absolute left-[300px] bottom-[0%]"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-32'>
                            <div className='mt-6'>
                                <h1 className="text-xl font-medium text-stellar-blue">
                                    <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                        <b>¡Tareas para esta semana!</b>
                                    </span>
                                </h1>
                            </div>
                            <div className='flex flex-col justify-center gap-8'>
                                <h1 className="text-xl font-medium text-stellar-blue">
                                    <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                        <b>¡Tus gráficos!</b>
                                    </span>
                                </h1>
                                <div className='flex justify-center gap-20 '>
                                    <BarChar />
                                    <LineChart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { HomeScreen };
