import React, { useEffect, useState } from 'react';
import Welcome from '../../public/Ilustrations/Welcome.png';
import getUserFromCookie from '../Utils/getUserCookies';
import { getTodayTasks, getWeekTasks } from '../Api/Task.Api';
import { useQuery } from 'react-query';
import SpinnerComponent from '../Components/SpinnerComponent';
import BarChar from '../Components/BarChartComponent';
import LineChart from '../Components/LineChartComponent';

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
                            <div className="w-[12rem] hidden sm:flex relative">
                                <img
                                    src={Welcome}
                                    alt="Ilustration"
                                    className="absolute left-[168px] bottom-[0%]"
                                />
                            </div>
                        </div>
                        <div className='mt-[2rem] flex justify-center gap-40'>
                            <BarChar />
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { HomeScreen };
