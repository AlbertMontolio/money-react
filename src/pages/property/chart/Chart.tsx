import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { 
  getAggCashFlowWithFixCosts,
  getAggExpenses
} from '../../../providers/property-provider/PropertyProvider'

import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
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

const getAggExpensesData = (
  expensesData: any, 
  year: any,
  maxYear: any,
  maxExpense: any
) => {
  let expenses = 0
  if (year <= maxYear) {
    expenses = expensesData[year - 1].expenses
  } else {
    expenses = maxExpense
  }

  return expenses
}

const getData = (
  years: any, 
  cashFlowWithFixCosts: any,
  aggExpensesData: any
) => {
  const data = [] as any
  const maxYear = aggExpensesData.length
  let maxExpense = 0

  if (aggExpensesData.length > 0) {
    maxExpense = aggExpensesData[aggExpensesData.length - 1].expenses
  }

  years.forEach((year: any) => {
    const aggCashFlowWithFixCosts = getAggCashFlowWithFixCosts({year: year, cashFlowWithFixCosts: cashFlowWithFixCosts})
    const aggExpenses = getAggExpensesData(aggExpensesData, year, maxYear, maxExpense)
    const obj = {
      'year': year,
      'aggCashFlow': aggCashFlowWithFixCosts,
      'aggExpenses': aggExpenses,
      'aggBenefit': aggCashFlowWithFixCosts - aggExpenses
    }

    data.push(obj)
  })

  return data
}

export const Chart: FunctionComponent<ChartTypes> = ({
  property, 
  year
}) => {
  const { 
    cashFlowWithFixCosts, 
    expenses: {
      expensesData,
      aggExpensesData
    }
  } = property

  if (!aggExpensesData) {
    return null
  }

  const data = getData(
    years(year), 
    cashFlowWithFixCosts,
    aggExpensesData
  )

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="aggCashFlow" fill="#a8e3ff" />
          <Bar dataKey="aggExpenses" fill="#ff7e7e" />
          <Bar dataKey="aggBenefit" fill="#24b124" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
