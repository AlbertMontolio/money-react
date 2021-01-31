import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { Title } from '../../../brewery/title/Title'
import { Page } from '../../../brewery/page/Page'
import { urls } from '../../../config'
import { UrlParamTypes } from '../../../types/common'
import { YearDataProvider, useYearData } from '../../../providers/year-data-provider/YearDataProvider'
import { ChartLinear } from '../../../components/atoms/chart-linear/ChartLinear'
import { ChartBar } from '../../../components/atoms/chart-bar/ChartBar'

export const YearWithData = () => {
  const {code, year} = useParams<UrlParamTypes>()
  const {yearData} = useYearData()
  const [monthsData, setMonthsData] = useState([])

  const fetchData = async () => {
    console.log('### year', year)
    const url = `${urls.productionApi}/db_acc_transactions/months_data?year=${year}`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json'
        }
      })
      const responseData = await response.json()
      setMonthsData(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log('yearData', yearData)
  console.log('monthsData', monthsData)

  return (
    <Page>
      <Title>
        {`Report Year ${year} - ${code}`}
      </Title>
      <ChartLinear data={yearData} />
      <ChartBar data={monthsData} />
    </Page>
  )
}

export const Year = () => {
  const {year} = useParams<UrlParamTypes>()

  return (
    <YearDataProvider year={year}>
      <YearWithData />
    </YearDataProvider>
  )
}
