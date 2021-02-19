import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'

import { Title } from '../../../brewery/title/Title'
import { Page } from '../../../brewery/page/Page'
import { StyledLink } from '../../../brewery/styled-link/StyledLink'
import { urls } from '../../../config'
import { UrlParamTypes } from '../../../types/common'
import { YearDataProvider, useYearData } from '../../../providers/year-data-provider/YearDataProvider'
import { MonthsDataProvider, useMonthsData } from '../../../providers/months-data-provider/MonthsDataProvider'
import { ChartLinear } from '../../../components/atoms/chart-linear/ChartLinear'
import { ChartBar } from '../../../components/atoms/chart-bar/ChartBar'
import { months } from '../../../_common/months'

const ChartWrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  margin-bottom: 10px;
`

const Buttons = styled.div`
  margin-top: 30px;
`

const ButtonWrapper = styled.div`
  margin-bottom: 10px;
`

export const YearWithData = () => {
  const {id, year} = useParams<UrlParamTypes>()
  const {yearData} = useYearData()
  const {monthsData} = useMonthsData()

  return (
    <Page>
      <Title>
        {`Report Year ${year} - ${id}`}
      </Title>
      <ChartWrapper>
        <ChartLinear data={yearData} />
      </ChartWrapper>
      <ChartWrapper>
        <ChartBar data={monthsData} />
      </ChartWrapper>
      <Buttons>
        {months.map((month, index) => (
          <ButtonWrapper>
            <StyledLink to={`/${id}/reports/years/${year}/months/${index + 1}`}>
              {`${month} - ${year}`}
            </StyledLink>
          </ButtonWrapper>
        ))}
      </Buttons>
    </Page>
  )
}

export const Year = () => {
  const {year} = useParams<UrlParamTypes>()

  return (
    <YearDataProvider year={year}>
      <MonthsDataProvider year={year}>
        <YearWithData />
      </MonthsDataProvider>
    </YearDataProvider>
  )
}
