import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled(NavLink)`
  border-radius: 100px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240,240,240);
  border: 1px solid rgb(200,200,200);
  width: 200px;
`

type ButtonProps = {
  onClick?: any,
  to: any
}

export const StyledLink: FunctionComponent<ButtonProps> = ({ children, onClick, to }) => {
  return (
    <Wrapper onClick={onClick} to={to}>
      {children}
    </Wrapper>
  )
}
