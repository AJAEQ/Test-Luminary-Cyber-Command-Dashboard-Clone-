"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: [
      [
        "#1CB948CC",
        "#2D47C8",
        "#C32DC8CC",
        "#30FFFFB2",
        "#C82D2F",
        "#9D9D9D",
        "#FF7E05CC",
      ],
    ],
    datasets: [
      {
        data: [30, 50, 20, 60, 90, 80, 60, 30],
        backgroundColor: [
          "#1CB948CC",
          "#2D47C8",
          "#C32DC8CC",
          "#30FFFFB2",
          "#C82D2F",
          "#9D9D9D",
          "#FF7E05CC",
        ],
        borderWidth: 0,
        cutout: "70%", // thickness of ring
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // hide labels
      },
    },
  };

  const datas: { label: string; color: string; percentage: string }[] = [
    { label: "N/A", color: "#A855F7", percentage: "0%" },
    { label: "N/A", color: "#EC4899", percentage: "0%" },
    { label: "N/A", color: "#EF4444", percentage: "0%" },
    { label: "N/A", color: "#10B981", percentage: "0%" },
    { label: "N/A", color: "#3B82F6", percentage: "0%" },
    { label: "N/A", color: "#F59E0B", percentage: "0%" },
    { label: "N/A", color: "#84CC16", percentage: "0%" },
  ];

  return (
    <div className="">
      <Doughnut data={data} options={options} />
      <div>
        <div className=" my-10 p-4 rounded">
          <div className="flex flex-col gap-2">
            {datas.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-gray-300 text-sm w-8">{item.label}</span>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-cyan-400 text-sm">{item.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
