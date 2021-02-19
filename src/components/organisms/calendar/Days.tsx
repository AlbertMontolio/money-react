import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type StyledGrayProps = {
  isGray: boolean
}

const StyledDays = styled.div<StyledGrayProps>`
  display: flex;
  align-items: center;
  background-color: ${({isGray}) => isGray ? 'rgb(230,230,230)' : 'white'}
`

type DayProps = {
  isMarked: any
}

const Day = styled.div<DayProps>`
  padding: 3px 6px;
  font-size: 14px;
  background-color: ${({isMarked}) => isMarked ? 'green' : 'white' };
`

type DaysProps = {
  monthDaysTotal: any
  month: any
  year: number
  markedPeriods: any
}

export const Days: FunctionComponent<DaysProps> = ({
  monthDaysTotal, 
  month,
  year,
  markedPeriods
}) => {
  const days = [...Array(monthDaysTotal).keys()]

  const getCurrentDate = (day: any) => new Date(year,month,day)

  const isDateWithinPeriods = ({
    periods, 
    currentDate
  }: {
    periods: any,
    currentDate: any
  }) => {
    let isFound = false
    periods.forEach((period: any) => {
      const isWithin = isDateWithinPeriod({
        initDate: period.firstDay,
        endDate: period.lastDay,
        currentDate
      })

      if (isWithin) {
        isFound = true
      }
    })

    return isFound
  }

  const isDateWithinPeriod = ({
    initDate, 
    endDate, 
    currentDate
  }: {
    initDate: any,
    endDate: any,
    currentDate: any
  }) => {
    if (currentDate >= initDate && currentDate <= endDate) {
      return true
    }
  }

  return (
    <StyledDays isGray={month % 2 == 0}>
      {days.map((day) => {
        const currentDate = getCurrentDate(day + 1)
        const isMarked = isDateWithinPeriods({periods: markedPeriods, currentDate})

        return (
          <Day isMarked={isMarked}>
            {day + 1}
          </Day>
        )
      })}
    </StyledDays>
  )
}
