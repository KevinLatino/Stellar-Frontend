import React from 'react';
import { AddTask } from '../Components/AddTaskComponent';
import {
    getNormalTasks,
    getUrgentTasks,
    getWaitingTasks
} from '../Api/Task.Api';
import { MainSpinner } from '../Components/SpinnerComponent'
import { useQuery } from 'react-query';
import Tasks from '../../public/Ilustrations/Discover.png';
import TaskCard from '../Components/TaskCardComponent';
const TaskScreen = () => {

    const urgentTaskQuery = useQuery({ queryKey: ["urgentTasks"], queryFn: () => getUrgentTasks() });
    const normalTaskQuery = useQuery({ queryKey: ["normalTasks"], queryFn: () => getNormalTasks() });
    const waitingTaskQuery = useQuery({ queryKey: ["waitingTasks"], queryFn: () => getWaitingTasks() });

    if (urgentTaskQuery.isFetching || normalTaskQuery.isFetching || waitingTaskQuery.isFetching) {
        return (
            <div className='flex justify-center items-center h-full'>
                <MainSpinner />
            </div>
        );
    }

    return (
        <>
            <div className='animate__animated animate__fadeInDown'>
                <div className='flex flex-col gap-9'>
                    <div className="flex p-6 h-full w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                        <div className="w-1/2 h-[7.5rem]">
                            <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                                <h1 className="text-4xl font-medium text-white">
                                    <b>¡Crea y visualiza tus Tareas!</b>
                                </h1>
                                <p className="text-xl font-medium text-white">
                                    En este espacio puedes tomar el control total de tus deberes
                                </p>
                            </div>
                        </div>
                        <div className="w-[18.5rem] hidden sm:flex relative">
                            <img
                                src={Tasks}
                                alt="Ilustration"
                                className="absolute left-[250px] bottom-[-20%]"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-red pb-1">
                                <b>¡Tus tareas con alta urgencia!</b>
                            </span>
                        </h1>
                    </div>
                    <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                        {urgentTaskQuery.data.map(task => (
                            <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} date={task.dueDate} completed={task.completed} priority={task.priority} />
                        ))}
                    </div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¡Tus tareas con urgencia moderada!</b>
                        </span>
                    </h1>
                    <div className='flex justify-center items-end flex-wrap gap-x-6 gap-y-6'>
                        {normalTaskQuery.data.map(task => (
                            <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} date={task.dueDate} completed={task.completed} priority={task.priority} />
                        ))}
                    </div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-green pb-1">
                            <b>¡Tus tareas con baja urgencia!</b>
                        </span>
                    </h1>
                    <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                        {waitingTaskQuery.data.map(task => (
                            <TaskCard key={task.id} id={task.id} title={task.title} description={task.description} date={task.dueDate} completed={task.completed} priority={task.priority} />
                        ))}
                    </div>
                </div>
            </div>
            <AddTask />
        </>
    );
}

export { TaskScreen };
