import React, { useState } from 'react'
import styled from 'styled-components'
import { ChartBar } from '../../../../components/atoms/chart-bar/ChartBar'

import { 
  MonthsDataProvider, 
  useMonthsData 
} from '../../../../providers/months-data-provider/MonthsDataProvider'

const ChartsMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  overflow: scroll;
`

const ChartWrapper = styled.div`
  padding: 20px 10px;
  background-color: white;
  margin-bottom: 10px;
  overflow: scroll;
`

const ChartButton = styled.div`
  border-radius: 200px;
  border: 1px solid rgb(180,180,180);
  background-color: rgb(230,230,230);
  padding: 5px 10px;
  margin-right: 20px;
  flex-shrink: 0;
`

export const ChartsWithData = () => {
  const {monthsData} = useMonthsData()
  const [currentChart, setCurrentChart] = useState('solls-habens-balances')

  return (
    <div>
      <ChartsMenu>
        <ChartButton onClick={() => setCurrentChart('solls-habens-balances')}>
          soll-haben-balance
        </ChartButton>
        <ChartButton onClick={() => setCurrentChart('aggBalances')}>
          balances-aggregated
        </ChartButton>
        <ChartButton onClick={() => setCurrentChart('aggSolls')}>
          solls-aggregated
        </ChartButton>
        <ChartButton onClick={() => setCurrentChart('aggHabens')}>
          habens-aggregated
        </ChartButton>
      </ChartsMenu>
      <ChartWrapper>
        <ChartBar data={monthsData} currentChart={currentChart} />
      </ChartWrapper>
    </div>
  )
}

export const Charts = ({year}: {year: any}) => {
  return (
    <MonthsDataProvider year={year}>
      <ChartsWithData />
    </MonthsDataProvider>
  )
}
