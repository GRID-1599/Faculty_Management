import React from "react";
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart(props) {
  const rankSummary = props.datas;

  const rankList = [
    "Intructor I",
    "Intructor II",
    "Intructor III",
    "Assistant Professor I",
    "Assistant Professor II",
    "Assistant Professor III",
    "Assistant Professor IV",
    "Assiociate Professor I",
    "Assiociate Professor II",
    "Assiociate Professor III",
    "Assiociate Professor IV",
    "Assiociate Professor V",
    "Professor I",
    "Professor II",
    "Professor III",
    "Professor IV",
    "Professor V",
    "Professor VI",
    "College/University Proffessor",
  ];
  const [rankData, setRankData] = useState({
    labels: rankList,
    datasets: [
      {
        label: "No. of Rank per College",
        data: rankSummary,
        backgroundColor: [
          "#044237",
          "#06b150",
          "#d6b10b",
          "#d1ac5c",
          "#ef5f2a",
          "#e73d2b",
          "#f8595d",
          "#960d27",
          "#460011",
          "#e340af",
          "#ad79c6",
          "#ef74aa",
          "#ef74aa",
          "#ef74aa",
          "#ef74aa",
          "#f44336",
          "#ffeb3b",
          "#ff9800",
          "#fa0020",
        ],
        borderColor: ["#000000"],
        borderWidth: 2,
      },
    ],
  });
  return <Pie data={rankData} />;
}

export default PieChart;
