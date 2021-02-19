import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { useAuthorize } from '../../providers/authorize-provider/AuthorizeProvider'

import { urls } from '../../config'
import { UrlParamTypes } from '../../types/common'
import { Page } from '../../brewery/page/Page'
import { TenantContractCard } from './TenantContractCard'
import { Calendar } from '../../components/organisms/calendar/Calendar'

const StyledContracts = styled.div``

export const TenantContracts = () => {
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()
  const [tenantContracts, setTenantContracts] = useState([])
  const { propertyId } = useParams<UrlParamTypes>()
  console.log('### id', propertyId)

  const [periods, setPeriods] = useState([])
  const [initYear, setInitYear] = useState(2012)
  const [endYear, setEndYear] = useState(2023)
  console.log('### periods', periods)

  useEffect(() => {
    tenantContracts.forEach((tenantContract) => {
      console.log('### tenantContract', tenantContract)
      const newPeriod = {
        // @ts-ignore
        firstDay: new Date(tenantContract.first_day),
        // @ts-ignore
        lastDay: new Date(tenantContract.last_day)
      }
      // @ts-ignore
      setPeriods([...periods, newPeriod])
    })
  }, [tenantContracts])

  useEffect(() => {
    const initYears: number[] = []
    const endYears: number[] = []
    periods.forEach((period) => {
      // @ts-ignore
      const initYear = period.firstDay.getFullYear()
      // @ts-ignore
      const endYear = period.lastDay.getFullYear()
      initYears.push(initYear)
      endYears.push(endYear)
    })
    // @ts-ignore
    console.log('initYears', initYears)
    // @ts-ignore
    console.log('Math.min(initYears)', Math.min(initYears))
    // @ts-ignore
    setInitYear(Math.min(initYears))
    // @ts-ignore
    setEndYear(Math.max(endYears))
  }, [periods])

  console.log('### initYear', initYear)

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
      console.log('### Properties responseData', responseData)
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
      <div>
        Contracts
      </div>
      <Calendar initYear={initYear} endYear={endYear} />
      <div>
        {tenantContracts.map((tenantContract) => <TenantContractCard tenantContract={tenantContract}/>)}
      </div>
    </Page>
  )
}
