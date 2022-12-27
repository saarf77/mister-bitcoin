import { Component } from "react";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function Chart({ data }) {
  return (
    <div className="chart">
      <Sparklines data={data}>
        
        <SparklinesLine color="blue" />
      </Sparklines>
            
            {/* <h1>1 BTC to USD chart today:</h1>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="USD" stroke="#82ca9d" />
            </LineChart> */}
              </div>
  );
}
