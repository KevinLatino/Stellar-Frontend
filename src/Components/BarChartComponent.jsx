import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {
  getPendingNormalTasks,
  getPendingUrgentgTasks,
  getTotalPending,
  getPendingWaitingTasks, 
  getOverdue
} from '../Api/Task.Api';
import { useQuery } from 'react-query';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

  const urgentsTasksQuery = useQuery({queryKey:["urgentTasks"], queryFn: getPendingUrgentgTasks});
  const normalTasksQuery = useQuery({queryKey: ["normalTasks"], queryFn: getPendingNormalTasks});
  const waitingTasksQuery = useQuery({queryKey: ["waitingTasks"], queryFn: getPendingWaitingTasks});
  const totalPendingQuery = useQuery({queryKey: ["pendingTasks"], queryFn: getTotalPending})

  const urgentsTasks = urgentsTasksQuery.data || 0;
  const normalTasks = normalTasksQuery.data || 0;
  const waitingTasks = waitingTasksQuery.data || 0;
  const totalPending = totalPendingQuery.data || 0

  const data = {
    labels: ['Urgentes', 'normales', 'en espera', 'Totales', 'perdidas'],
    datasets: [
      {
        label: 'Sobre tus Tareas pendientes',
        data: [urgentsTasks, normalTasks, waitingTasks, totalPending, 10],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
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
        y: {
          min: 0,
          max: 100
        }
      }
    }
  };

  return (
    <>
      <div className='w-[32rem] h-[40rem]'>
        <Bar data={data} options={config} />
      </div>
    </>
  )
};

export default BarChart;
