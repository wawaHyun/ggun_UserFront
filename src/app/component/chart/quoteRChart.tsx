
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels);

export default function QuoteRChart({ props }: {
    props: IKisAskPrice[]
    // {
    //     rt_cd: string,
    //     msg_cd: string,
    //     msg1: string,
    //     output1: IAskPriceOutput1,
    //     output2: IAskPriceOutput2,
    // } 
}) {

    // const labels = Array.from({ length: 10 }, (_, i) => `${i + 1}호가`);
    const labels = '1호가'
    const data: any =
    {
        labels: labels,
        datasets: [
            {
                label: 'KisAskPrice',
                type: 'bar',
                data: '74100',
                backgroundColor: '#f87171',
            },
        ],
    };

    const oprions: any = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                reverse: true,
                min: 0,
                max: 75000,
            },
            y: {
                display: false,
                position: 'right',
            },
        },
        layout: {
            padding: {
                top: 0,
                bottom: 0,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            datalabels: {
                color: '#94a3b8',
                display: true,
                anchor: 'end',
                align: 'start',
                offset: 50,
                formatter: function (value: number) {
                    return value;
                }
            },
        },
    };

    return (
        <Bar data={data} options={oprions} className='w-full' ></Bar>
    );
}