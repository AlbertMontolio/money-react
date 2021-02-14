import React, { FunctionComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

import { colors } from '../../../config'

type BarChartProps = {
  data: any
  currentChart?: any
}

export const ChartBar: FunctionComponent<BarChartProps> = ({
  data,
  currentChart='solls-habens-balances'
}) => {
  console.log('### ChartBar currentChart', currentChart)
  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {currentChart === 'solls-habens-balances' && <Bar dataKey="solls" fill={colors.red} />}
        {currentChart === 'solls-habens-balances' && <Bar dataKey="habens" fill={colors.green} />}
        {currentChart === 'solls-habens-balances' && <Bar dataKey="balances" fill={colors.blue} />}
        {currentChart === 'aggSolls' && <Bar dataKey="aggSolls" fill='#ff4747' />}
        {currentChart === 'aggHabens' && <Bar dataKey="aggHabens" fill='#45c149' />}
        {currentChart === 'aggBalances' && <Bar dataKey="aggBalances" fill='#75acff' />}
        
      </BarChart>
    </div>
  )
}
