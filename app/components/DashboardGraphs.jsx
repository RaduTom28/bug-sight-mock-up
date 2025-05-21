import React from "react";
import { Card } from 'primereact/card';
import { Chart } from "primereact/chart";

const pieData = {
  labels: ["Alice", "Bob", "Charlie", "Diana"],
  datasets: [
    {
      data: [400, 300, 200, 100],
      backgroundColor: ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"],
      hoverBackgroundColor: ["#7b68ee", "#66cdaa", "#ffda79", "#ffa366"]
    }
  ]
};

const barData = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Errors",
      backgroundColor: "#8884d8",
      data: [50, 40, 30, 20, 10]
    }
  ]
};

const barOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const DashboardGraphs = () => {
  return (
    <div className="flex justify-content-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card className="rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Developer Contribution by Commits</h2>
            <Chart type="pie" data={pieData} className="w-full max-w-full h-72" />
        </Card>
        <Card className="rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Overall Error Count</h2>
            <Chart type="bar" data={barData} options={barOptions} className="w-full max-w-full h-72" />
        </Card>
      </div>
    </div>
    
  );
};

export default DashboardGraphs;