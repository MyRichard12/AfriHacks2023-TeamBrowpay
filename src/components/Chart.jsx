import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const LineChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(255, 99, 132, 0.6)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');

        const data = {
            labels: ['Total Invoices', 'Pending Invoices', 'Total Products', 'Completed Payments', 'Total Transactions'],
            datasets: [
                {
                    label: 'Monthly Sales',
                    data: [4, 56, 210, 70, 12, 80, 123],
                    borderColor: 'rgba(34, 43, 70, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 0, 0, 1)',
                    pointBorderColor: 'rgba(255, 255, 255, 0.8)',
                    pointBorderWidth: 2,
                    backgroundColor: gradient,
                },
            ],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                    borderRadius: 4,
                    color: 'white',
                    font: {
                        weight: 'bold',
                    },
                    formatter: (value) => `$${value}`,
                },
            },
            scales: {
                x: {
                    type: 'category',
                    grid: {
                        display: false,
                    },
                },
                y: {
                    min: 0
                },
            },
        };

        const lineChart = new Chart(ctx, {
            type: 'line',
            data,
            options,
        });
        return () => {
            lineChart.destroy();
        };
    }, []);

    return (
        <div style={{ background: "white", padding: "1rem", borderRadius: ".5rem", position: 'relative', height: '300px', width: '90%', marginTop: '3rem' }}>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default LineChart;
