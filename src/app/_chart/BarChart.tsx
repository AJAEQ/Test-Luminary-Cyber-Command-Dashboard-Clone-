"use client";
// BarChart.tsx
import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ScriptableContext,
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
  // Use ChartJS type for the ref
  const chartRef = useRef<ChartJS<"bar", number[], string> | null>(null);

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

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: "Study Hours",
        data: [
          2, 3, 2.5, 4, 3.5, 2, 5, 3, 4, 2.5, 3, 4, 2, 3.5, 4, 2, 3, 2.5, 3, 2,
          3, 4, 2.5, 3, 2,
        ],
        // Use ScriptableContext to type the function argument
        backgroundColor: function (
          context: ScriptableContext<"bar">
        ): CanvasGradient | string | undefined {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return undefined; // <-- use undefined instead of null
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
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
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
      y: {
        grid: {
          // Remove the old 'drawBorder' property completely
          color: "rgba(255,255,255,0.1)",
          drawTicks: false, // hide tick marks
          drawOnChartArea: true, // leave the grid lines
        },
        ticks: {
          display: false, // hide tick labels
        },
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default BarChart;
