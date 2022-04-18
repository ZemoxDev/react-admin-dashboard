import React from 'react'
import "./sales.css"
import {Link} from 'react-router-dom';
import { allTimeSales, monthlyProfit, productData, yearlyProfit } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";

export default function Sales() {
  return (
    <div className="sales">
        <div className="productTop">
          <div className="productTopLeft">
            <h2> Yearly Profit </h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={yearlyProfit}>
                  <XAxis dataKey="name" stroke="#112D4E"/>
                  <Line type="monotone" dataKey="Profit" stroke="#112D4E" />
                  <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="productTopRight">
            <h2> Monthly Profit </h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart data={monthlyProfit}>
                  <XAxis dataKey="day" stroke="#112D4E"/>
                  <Line type="monotone" dataKey="Profit" stroke="#112D4E" />
                  <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="productBottom">
          <h2> All Time Sales </h2>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <BarChart width={150} height={40} data={allTimeSales}>
              <XAxis dataKey="name" stroke="#112D4E" />
              <YAxis stroke="#112D4E" />
              <Bar dataKey="Sales" fill="#112D4E" />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
  )
}
