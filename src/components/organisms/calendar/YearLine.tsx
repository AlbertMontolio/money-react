import React from 'react'
import styled from 'styled-components'
import { Days } from './Days'

const StyledYearLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const Year = styled.div`
  width: 60px;
  text-align: center;
  flex-shrink: 0;
  background-color: rgb(200,200,200);
`

const MonthLine = styled.div`
  display: flex;
  align-items: center;
`

const Month = styled.div`

`

const Months = styled.div`

`

export const YearLine = ({year}: {year: number}) => {
  const months = [
    { january: 31 },
    { february: 28 },
    { march: 31 },
    { april: 30 },
    { may: 31 },
    { june: 30 },
    { july: 31 },
    { august: 31 },
    { september: 30 },
    { october: 31 },
    { november: 30 },
    { december: 31 },
  ]

  const monthDaysTotals = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  return (
    <div>
      <StyledYearLine>
        <MonthLine>
          {monthDaysTotals.map((monthDaysTotal, index) => (
            <Month>
              <Days index={index} monthDaysTotal={monthDaysTotal} />
            </Month>
          ))}
        </MonthLine>
      </StyledYearLine>
    </div>
  )
}
