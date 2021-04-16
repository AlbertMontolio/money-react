import React, { useEffect, useState, FunctionComponent } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { useAuthorize } from '../../providers/authorize-provider/AuthorizeProvider'
import { PropertyProvider, useProperty } from '../../providers/property-provider/PropertyProvider'

import { urls } from '../../config'
import { UrlParamTypes } from '../../types/common'
import { Page } from '../../brewery/page/Page'
import { TenantContractCard } from './TenantContractCard'
import { Calendar } from '../../components/organisms/calendar/Calendar'
import { MonthlyCalendar } from '../../components/organisms/monthly-calendar/MonthlyCalendar'
import { Gastos } from './Gastos'

const StyledContracts = styled.div``

type TenantContractsWithDataProps = {
  propertyId: any
}

const Title = styled.div`
  font-weight: bold;
  font-size: 20px; 
  margin-bottom: 40px;
`

export const TenantContractsWithData: FunctionComponent<TenantContractsWithDataProps> = ({propertyId}) => {
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()
  const { property } = useProperty()
  console.log('### property', property)
  const [tenantContracts, setTenantContracts] = useState([])

  const [periods, setPeriods] = useState([])
  const [initYear, setInitYear] = useState(2012)
  const [endYear, setEndYear] = useState(2023)

  useEffect(() => {
    const initYears = tenantContracts.map((tenantContract: any) => {
      return (new Date(tenantContract.first_day).getFullYear())
    })
    const endYears = tenantContracts.map((tenantContract: any) => {
      return (new Date(tenantContract.last_day).getFullYear())
    })
    // @ts-ignore
    setInitYear(Math.min(...initYears))
    // @ts-ignore
    setEndYear(Math.max(...endYears))
  }, [tenantContracts])

  useEffect(() => {
    const newPeriods = tenantContracts.map((tenantContract) => {
      const newPeriod = {
        // @ts-ignore
        firstDay: new Date(tenantContract.first_day),
        // @ts-ignore
        lastDay: new Date(tenantContract.last_day),
      }

      return newPeriod
    }) 
    // @ts-ignore
    setPeriods(newPeriods)
  }, [initYear, endYear])

  const fetchData = async () => {
    const url = `${urls.productionApi}/properties/${propertyId}/tenant_contracts`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      setTenantContracts(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Page>
      <Title>
        {property.address} - ({property.id})
      </Title>
      <div>
        Contracts
      </div>
      {false && (
        <Calendar 
          initYear={initYear} 
          endYear={endYear}
          markedPeriods={periods}
        />
      )}
      <MonthlyCalendar
        initYear={initYear} 
        endYear={endYear}
        markedPeriods={periods} 
      />
      <div>
        {tenantContracts.map((tenantContract) => <TenantContractCard tenantContract={tenantContract}/>)}
      </div>
      <Gastos gastos={property.gastos} />
    </Page>
  )
}

export const TenantContracts = () => {
  const { propertyId } = useParams<UrlParamTypes>()

  return (
    <PropertyProvider propertyId={propertyId}>
      <TenantContractsWithData propertyId={propertyId} />
    </PropertyProvider>
  )
}
