import React from 'react'
import styled from 'styled-components'

import { YearLine } from './YearLine'

const StyledGant = styled.div`
`

const YearsCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`

const Year = styled.div`
  font-size: 14px;
  padding: 3px 6px;
  width: 40px;
  margin-bottom: 5px;
`

const Row = styled.div`
  display: flex;
`

const MonthsCol = styled.div`
  overflow: scroll;
`

const Months = styled.div`
  display: flex;
  align-items: center;
`

type MonthProps = {
  width: number
}

const Repetion = styled.div<MonthProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({width}) => `${width}px`};
  flex-shrink: 0;
  padding: 0px 20px;
  box-sizing: border-box;
`

const Month = styled.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 5px;
`

export const Gant = () => {
  const years = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

  const months = [
    {name: 'january', width: 793},
    {name: 'february', width: 708},
    {name: 'march', width: 793},
    {name: 'april', width: 766},
    {name: 'may', width: 793},
    {name: 'june', width: 766},
    {name: 'july', width: 793},
    {name: 'august', width: 793},
    {name: 'september', width: 766},
    {name: 'october', width: 793},
    {name: 'november', width: 766},
    {name: 'december', width: 793}
  ]

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
        <MonthsCol>
          <Months>
            {months.map(({name, width}) => (
              <Repetion width={width}>
                <Month>
                  {name}
                </Month>
                <Month>
                  {name}
                </Month>
                <Month>
                  {name}
                </Month>
              </Repetion>
            ))}
          </Months>
          <>
            {years.map((year) => <YearLine year={year} />)}
          </>
        </MonthsCol>
      </Row>
    </StyledGant>
  )
}
