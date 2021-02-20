import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { YearLine } from './YearLine'

type CalendarProps = {
  initYear: number
  endYear: number
  markedPeriods?: any
}

const StyledGant = styled.div`
  margin-top: 30px;
`

const Row = styled.div`
  display: flex;
`

const YearsCol = styled.div`
  display: flex;
  flex-direction: column;
`

const Year = styled.div`
  height: 24px;
  font-size: 14px;
  width: 40px;
`

const StyledYears = styled.div`
  display: flex;
  flex-direction: column;
`

export const MonthlyCalendar: FunctionComponent<CalendarProps> = ({
  initYear,
  endYear,
  markedPeriods
}) => {
  const years = [];
  for (var i = initYear; i <= endYear; i++) {
    years.push(i);
  }

  const months = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'des']

  return (
    <StyledGant>
      <Row>
        <YearsCol>
          {years.map((year) => (
            <Year>
              {year}
            </Year>
          ))}
        </YearsCol>
        <StyledYears>
          {years.map((year) => <YearLine markedPeriods={markedPeriods} year={year} />)}
        </StyledYears>
      </Row>
    </StyledGant>
  )
}
