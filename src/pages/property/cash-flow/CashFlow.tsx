import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Card } from '../../../brewery/card/Card'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { Amount } from '../Amount'

const Total = styled.div`
  font-weight: bold;
  margin-top: 10px;
`

export const CashFlow = () => {
  const { 
    property: { 
      fixCosts: { 
        total: totalFixCosts 
      },
      rent,
      cashFlowWithFixCosts
    } 
  } = useProperty()

  return (
    <Card>
      <Title>
        Cash flow
      </Title>
      <Collection>
        <Item>
          rent: {rent} € / month
        </Item>
        <Item>
          fix costs: {totalFixCosts} € / month
        </Item>
      </Collection>
      <SubTitle marginBottom={0}>
        cash flow: {cashFlowWithFixCosts} € / month
      </SubTitle>
    </Card>
  )
}
