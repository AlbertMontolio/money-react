import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type YearLineProps = {
  year: number
  markedPeriods?: any
}

const StyledYearLine = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`

const MonthLine = styled.div`
  display: flex;
  align-items: center;
`

type MonthProps = {
  isMarked: any
}

const Month = styled.div<MonthProps>`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 14px;
  background-color: ${({isMarked}) => isMarked ? 'green' : '#ffa0a0' };
  display: flex;
  align-items: center;
  justify-content: center;
`

export const YearLine: FunctionComponent<YearLineProps> = ({
  year,
  markedPeriods
}) => {
  const months = [0,1,2,3,4,5,6,7,8,9,10,11]

  const isMonthWithinPeriod = ({
    firstDay,
    lastDay,
    month
  }: {
    firstDay: any,
    lastDay: any,
    month: any
  }) => {
    // ### solve CTE central summer time + 2hours
    const currentDateMonth = new Date(year,month, 2)

    return currentDateMonth >= firstDay && currentDateMonth <= lastDay
  }

  const isMonthWithinPeriods = ({
    markedPeriods,
    month 
  }: {
    markedPeriods: any,
    month: any
  }) => {
    let isFound = false

    markedPeriods.forEach((period: any) => {
      const isWithin = isMonthWithinPeriod({
        firstDay: period.firstDay,
        lastDay: period.lastDay,
        month
      })
      if (isWithin) {
        isFound = true
      }
    })

    return isFound
  }


  return (
    <MonthLine>
      {months.map((month) => {
        const isMarked = isMonthWithinPeriods({markedPeriods, month})
        return (
          <Month isMarked={isMarked}>
            {month + 1}
          </Month>
        )
      })}
    </MonthLine>
  )
}