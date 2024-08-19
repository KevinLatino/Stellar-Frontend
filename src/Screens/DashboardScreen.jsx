import React, { useEffect, useState } from 'react';
import Welcome from '../../public/People-Ilustrations/Welcome.png';
import getUserFromCookie from '@Utils/getUserCookies';
import HomeTasks from '@Components/HomeTaskComponent';
import BarChart from '@Components/BarChartComponent';
import LineChart from '@Components/LineChartComponent';
import { MainSpinner } from '@Components/SpinnerComponent';
import { getWeekTasks } from '@Api/Task.Api';
import { userMedal } from '@Api/UserMedal.Api';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';


const DashboardScreen = () => {
    const weekTasksQuery = useQuery({
        queryKey: ["weekTasks"],
        queryFn: getWeekTasks
    });

    const medalsQuery = useQuery({
        queryKey: ["userMedals"],
        queryFn: userMedal
    });

    const [name, setName] = useState("");

    useEffect(() => {
        const user = getUserFromCookie("user");
        if (user) {
            setName(user.name);
        }
    }, []);

    if (weekTasksQuery.isLoading || medalsQuery.isLoading) {
        return (
            <div className='flex justify-center items-center h-full'>
                <MainSpinner />
            </div>
        );
    }

    if (weekTasksQuery.error) {
        return <div>Error al cargar las tareas o medallas</div>;
    }

    return (
        <div className='animate__animated animate__fadeInDown'>
            <div className="flex w-full gap-8 flex-col">
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
                        <div className='flex flex-wrap gap-y-8 justify-center items-center gap-x-12'>
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
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                                <b>¡Tus medallas!</b>
                            </span>
                        </h1>
                        <div className='flex flex-wrap justify-center gap-x-20 gap-y-12'>
                            {medalsQuery.data.map(medal => (
                                <motion.div 
                                whileHover={{scale: 1.1}}
                                key={medal.title} className="cursor-pointer flex flex-col items-center bg-white rounded-2xl p-4 shadow-md w-52">
                                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                                        <img
                                            src={medal.image}
                                            alt={medal.title}
                                            className="w-16 h-16 object-cover"
                                        />
                                    </div>
                                    <h2 className="text-lg font-raleway font-semibold text-stellar-blue mb-1">{medal.title}</h2>
                                    <p className="text-gray-600 font-raleway text-center">{medal.description}</p>
                                </motion.div>
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
