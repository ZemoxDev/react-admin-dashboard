import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.css"


export default function Chart() {
  const data = [
    {
      name: 'Jan',
      "Active Users": 4000,
    },
    {
      name: 'Feb',
      "Active Users": 3000,
    },
    {
      name: 'Mar',
      "Active Users": 7000,
    },
    {
      name: 'Apr',
      "Active Users": 6000,
    },
    {
      name: 'May',
      "Active Users": 3000,
    },
    {
      name: 'Jun',
      "Active Users": 2000,
    },
    {
      name: 'Jul',
      "Active Users": 1000,
    },
    {
      name: 'Agu',
      "Active Users": 5000,
    },
    {
      name: 'Sep',
      "Active Users": 4000,
    },
    {
      name: 'Oct',
      "Active Users": 6000,
    },
    {
      name: 'Nov',
      "Active Users": 3000,
    },
    {
      name: 'Dec',
      "Active Users": 2000,
    },
  ];

  return (
    <div className="chart">
        <h3 className="chartTitle">Monthly Active Users</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
              <XAxis dataKey="name" stroke="#112D4E"/>
              <Line type="monotone" dataKey="Active Users" stroke="#112D4E" />
              <Tooltip />
          </LineChart>
        </ResponsiveContainer>
    </div>
  )
}