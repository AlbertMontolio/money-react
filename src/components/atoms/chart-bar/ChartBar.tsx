import React, { FunctionComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

import { colors } from '../../../config'

type BarChartProps = {
  data: any
}

export const ChartBar: FunctionComponent<BarChartProps> = ({data}) => {
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="solls" fill={colors.red} />
        <Bar dataKey="habens" fill={colors.green} />
        <Bar dataKey="balances" fill={colors.blue} />
      </BarChart>
    </div>
  )
}
