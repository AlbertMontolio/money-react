import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { 
  MonthsDataProvider, 
  useMonthsData 
} from '../../../providers/months-data-provider/MonthsDataProvider'
import { UrlParamTypes } from '../../../types/common'
import { ChartBar } from '../../../components/atoms/chart-bar/ChartBar'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Page } from '../../../brewery/page/Page'

const ChartWrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  margin-bottom: 10px;
`

export const MonthWithData = () => {
  const {monthsData} = useMonthsData()
  const {year, month, code} = useParams<UrlParamTypes>()

  return (
    <Page>
      <SubTitle>
        account: {code}
      </SubTitle>
      <Title>
        {`Month ${month} - ${year}`}
      </Title>
      <ChartWrapper>
        <ChartBar data={monthsData} />
      </ChartWrapper>
      <Title>
        Transactions
      </Title>
    </Page>
  )
}

export const Month = () => {
  const {year} = useParams<UrlParamTypes>()

  return (
    <MonthsDataProvider year={year}>
      <MonthWithData />
    </MonthsDataProvider>
  )
}
