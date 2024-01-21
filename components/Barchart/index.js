"use client"
import React from 'react';
import styles from './BarchartModules.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
   
    {
      label: 'Dataset 2',
      data: [5,7,8,13,5,3,2],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Dataset 1',
        data: [7,3,8,4,6,9,6],
        backgroundColor: 'rgba(200, 62, 102, 0.5)',
      },
  ],
};

export function BarChart() {
    return (
        <div className=".barchartcontainer">
             <Bar options={options} data={data} />
        </div>
    )
  }
  
