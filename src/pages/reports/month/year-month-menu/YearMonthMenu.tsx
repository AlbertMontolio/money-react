import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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

type YearMonthMenuProps = {
  code: any
  numYear: any
  month: any
  year: any
  numMonth: any
}

export const YearMonthMenu: FunctionComponent<YearMonthMenuProps> = ({
  code, 
  numYear, 
  month, 
  year,
  numMonth
}) => {
  return (
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
  )
}
