import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Card } from '../../../brewery/card/Card'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { Amount } from '../Amount'

const List = styled.div`
  font-size: 14px;
`

const FixCost = styled.div`
  display: flex;
  margin-top: 5px;
`

const Value = styled.div`
  width: 110px;
`

const Description = styled.div`
`

const Total = styled.div`
  font-weight: bold;
  margin-top: 10px;
`

export const FixCosts = () => {
  const { property: { fixCosts: { collection, total } } } = useProperty()

  return (
    <Card>
      <Title>
        Fix costs
      </Title>
      <Collection>
        {collection.map((fixCost: any) => (
          <Item>
            <Value>
              {fixCost.monthly_value} € / month
            </Value>
            <Value>
              {fixCost.description}
            </Value>
          </Item>
        ))}
      </Collection>
      <SubTitle marginBottom={0}>
        Total: {total} € / month
      </SubTitle>
    </Card>
  )
}
