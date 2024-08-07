import React, { useEffect, useState } from 'react';
import Welcome from '../../public/People-Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';
import HomeTasks from '../Components/HomeTaskComponent';
import BarChart from '../Components/BarChartComponent';
import LineChart from '../Components/LineChartComponent';
import { MainSpinner } from '../Components/SpinnerComponent'
import { getWeekTasks } from '../Api/Task.Api';
import { useQuery } from 'react-query';

const DashboardScreen = () => {
    const weekTasksQuery = useQuery({ queryKey: ["weekTasks"], queryFn: getWeekTasks });

    const [name, setName] = useState("");

    useEffect(() => {
        const user = getUserFromCookie("user");
        if (user) {
            setName(user.name);
        }
    }, []);

    if (weekTasksQuery.isLoading) {
        return (
            <div className='flex justify-center items-center h-full'>
                <MainSpinner />
            </div>
        );
    }

    if (weekTasksQuery.error) {
        return <div>Error al cargar las tareas</div>;
    }

    return (
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
                    <div className='flex flex-col gap-7 mt-5'>
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>¡Tareas para esta semana!</b>
                            </span>
                        </h1>
                        <div className='flex justify-center items-center gap-x-12'>
                            {weekTasksQuery.data.map(task => (
                                <HomeTasks
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    description={task.description}
                                    priority={task.priority}
                                    date={task.dueDate}
                                    completed={task.completed}
                                />
                            ))}
                        </div>
                        <div className='flex flex-col justify-center gap-8'>
                            <h1 className="text-xl font-medium text-stellar-blue">
                                <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                    <b>¡Tus gráficos!</b>
                                </span>
                            </h1>
                            <div className='flex justify-center gap-40'>
                                <BarChart />
                                <LineChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DashboardScreen };
