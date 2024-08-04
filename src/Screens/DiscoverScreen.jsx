import React from 'react';
import Discover from '../../public/Ilustrations/Sitting2.png';
import DiscoverCardComponent from '../Components/DiscoverCardComponent';
import 'animate.css';

const DiscoverScreen = () => {

    const cardContent = [
        {
            title: "Dominando el control del Tiempo",
            description: "Dominar el tiempo es el principio para mejorar nuestra eficiencia.",
            route: "/sidebar/time-management"
        },
        {
            title: "Eliminación de distracciones",
            description: "Descubre cómo las distracciones afectan la productividad.",
        },
        {
            title: "Establecer objetivos claros",
            description: "Aprende la importancia de tener objetivos claros para la eficiencia personal.",
        },
        {
            title: "Priorizando tareas ",
            description: "La importancia de priorizar tareas para maximizar la eficiencia.",
        },
        {
            title: "Mejora de toma de decisiones",
            description: " La importancia de tomar decisiones eficientes para aumentar la productividad.",
        },
        {
            title: "Cuidado Personal y Balance",
            description: "La importancia del cuidado personal y el balance en la eficiencia personal.",
        }
    ];

    return (
        <>
            <div className='flex flex-col gap-11 animate__animated animate__fadeInDown'>
                <div className="flex h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="w-1/2 p-4">
                        <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                            <h1 className="text-4xl font-medium text-white">
                                <b>¿Qué quieres aprender hoy?</b>
                            </h1>
                            <p className="text-xl font-medium text-white">
                                Descubre métodos para mejorar la gestión de tu tiempo
                            </p>
                        </div>
                    </div>
                    <div className="w-[11.5rem] hidden sm:flex relative">
                        <img
                            src={Discover}
                            alt="Ilustration"
                            className="absolute left-[340px] bottom-[-70%]"
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export { DiscoverScreen };
