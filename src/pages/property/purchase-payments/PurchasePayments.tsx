import React from 'react'
import styled from 'styled-components'
import { useProperty } from '../../../providers/property-provider/PropertyProvider'
import { Title } from '../../../brewery/title/Title'
import { Card } from '../../../brewery/card/Card'
import { Collection } from '../Collection'
import { Item } from '../Item'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'

const Date = styled.div`
  width: 90px;
  flex-shrink: 0;
`

const Value = styled.div`
  width: 80px;
  flex-shrink: 0;
`

const Description = styled.div`
  overflow: hidden;
`

export const PurchasePayments = () => {
  const { property } = useProperty()
  return (
    <Card>
      <Title>
        Purchase payments
      </Title>
      <Collection>
        {property.purchasePayments.collection.map((purchasePayment: any) => (
          <Item>
            <Date>
              {purchasePayment.date}
            </Date>
            <Value>
              {purchasePayment.value}€
            </Value>
            <Description>
              {purchasePayment.description}
            </Description>
          </Item>
        ))}
      </Collection>
      <SubTitle marginBottom={0}>
        {`Total: ${property?.purchasePayments?.total}€`}
      </SubTitle>
    </Card>
  )
}
