import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import {
  getPendingNormalTasks,
  getPendingUrgentgTasks,
  getTotalPending,
  getPendingWaitingTasks, 
  countOverdue
} from '@Api/Task.Api';
import { useQuery } from 'react-query';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {

  const urgentsTasksQuery = useQuery({queryKey:["urgentPendingTasks"], queryFn: getPendingUrgentgTasks});
  const normalTasksQuery = useQuery({queryKey: ["normalPendingTasks"], queryFn: getPendingNormalTasks});
  const waitingTasksQuery = useQuery({queryKey: ["waitingPendingTasks"], queryFn: getPendingWaitingTasks});
  const totalPendingQuery = useQuery({queryKey: ["pendingTasks"], queryFn: getTotalPending});
  const countOverdueQuery = useQuery({queryKey: ["totalPendingTasks"], queryFn: countOverdue})

  const urgentsTasks = urgentsTasksQuery.data || 0;
  const normalTasks = normalTasksQuery.data || 0;
  const waitingTasks = waitingTasksQuery.data || 0;
  const totalPending = totalPendingQuery.data || 0;
  const totalOverdue = countOverdueQuery.data || 0;

  const data = {
    labels: ['Alta', 'Moderada', 'Baja','Totales', 'Perdidas'],
    datasets: [
      {
        label: 'Sobre tus Tareas pendientes',
        data: [urgentsTasks, normalTasks, waitingTasks, totalPending, totalOverdue],
        backgroundColor: '#4461F2',
        borderWidth: 1,
        barThickness: 40, 
        borderRadius: 4, 
      },
    ],
  };

  const config = {
    plugins: {
      title: {
        display: true,
        text: 'Estado de las Tareas Pendientes',
        font: {
          size: 16,
          family: 'Raleway, sans-serif',
          weight: 'bold'
        },
        color: '#333'
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14,
            family: 'Raleway, sans-serif'
          }
        }
      }
    },
    type: 'line',
    data: data,
    options: {
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
      <div className='w-[30rem]'>
        <Bar data={data} options={config} />
      </div>
    </>
  )
};

export default BarChart;
