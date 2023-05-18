import React ,{useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


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
    });

    const [chartOptions,setChartOptions] = useState({});

    useEffect(() =>{
     setChartData({
        labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
        datasets: [
            {
                label : 'Sales $',
                data: [12578,12345,78945,45678,12345,78954,45789],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(53, 162, 235, 0.4)',
            }
        ]
     })

     setChartOptions({
        plugins :{
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Vendas Diárias'
            }
        },
        maintainAspectRatio: false,
        reponsive: true

     })
    },[])

  return (
    
    <>
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar 
            data={chartData} 
            options={chartOptions}/>
    </div>
    </>
    
  )
};

export default BarChart