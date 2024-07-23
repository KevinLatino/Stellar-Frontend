import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
    getJanuaryCompletedTask,
    getFebruaryCompletedTask,
    getMarchCompletedTask,
    getAprilCompletedTask,
    getMayCompletedTask,
    getJuneCompletedTask,
    getJulyCompletedTask,
    getAugustCompletedTask
} from '../Api/Task.Api';
import { useQuery } from 'react-query';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const useMonthlyTasks = () => {
    return {
        januaryCompletedTask: useQuery('januaryCompletedTasks', getJanuaryCompletedTask),
        februaryCompletedTask: useQuery('februaryCompletedTasks', getFebruaryCompletedTask),
        marchCompletedTask: useQuery('marchCompletedTasks', getMarchCompletedTask),
        aprilCompletedTask: useQuery('aprilCompletedTasks', getAprilCompletedTask),
        mayCompletedTask: useQuery('mayCompletedTasks', getMayCompletedTask),
        juneCompletedTask: useQuery('juneCompletedTasks', getJuneCompletedTask),
        julyCompletedTask: useQuery('julyCompletedTasks', getJulyCompletedTask),
        augustCompletedTask: useQuery('augustCompletedTasks', getAugustCompletedTask)
    };
};

const LineChart = () => {
    const chartRef = useRef(null);
    const queries = useMonthlyTasks();

    const januaryCount = queries.januaryCompletedTask.data || 0;
    const februaryCount = queries.februaryCompletedTask.data || 0;
    const marchCount = queries.marchCompletedTask.data || 0;
    const aprilCount = queries.aprilCompletedTask.data || 0;
    const mayCount = queries.mayCompletedTask.data || 0;
    const juneCount = queries.juneCompletedTask.data || 0;
    const julyCount = queries.julyCompletedTask.data || 0;
    const augustCount = queries.augustCompletedTask.data || 0;

    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
        datasets: [{
            label: 'Tareas completadas',
            data: [januaryCount, februaryCount, marchCount, aprilCount, mayCount, juneCount, julyCount, augustCount],
            fill: false,
            borderColor: '#4461f2',
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#0B103D',
                    font: {
                        size: 14,
                        family:  'Raleway, sans-serif'
                    },
                },
            },
            title: {
                display: true,
                color: "#0B103D",
                text: 'Tareas completas en los últimos meses',
                font: {
                    size: 16,
                    family: 'Raleway, sans-serif',
                },
            },
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    autoSkip: true, 
                    maxTicksLimit: 8 
                }
            },
            y: {
                grid: {
                    borderColor: '#ddd', 
                    borderWidth: 1,
                    color: (context) => context.tick.value % 20 === 0 ? '#ddd' : 'transparent', 
                },
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 5,
                    stepSize: 10, 
                }
            }
        }
    };

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            chart.update();
        }
    }, [queries]);

    return (
        <div className='w-[30rem] h-[30rem]'>
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default LineChart;
