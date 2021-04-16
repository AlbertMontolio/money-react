import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Card } from '../../../brewery/card/Card'
import { Title } from '../../../brewery/title/Title'
import { DiscreteSlider } from '../../../brewery/discrete-slider/DiscreteSlider'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Collection } from '../Collection'
import { Item } from '../Item'

const StyledInfos = styled.div`
  margin-top: 20px;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const AggCashFlow = () => {
  const [year, setYear] = useState(10)

  const { 
    property: {
      rent,
      cashFlowWithFixCosts,
      expenses: {
        total: totalExpenses
      }
    } 
  } = useProperty()

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  const aggCashFlow = year * 12 * cashFlowWithFixCosts
  const monthlyExpenses = totalExpenses / (year * 12)
  const aggRent = year * 12 * rent

  return (
    <Card>
      <Title>
        Agg. cash flow for {year} years
      </Title>
      <DiscreteSlider year={year} setYear={setYear} />
      <Collection>
        <Item>
          rent / month: {rent}€
        </Item>
        <Item>
          agg rent: {aggRent}€
        </Item>
        <Item>
          cash-flow / month: {cashFlowWithFixCosts}€
        </Item>
        <Item>
          expenses / month: {monthlyExpenses}€
        </Item>
        <Item>
          agg. cash flow in {year} years: {formatter.format(aggCashFlow)}
        </Item>
        <Item>
          agg. profit in {year} years: {((aggCashFlow / 130954.5) * 100).toFixed(2)}%
        </Item>
      </Collection>
    </Card>
  )
}
