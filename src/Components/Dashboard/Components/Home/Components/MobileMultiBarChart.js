import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function MobileMultiBarCharts(props) {
  return (
    <BarChart
      width={350}
      height={300}
      className="mobile-bar"
      data={props.data}
      margin={{
        top: 0,
        right: 0,
        left: 40,
        bottom: -10,
      }}
      barSize={15}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        yAxisId="left"
        angle={-90}
        tickMargin={10}
        orientation="left"
        stroke="#313e5d"
      />
      <YAxis yAxisId="right" orientation="right" stroke="transparent" />
      <YAxis yAxisId="mid" orientation="" stroke="transparent" />
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
