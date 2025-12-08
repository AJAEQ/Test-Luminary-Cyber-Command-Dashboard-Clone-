"use client";
// BarChart.tsx
import React, { useRef, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const chartRef = useRef<any>(null);

  const labels = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "1",
    "2",
    "3",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Study Hours",
        data: [
          2, 3, 2.5, 4, 3.5, 2, 5, 3, 4, 2.5, 3, 4, 2, 3.5, 4, 2, 3, 2.5, 3, 2,
          3, 4, 2.5, 3, 2,
        ],
        backgroundColor: function (context: any) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "rgba(18,104,130,0)"); // transparent bottom
          gradient.addColorStop(1, "rgba(33,185,232,0.8)"); // bright top
          return gradient;
        },
        borderRadius: 4,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#94a3b8", // label color
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "rgba(255,255,255,0.1)",
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChart;
