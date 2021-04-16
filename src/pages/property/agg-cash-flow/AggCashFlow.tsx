import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Card } from '../../../brewery/card/Card'
import { Title } from '../../../brewery/title/Title'
import { DiscreteSlider } from '../../../brewery/discrete-slider/DiscreteSlider'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'

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
  const { property: { cashFlow } } = useProperty()

  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
  })

  const aggCashFlow = year * 12 * cashFlow
  console.log('aggCashFlow', aggCashFlow)

  return (
    <Card>
      <Title>
        Agg. cash flow
      </Title>
      <DiscreteSlider year={year} setYear={setYear} />
      <StyledInfos>
        <Info>
          cash-flow / month: {cashFlow}€
        </Info>
        <Info>
          agg. cash flow in {year} years: {formatter.format(aggCashFlow)}
        </Info>
        <Info>
          agg. profit in {year} years: {((aggCashFlow / 130954.5) * 100).toFixed(2)}%
        </Info>
      </StyledInfos>
    </Card>
  )
}
