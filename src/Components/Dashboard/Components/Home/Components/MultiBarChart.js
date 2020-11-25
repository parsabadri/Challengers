import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function BarCharts(props) {
  return (
    <BarChart
      width={700}
      height={400}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={30}
      barGap={10}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#313e5d" />
      <YAxis yAxisId="right" orientation="right" stroke="transparent" />
      <YAxis yAxisId="mid" orientation="" stroke="transparent" />
      <Tooltip />
      <Bar yAxisId="left" dataKey="Sales" fill="#ffec6f" radius={50} />
      <Bar
        yAxisId="right"
        dataKey="Research & Development"
        fill="#ff8bdb"
        radius={50}
      />
      <Bar yAxisId="mid" dataKey="Human Resources" fill="#4df3f4" radius={55} />
    </BarChart>
  );
}
