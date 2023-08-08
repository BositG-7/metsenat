import React, { PureComponent } from "react";
import { Box } from "@mantine/core";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Yanvar",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Fevral",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Mart",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Aprel",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Iyun",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Iyul",
    uv: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Avgust",
    uv: 390,
    pv: 2300,
    amt: 2100
  },
  {
    name: "Sentabr",
    uv: 1490,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Oktabr",
    uv: 1490,
    pv: 2300,
    amt: 2100
  },
  {
    name: "Noyabr",
    uv: 2490,
    pv: 1300,
    amt: 2100
  },
  {
    name: "Dekabr",
    uv: 5490,
    pv: 2300,
    amt: 2100
  }
];

export default class Deogrames extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <Box pt={30}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#4C6FFF" dot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#FF92AE" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}
