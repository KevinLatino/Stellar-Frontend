import React from 'react';
import Discover from '../../public/People-Ilustrations/Sitting2.png';
import DiscoverCardComponent from '@Components/DiscoverCardComponent';
import SetGoals from '../../public/Stellar-Medals/SetGoals.png';
import Eisenhower from '../../public/Stellar-Medals/Eisenhower.png';
import Podomoro from '../../public/Stellar-Medals/Podomoro.png';
import Dates from '../../public/Stellar-Medals/Dates.png';
import Environment from '../../public/Stellar-Medals/Environment.png';
import Mindfulness from '../../public/Stellar-Medals/Mindfulness.png';
import 'animate.css';

const DiscoverScreen = () => {

    const cardContent = [
        {
            title: "Establecimiento de Metas Claras",
            description: "Establecer metas claras de manera diaria es fundamental para mantener la motivación.",
            route: "/sidebar/set-goals",
            img: SetGoals
        },
        {
            title: "La matriz de Eisenhower",
            description: "Clasificar las tareas según su urgencia o importancia",
            route: "/sidebar/eisenhower-matrix",
            img: Eisenhower
        },
        {
            title: "Técnica de Pomodoro",
            description: "Trabajar durante intervalos de tiempo concentrado seguidos de breves descansos.",
            route: '/sidebar/podomoro-technique',
            img: Podomoro
        },
        {
            title: "Definir fechas importantes ",
            description: "En un calendario, establece las fechas importantes según su fecha de entrega.",
            route: "/sidebar/important-dates",
            img: Dates
        },
        {
            title: "Ámbiente de planificación",
            description: "Establecer un entorno de plafinicación que nos es vital para motivarnos.",
            route: "/sidebar/planification-environment",
            img: Environment
        },
        {
            title: "Prácticas de Mindfulness",
            description: "Incorporar técnicas de mindfulness para mejorar el enfoque y reducir el estrés.",
            route: "/sidebar/mindfulness",
            img: Mindfulness
        }
    ];

    return (
        <>
            <div className='flex flex-col gap-11 animate__animated animate__fadeInDown'>
                <div className="flex h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-[42rem] p-4">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>¿Qué quieres aprender hoy?</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Descubre métodos para mejorar la gestión de tu tiempo, realiza pruebas y consigue medallas
                            </p>
                        </div>
                    </div>
                    <div className="w-[11.5rem] hidden sm:flex relative">
                        <img
                            src={Discover}
                            alt="Ilustration"
                            className="absolute left-[300px] bottom-[-70%]"
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-grow gap-y-14'>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¡Haz click en la sección de interés!</b>
                        </span>
                    </h1>
                    <div className='flex items-center justify-center gap-y-[3rem] gap-x-[4rem] flex-wrap'>
                        {cardContent.map(content => (
                            <DiscoverCardComponent
                                key={content.title}
                                title={content.title}
                                description={content.description}
                                route={content.route}
                                img={content.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export { DiscoverScreen };
