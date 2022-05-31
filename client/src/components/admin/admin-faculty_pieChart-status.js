import React from "react";
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const appointmentStatusSummary = props.datas;

  const appointmentStatusList = [
    "Permanent",
    "Temporary",
    "Coterminous",
    "Contractual",
    "Substitute",
    "Provisional",
  ];
  const [rankData, setRankData] = useState({
    labels: appointmentStatusList,
    datasets: [
      {
        label: "No. of Appointment Status per College",
        data: appointmentStatusSummary,
        backgroundColor: [
          "#044237",
          "#06b150",
          "#d6b10b",
          "#d1ac5c",
          "#ef5f2a",
          "#e73d2b",
        ],
        borderColor: ["#000000"],
        borderWidth: 2,
      },
    ],
  });
  return <Pie data={rankData} />;
}

export default PieChart;
