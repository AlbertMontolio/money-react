import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { getAggCashFlowWithFixCosts } from '../../../providers/property-provider/PropertyProvider'

import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts'

type ChartTypes = {
  property: any,
  year: number
}

const years = (year: any) => {
  const years = []
  let i
  // @ts-ignore
  for (i = 1; i <= year; i++) {
    years.push(i)
  }

  return years
}

const getData = (years: any, cashFlowWithFixCosts: any) => {
  const data = [] as any

  years.forEach((year: any) => {
    const obj = {
      'year': year,
      'aggCashFlow': getAggCashFlowWithFixCosts({year: year, cashFlowWithFixCosts: cashFlowWithFixCosts}),
    }

    data.push(obj)
  })

  return data
}

export const Chart: FunctionComponent<ChartTypes> = ({
  property, 
  year
}) => {
  const { cashFlowWithFixCosts } = property
  console.log('### Chart property', property)
  console.log('years', years(year))
  const data = getData(years(year), cashFlowWithFixCosts)

  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="aggCashFlow" fill="#8884d8" />
        <Bar dataKey="aggExpenses" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}
