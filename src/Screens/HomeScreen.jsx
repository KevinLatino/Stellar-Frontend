import React from 'react';
import { useQuery } from 'react-query';
import Welcome from '../../public/Ilustrations/Welcome.png';
import CompletedTaskComponent from '../Components/CompletedTaskComponent';
import SpinnerComponent from '../Components/SpinnerComponent';
import { getCompletedTasks } from '../Api/Task.Api'; // Asegúrate de ajustar la ruta según tu estructura de archivos

const HomeScreen = () => {
    const { data: completedTasks, isLoading, error } = useQuery('completedTasks', getCompletedTasks);

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-full'>
                <SpinnerComponent color={"strong-blue"} />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex my-1 bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¡Bienvenido a Stellar!</b>
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
                <div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-[#C364FF] pb-1">
                            <b>¡Aquí están tus tareas completadas, sigue así!</b>
                        </span>
                    </h1>
                </div>
                <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                    <CompletedTaskComponent />
                    <CompletedTaskComponent />
                    <CompletedTaskComponent />
                    <CompletedTaskComponent />
                    <CompletedTaskComponent />
                    <CompletedTaskComponent />
                </div>
            </div>
        </>
    );
}

export { HomeScreen };
