import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ToolTip,
    Legend,
} from 'chart.js';

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    ToolTip,
    Legend,
)

const BarChart = () => {
  return (
    <div>BarChart</div>
  )
}

export default BarChart