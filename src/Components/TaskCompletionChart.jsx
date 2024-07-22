import React from 'react';
import { useQuery } from 'react-query';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { getNormalTasksCompleted, getUrgentTasksCompleted, getWaitingTasksCompleted } from '../Api/Task.Api';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const TaskCompletionChart = () => {
    const getUrgentQuery = useQuery({ queryKey: ['urgentTasks'], queryFn: getUrgentTasksCompleted });
    const getWaitingQuery = useQuery({ queryKey: ['waitingTasks'], queryFn: getWaitingTasksCompleted });
    const getNormalQuery = useQuery({ queryKey: ['normalTasks'], queryFn: getNormalTasksCompleted });

    if (getUrgentQuery.isLoading || getWaitingQuery.isLoading || getNormalQuery.isLoading) {
        return <div>Loading...</div>;
    }

    if (getUrgentQuery.isError || getWaitingQuery.isError || getNormalQuery.isError) {
        return <div>Error loading data</div>;
    }

    const urgentTasks = getUrgentQuery.data || 0;
    const waitingTasks = getWaitingQuery.data || 0;
    const normalTasks = getNormalQuery.data || 0;

    const data = {
        labels: ['Urgentes', 'En Espera', 'Normales'],
        datasets: [
            {
                data: [urgentTasks, waitingTasks, normalTasks],
                backgroundColor: ['#6059db', '#ff80ef', '#fda597'],
                hoverBackgroundColor: ['#6059db', '#ff80ef', '#fda597'],
                hoverBorderWidth: 1,
                hoverOffset: 10,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg w-[20rem] h-[20rem]">
            <h2 className="font-raleway text-stellar-blue text-lg font-semibold mb-4">Tareas completadas</h2>
            <div className='w-[15rem] flex flex-col justify-center items-center'>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default TaskCompletionChart;
