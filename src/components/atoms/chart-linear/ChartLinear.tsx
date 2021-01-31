import React, { FunctionComponent } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

type ChartProps = {
  data: any
}

export const ChartLinear: FunctionComponent<ChartProps> = ({data}) => {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="aggregated" stroke="#8884d8" activeDot={{ r: 2 }} dot={false} />
      </LineChart>
    </div>
  )
}
