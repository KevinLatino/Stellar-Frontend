import React from 'react';
import { AddTask } from '../Components/AddTaskComponent';
import Tasks from '../../public/Ilustrations/Task3.png';
import { getNormalTasks, getUrgentTasks, getWaitingTasks } from '../Api/Task.Api';
import { useAuth } from '../Context/context';
import TaskCard from '../Components/TaskCardComponent';
import SpinnerComponent from '../Components/SpinnerComponent';
import { useQuery } from 'react-query';

const TaskScreen = () => {
    const { user } = useAuth();
    const userId = user.userId;

    const urgentTaskQuery = useQuery({ queryKey: ["urgentTasks"], queryFn: () => getUrgentTasks(userId) });
    const normalTaskQuery = useQuery({ queryKey: ["normalTasks"], queryFn: () => getNormalTasks(userId) });
    const waitingTaskQuery = useQuery({ queryKey: ["waitingTasks"], queryFn: () => getWaitingTasks(userId) });

    if (urgentTaskQuery.isFetching || normalTaskQuery.isFetching || waitingTaskQuery.isFetching) {
        return (
            <div className='flex justify-center items-center h-full'>
                <SpinnerComponent color={"strong-blue"} />
            </div>
        );
    }

    return (
        <>
            <div className='animate__animated animate__fadeInDown'>
                <div className='flex flex-col gap-9'>
                    <div className="flex my-2 bg-light-blue rounded-3xl">
                        <div className="my-14 ml-14 w-1/2">
                            <div className="w-full text-light-White">
                                <h1 className="text-4xl font-medium">
                                    <b>¡Crea y visualiza tus Tareas!</b>
                                </h1>
                                <p className="text-xl font-medium">
                                    En este espacio puedes tomar el control de tus deberes
                                </p>
                            </div>
                        </div>
                        <div className="w-[15rem] hidden sm:flex relative">
                            <img
                                src={Tasks}
                                alt="Ilustration"
                                className="absolute left-[188px] bottom-[0%]"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h1 className="text-xl font-medium text-stellar-blue">
                            <span className="inline-block border-b-[0.1rem] border-light-red pb-1">
                                <b>¡Tus tareas urgentes!</b>
                            </span>
                        </h1>
                    </div>
                    <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                        {urgentTaskQuery.data.map(task => (
                            <TaskCard key={task.id} title={task.title} description={task.description} date={task.dueDate} completed={task.completed} priority={task.priority} />
                        ))}
                    </div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>¡Tus tareas siguientes!</b>
                        </span>
                    </h1>
                    <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                        {normalTaskQuery.data.map(task => (
                            <TaskCard key={task.id} title={task.title} description={task.description} date={task.dueDate} completed={task.completed} priority={task.priority} />
                        ))}
                    </div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-green pb-1">
                            <b>¡Tus tareas en espera!</b>
                        </span>
                    </h1>
                    <div className='flex justify-center items-center flex-wrap gap-x-6 gap-y-6'>
                        {waitingTaskQuery.data.map(task => (
                            <TaskCard key={task.id} title={task.title} description={task.description} date={task.dueDate} completed={task.completed} priority={task.priority} />
                        ))}
                    </div>
                </div>
            </div>
            <AddTask />
        </>
    );
}

export { TaskScreen };
