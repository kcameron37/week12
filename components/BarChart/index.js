import {useState, useEffect} from 'react'
import styles from './BarChart.module.css'

import { Bar} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title, 
    Tooltip, 
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title, 
    Tooltip, 
    Legend
)

export default function BarChart(){
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState ({})

    useEffect(()=>{
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"], 
            datasets: [
                {      
                labels: 'Sales $',
                data: [123400, 12345, 46464, 47474, 48495, 79794, 59595],
                borderColor: 'rgb(53, 163,235)',
                backgroundColor: 'rgb(53, 163,235, 0,4)',
        }
    ]
        })

        setChartOptions({
            plugins:{
                legend:{
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },

            maintainAspectRatio: false,
            responsiveness:true
        })

    }, [])

    return (
        <>
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
        </div>
        </>
    )
}