import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledPage = styled.div`
  padding: 10px;
  margin: 30px 0px;
  background-color: #F1F3F5;
`

export const Page: FunctionComponent = ({ children }) => {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  )
}
