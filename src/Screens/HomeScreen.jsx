import React, { useEffect, useState } from 'react';
import Welcome from '../../public/Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';
import { getTodayTasks, getWeekTasks } from '../Api/Task.Api';
import { useQuery } from 'react-query';
import TaskCardCompact from '../Components/TaskCardCompact';
import SpinnerComponent from '../Components/SpinnerComponent';
import ToggleButton from '../Components/ToggleButtonComponent'; 

const HomeScreen = () => {
    const [view, setView] = useState("today"); 
    const queryTodayTasks = useQuery({ queryKey: ["todayTasks"], queryFn: getTodayTasks });
    const queryWeekTasks = useQuery({ queryKey: ["weekTasks"], queryFn: getWeekTasks });

    const [name, setName] = useState("");

    useEffect(() => {
        const user = getUserFromCookie("user");
        if (user) {
            setName(user.name);
        }
    }, []);

    const handleViewChange = () => {
        setView(view === "today" ? "week" : "today");
    };

    const tasks = view === "today" ? queryTodayTasks.data : queryWeekTasks.data;
    const isLoading = view === "today" ? queryTodayTasks.isFetching : queryWeekTasks.isFetching;
    const title = view === "today" ? "Tareas para hoy" : "Tareas para esta semana";

    if (isLoading) {
        return (
            <div className='flex justify-center items-center h-full'>
                <SpinnerComponent color={"strong-blue"} />
            </div>
        );
    }

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex w-full gap-8">
                    <div className='w-[72%] h-[10rem] my-1'>
                        <div className="flex h-full w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                            <div className="w-1/2 p-4">
                                <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                                    <h1 className="text-2xl font-medium text-white">
                                        <b>¡Bienvenido, {name}!</b>
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
                    <div className='w-[27%] my-1'>
                        <div className="flex flex-col gap-5 bg-[#E0E4EE] p-5 rounded-xl h-[40rem]">
                            <div className='flex justify-between'>
                                <h2 className="text-[1.2rem] font-semibold font-raleway text-strong-blue">{title}</h2>
                                <ToggleButton isOn={view === "week"} handleToggle={handleViewChange} />
                            </div>
                            <div className='flex flex-col-reverse gap-4 justify-center items-center'>
                                {tasks && tasks.map(task => (
                                    <TaskCardCompact
                                        key={task.id}
                                        id={task.id}
                                        title={task.title}
                                        description={task.description}
                                        date={task.dueDate}
                                        completed={task.completed}
                                        priority={task.priority}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { HomeScreen };
