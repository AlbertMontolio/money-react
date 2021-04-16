import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
`

export const Card: FunctionComponent = ({children}) => {
  return (
    <StyledCard>
      {children}
    </StyledCard>
  )
}
