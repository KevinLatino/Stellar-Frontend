// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Urgentes', 'en espera', 'normales', 'Totales', 'perdidas'],
        datasets: [
            {
                label: 'Sobre tus Tareas pendientes',
                data: [12, 19, 3, 5, 2, 3],
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
