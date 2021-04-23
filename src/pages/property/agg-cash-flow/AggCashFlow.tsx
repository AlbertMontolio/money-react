import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Card } from '../../../brewery/card/Card'
import { Title } from '../../../brewery/title/Title'
import { DiscreteSlider } from '../../../brewery/discrete-slider/DiscreteSlider'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { 
  getAggCashFlowWithFixCosts, 
  getAggExpenses 
} from '../../../providers/property-provider/PropertyProvider'
import { Chart } from '../chart/Chart'

const Group = styled.div`
  margin-bottom: 20px;
`

export const AggCashFlow = () => {
  const [year, setYear] = useState(10)

  const { property } = useProperty()
  const { 
    rent,
    cashFlowWithFixCosts,
    expenses: {
      total: totalExpenses,
      totalDone: totalDoneExpenses
    }
  } = property

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  const aggCashFlowWithFixCosts = getAggCashFlowWithFixCosts({year, cashFlowWithFixCosts})
  const monthlyExpenses = totalDoneExpenses / (year * 12)
  const aggRent = year * 12 * rent
  const monthlyBenefit = cashFlowWithFixCosts - monthlyExpenses
  const aggMonthlyBenefit = monthlyBenefit * 12 * year 

  return (
    <Card>
      <Title>
        Agg. cash flow for {year} years
      </Title>
      <DiscreteSlider year={year} setYear={setYear} />
      <Chart property={property} year={year} />
      <Collection>
        <Group>
          <Item>
            rent: {rent} € / month
          </Item>
          <Item>
            agg rent: {aggRent} €
          </Item>
        </Group>
        <Group>
          <Item>
            cash-flow with costs: {cashFlowWithFixCosts} € / month
          </Item>
          <Item>
            agg. cash flow with fix costs: {formatter.format(aggCashFlowWithFixCosts)}
          </Item>
        </Group>
        <Group>
          <Item>
            total expenses: {totalExpenses} €
          </Item>
          <Item>
            expenses: {monthlyExpenses.toFixed(2)} € / month
          </Item>
          <Item>
            % of cash flow: {((monthlyExpenses / cashFlowWithFixCosts) * 100).toFixed(2)}
          </Item>
        </Group>
        <Group>
          <Item>
            benefit: { monthlyBenefit.toFixed(2) } € / month
          </Item>
          <Item>
            benefit agg: { (monthlyBenefit * 12 * year).toFixed(2) } €
          </Item>
        </Group>
        <Group>
          <Item>
            agg. profit with fix costs: {((aggCashFlowWithFixCosts / 130954.5) * 100).toFixed(2)}%
          </Item>
          <Item>
            agg. profit with all costs: {((aggMonthlyBenefit / 130954.5) * 100).toFixed(2)}%
          </Item>
        </Group>
      </Collection>
    </Card>
  )
}
