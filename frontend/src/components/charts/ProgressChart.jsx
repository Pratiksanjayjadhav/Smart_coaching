import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

const ProgressChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Fatigue Level",
        data: data.map((d) => d.score),
        backgroundColor: data.map(() => "rgba(54, 162, 235, 0.6)"), // blue bars
        borderColor: data.map(() => "rgba(54, 162, 235, 1)"),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // use container height
    plugins: {
      legend: { 
        display: true,
        labels: {
          font: { size: 14 },
          color: "#333", // inline text color
        },
      },
      title: {
        display: true,
        text: "Workout Progress",
        font: { size: 18, weight: "bold" },
        color: "#111", // inline title color
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 10,
        ticks: {
          color: "#333", // y-axis numbers color
          font: { size: 12 },
        },
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
      },
      x: {
        ticks: {
          color: "#333", // x-axis labels color
          font: { size: 12 },
        },
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ProgressChart;
