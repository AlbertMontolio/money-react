import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { PropertyProvider, useProperty } from '../../providers/property-provider/PropertyProvider'
import { UrlParamTypes } from '../../types/common'
import { Page } from '../../brewery/page/Page'
import { PurchasePayments } from './purchase-payments/PurchasePayments'
import { AggCashFlow } from './agg-cash-flow/AggCashFlow'
import { FixCosts } from './fix-costs/FixCosts'
import { CashFlow } from './cash-flow/CashFlow'
import { Expenses } from './expenses/Expenses'
import { Chart } from './chart/Chart'

type PropertyWithDataProps = {
  propertyId: any
}

const Title = styled.div`
  font-weight: bold;
  font-size: 20px; 
  margin-bottom: 40px;
`

export const PropertyWithData: FunctionComponent<PropertyWithDataProps> = () => {
  const { property } = useProperty()

  return (
    <Page>
      <Title>
        {property.address} - ({property.id})
      </Title>
      <PurchasePayments />
      <FixCosts />
      <CashFlow />
      <Expenses />
      <AggCashFlow />
    </Page>
  )
}

export const Property = () => {
  const { propertyId } = useParams<UrlParamTypes>()

  return (
    <PropertyProvider propertyId={propertyId}>
      <PropertyWithData propertyId={propertyId} />
    </PropertyProvider>
  )
}
