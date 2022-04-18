import React from 'react'
import "./analytics.css"
import {Link} from 'react-router-dom';
import { allTimeBlogPosts, allTimeSales, monthlyProfit, registeredUsers, yearlyProfit } from '../../dummyData';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function Analytics() {

  const data = [
    { name: 'Retail Customers', value: 542 },
    { name: 'Business Customers', value: 123 },
    { name: 'Enterprise Customers', value: 27 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  return (
    <div className="analytics">
      <div className="productTop">
        <div className="productTopLeft">
          <h2> Customer Groups </h2>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <PieChart>
              <Pie 
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#112D4E"
                dataKey="value"/>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="productTopRight">
          <h2> Registered Users </h2>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={registeredUsers}>
                <XAxis dataKey="name" stroke="#112D4E"/>
                <Line type="monotone" dataKey="Registered" stroke="#112D4E" />
                <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="productBottom">
        <h2> All Time Blog Posts </h2>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <BarChart width={150} height={40} data={allTimeBlogPosts}>
            <XAxis dataKey="name" stroke="#112D4E" />
            <YAxis stroke="#112D4E" />
            <Bar dataKey="Posts" fill="#112D4E" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
