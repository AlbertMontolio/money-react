import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { 
  MonthsDataProvider, 
  useMonthsData 
} from '../../../providers/months-data-provider/MonthsDataProvider'
import { 
  MonthTransactionsProvider, 
  useMonthTransactions 
} from '../../../providers/month-transactions-provider/MonthTransactionsProvider'
import { UrlParamTypes } from '../../../types/common'
import { ChartBar } from '../../../components/atoms/chart-bar/ChartBar'
import { TransactionItem } from '../../../components/molecules/transaction-item/TransactionItem'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Page } from '../../../brewery/page/Page'

const ChartWrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  margin-bottom: 10px;
`

const Transactinons = styled.div`
  margin-top: 20px;
`

const TitleWrapper = styled.div`
  margin-top: 40px;
`

export const MonthWithData = () => {
  const {year, month, code} = useParams<UrlParamTypes>()
  const {monthsData} = useMonthsData()
  const {monthTransactions} = useMonthTransactions()

  console.log('### monthTransactions', monthTransactions)

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
      <TitleWrapper>
        <Title>
          Transactions
        </Title>
      </TitleWrapper>
      <Transactinons>
        {monthTransactions.map((transaction: any) => <TransactionItem transaction={transaction} />)}
      </Transactinons>
    </Page>
  )
}

export const Month = () => {
  const {year, month} = useParams<UrlParamTypes>()

  return (
    <MonthsDataProvider year={year}>
      <MonthTransactionsProvider year={year} month={month}>
        <MonthWithData />
      </MonthTransactionsProvider>
    </MonthsDataProvider>
  )
}
