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

const getExpensesData = (
  expensesData: any, 
  year: any,
  maxYear: any,
  maxExpense: any
) => {
  console.log('year', year) 
  console.log('maxYear', maxYear) 
  console.log('expensesData', expensesData)

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
  expensesData: any
) => {
  const data = [] as any
  const maxYear = expensesData.length
  const maxExpense = expensesData[expensesData.length - 1].expenses
  console.log('### getData expensesData', expensesData[0])
  console.log('### years', years)

  years.forEach((year: any) => {
    const obj = {
      'year': year,
      'aggCashFlow': getAggCashFlowWithFixCosts({year: year, cashFlowWithFixCosts: cashFlowWithFixCosts}),
      'expenses': getExpensesData(expensesData, year, maxYear, maxExpense)
    }
    console.log('obj', obj)

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

  if (expensesData.length === 0 || !expensesData) {
    return null
  }

  const data = getData(
    years(year), 
    cashFlowWithFixCosts,
    aggExpensesData
  )

  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="aggCashFlow" fill="#8884d8" />
        <Bar dataKey="expenses" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}
