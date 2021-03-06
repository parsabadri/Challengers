import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function BarCharts(props) {
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
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#313e5d" />
      <Tooltip />
      <Bar yAxisId="left" dataKey="people" fill="#ff8bdb" radius={15} />
    </BarChart>
  );
}
