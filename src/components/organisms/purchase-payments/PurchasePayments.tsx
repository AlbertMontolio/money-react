import React from 'react'
import styled from 'styled-components'
import { PropertyProvider, useProperty } from '../../../providers/property-provider/PropertyProvider'

const PurchasePayment = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  font-size: 14px;
`

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

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`

const Total = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const PurchasePaymentsWithData = () => {
  const { property } = useProperty()
  console.log('### property', property)
  return (
    <div>
      <Title>
        Purchase payments
      </Title>
      <div>
        {property && property?.purchasePayments?.collection.map((purchasePayment: any) => (
          <PurchasePayment>
            <Date>
              {purchasePayment.date}
            </Date>
            <Value>
              {purchasePayment.value}€
            </Value>
            <Description>
              {purchasePayment.description}
            </Description>
          </PurchasePayment>
        ))}
      </div>
      <Total>
        {`Total: ${property?.purchasePayments?.total}€`}
      </Total>
    </div>
  )
}

export const PurchasePayments = ({propertyId}: {propertyId: string}) => {
  return (
    <PropertyProvider propertyId={propertyId}>
      <PurchasePaymentsWithData />
    </PropertyProvider>
  )
}
