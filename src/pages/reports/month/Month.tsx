import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { 
  MonthTransactionsProvider, 
  useMonthTransactions 
} from '../../../providers/month-transactions-provider/MonthTransactionsProvider'
import { UrlParamTypes } from '../../../types/common'
import { TransactionItem } from '../../../components/molecules/transaction-item/TransactionItem'
import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Page } from '../../../brewery/page/Page'
import { YearMonthMenu } from './year-month-menu/YearMonthMenu'
import { Charts } from './charts/Charts'

const Transactinons = styled.div`
  margin-top: 20px;
`

const TitleWrapper = styled.div`
  margin-top: 40px;
`

export const MonthWithData = () => {
  const {year, month, code} = useParams<UrlParamTypes>()
  const {monthTransactions} = useMonthTransactions()

  let numYear = year
  let numMonth = month

  return (
    <Page>
      <SubTitle>
        account: {code}
      </SubTitle>
      <YearMonthMenu
        code={code}
        numYear={numYear}
        month={month}
        year={year}
        numMonth={numMonth}
      />
      <Title>
        {`Month ${month} - ${year}`}
      </Title>
      <Charts year={year} />
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
    <MonthTransactionsProvider year={year} month={month}>
      <MonthWithData />
    </MonthTransactionsProvider>
  )
}
