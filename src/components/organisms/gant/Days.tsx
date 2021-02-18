import React from 'react'
import styled from 'styled-components'

type StyledGrayProps = {
  isGray: boolean
}

const StyledDays = styled.div<StyledGrayProps>`
  display: flex;
  align-items: center;
  background-color: ${({isGray}) => isGray ? 'rgb(230,230,230)' : 'white'}
`

const Day = styled.div`
  padding: 3px 6px;
  font-size: 14px;
`

export const Days = ({monthDaysTotal, index}: {monthDaysTotal: any, index: any}) => {
  const days = [...Array(monthDaysTotal).keys()]
  console.log('days', days)
  return (
    <StyledDays isGray={index % 2 == 0}>
      {days.map((day) => (
        <Day>
          {day + 1}
        </Day>
      ))}
    </StyledDays>
  )
}
