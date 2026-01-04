"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ScriptableContext,
  ChartData,
} from "chart.js";
import Image from "next/image";
import useEducation from "../_zustand/hooks/useEducation";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data: ChartData<"doughnut"> = {
    labels: ["Section"],
    datasets: [
      {
        data: [100], // Single segment = full circle
        backgroundColor: (context: ScriptableContext<"doughnut">) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return undefined;

          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;

          // Create conic gradient (circular gradient)
          const gradient = ctx.createConicGradient(0, centerX, centerY);

          // Add color stops for smooth blend
          gradient.addColorStop(0, "#3D6CEB"); // Blue
          gradient.addColorStop(0.15, "#2AE0DB"); // Cyan
          gradient.addColorStop(0.3, "#05131E"); // Dark
          gradient.addColorStop(0.45, "#176A16"); // Green
          gradient.addColorStop(0.55, "#F0863A"); // Orange
          gradient.addColorStop(0.7, "#B81A1A"); // Red
          gradient.addColorStop(0.85, "#C89961"); // Tan
          gradient.addColorStop(0.92, "#A3227B"); // Purple
          gradient.addColorStop(1, "#3D6CEB"); // Back to blue

          return gradient;
        },
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: "85%",

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disable tooltips since it's decorative
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

  const eduInfo = useEducation();
  const { isEnrolled } = eduInfo;

  const colors = datas.map((d) => d.color);

  const list: { label: string; color: string; percentage: number }[] =
    isEnrolled?.courses.map((item, index) => ({
      label: item.id,
      color: colors[index % colors.length],
      percentage: item.progress,
    })) ?? [];

  console.log("LIST", list);

  return (
    <div className="flex flex-col md:gap-[115px] gap-[50px] relative w-full">
      <div className="md:w-[350px] w-[300px] h-[350px] mx-auto">
        <Doughnut data={data} options={options} />
      </div>

      {!isEnrolled ? (
        <Image
          src="/images/circle.png"
          alt="images-center"
          width={20}
          height={20}
          className="absolute top-[20%] left-[50%]"
        />
      ) : (
        <Image
          src="/images/middle.png"
          alt="images-center"
          width={183}
          height={195}
          className="absolute top-[9%] md:left-[40%] left-[32%]"
        />
      )}
      {!isEnrolled ? (
        <>
          <div className=" w-[57px] h-[2px] rotate-[8.79rad]  bg-[#182633] absolute top-[18%] left-[50%]"></div>
          <div className="bg-[#0D1C28] md:w-[192px] w-[150px] h-[67px] absolute top-[10%]  left-[55%] rounded-[10px] flex md:flex-col flex-row gap-[10px] p-[10px]">
            <h1 className="text-sm font-600 text-[#E2E8FF99]">
              N/A <span className="text-[#C82D2F]">0%</span>
            </h1>
            <p className="text-sm font-400 text-[#E2E8FF99]">
              No available data
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-[#0D1C28] md:w-[240px] w-[227px] h-[147px] absolute top-[10%]  md:left-[55%] left-[12%] rounded-[10px] flex flex-col  gap-[5px] p-[10px]">
            <h1 className="text-sm font-600 text-[#E2E8FF99]">
              Vulnerability Researcher 85%
            </h1>
            <p className="md:text-[12.5px] text-[11px] font-400 text-[#E2E8FF99]">
              hunt for flaws in software, hardware, or systems, often
              discovering zero-days and developing exploits. Dive deep into
              code, binaries, and internals to uncover weaknesses others miss
            </p>
          </div>
        </>
      )}

      {!isEnrolled ? (
        <div className="flex flex-col md:w-auto w-full gap-2 mx-auto">
          {datas.map((item, index) => (
            <div
              key={index}
              className="flex items-center md:gap-3 justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="text-gray-300 md:text-sm text-[12px] w-8">
                  {item.label}
                </div>
                <div
                  className="w-[14px] h-[9px] rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
              </div>
              <div className="text-cyan-400 text-[8px]">{item.percentage}</div>
              <div className="w-[228.8px] border border-[#E2E8FF1A]  rounded-[3px] md:block hidden"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col  md:w-auto w-full gap-2">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2 w-[80%] ">
                <div className="text-gray-300  text-[12px] ">{item.label}</div>

                <div
                  className=" h-[10px] rounded-full"
                  style={{
                    backgroundColor: item.color,
                    width: item.percentage + "%",
                  }}
                  key={index}
                ></div>
              </div>

              <div className="text-cyan-400 text-[8px] w-[10%]">
                {item.percentage}%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoughnutChart;
