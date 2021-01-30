import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledButton = styled.div`
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
  onClick: () => void
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}
