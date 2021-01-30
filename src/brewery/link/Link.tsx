import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledLink = styled.div`
  border-radius: 100px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center; 
`

type ButtonProps = {
  onClick: any
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <StyledLink onClick={onClick}>
      {children}
    </StyledLink>
  )
}
