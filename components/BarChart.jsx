import React, { useEffect } from 'react'
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as  ChartJS , CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
    );

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
       setChartData({ 
           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
           datasets: [{
            label: 'Sales $',
            data: [2010, 10, 5500, 4020, 7060, 6200, 7400,5265, 1000, 2000, 3000, 4000, 5000],
            borderColor :'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235,0.4'
           }  ]
         })
            setChartOptions({ 
                plugins: {
                    legend: {
                        position: 'top',
                    }, 
                    title: {
                        display: true,
                        text: 'Daily Revenue'
                    }
                },
                maintainAspectRatio: false,
                responsive: true,
         })
        },[] )
  return ( 
    <>
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions} />
    </div>
        </>
  )
}

export default BarChart