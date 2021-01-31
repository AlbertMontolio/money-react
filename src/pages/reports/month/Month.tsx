import React from 'react'
import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  overflow: scroll;
`

const Transactinons = styled.div`
  margin-top: 20px;
`

const TitleWrapper = styled.div`
  margin-top: 40px;
`

const Menus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MonthsMenu = styled(Menu)`
`

const Arrow = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MonthWrapper = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MonthWithData = () => {
  const {year, month, code} = useParams<UrlParamTypes>()
  const {monthsData} = useMonthsData()
  const {monthTransactions} = useMonthTransactions()

  console.log('### monthTransactions', monthTransactions)

  let numYear = year
  let numMonth = month

  return (
    <Page>
      <SubTitle>
        account: {code}
      </SubTitle>
      <Menus>
        <Menu>
          <Arrow href={`/${code}/reports/years/${+numYear - 1}/months/${month}`}>
            <ArrowBackIosIcon />
          </Arrow>
          <div>
            {year}
          </div>
          <Arrow href={`/${code}/reports/years/${+numYear + 1}/months/${month}`}>
            <ArrowForwardIosIcon />
          </Arrow>
        </Menu>
        <MonthsMenu>
          <Arrow href={`/${code}/reports/years/${numYear}/months/${+numMonth - 1}`}>
            <ArrowBackIosIcon />
          </Arrow>
          <MonthWrapper>
            {month}
          </MonthWrapper>
          <Arrow href={`/${code}/reports/years/${numYear}/months/${+numMonth + 1}`}>
            <ArrowForwardIosIcon />
          </Arrow>
        </MonthsMenu>
      </Menus>
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
