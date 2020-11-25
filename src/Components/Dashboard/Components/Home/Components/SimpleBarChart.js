import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function BarCharts(props) {
  const Colors = ["#ffff", "#ff8bdb"];
  return (
    <BarChart
      width={600}
      height={300}
      data={props.data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barSize={30}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" angle={5} />
      <YAxis yAxisId="left" orientation="left" stroke="#313e5d" />
      <Tooltip />
      <Bar yAxisId="left" dataKey="value" fill="#4df3f4" radius={15} />
    </BarChart>
  );
}
