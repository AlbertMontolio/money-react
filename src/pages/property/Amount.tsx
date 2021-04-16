import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledAmount = styled.div`
  width: 110px;
`

export const Amount: FunctionComponent = ({
  children
}) => {
  return (
    <StyledAmount>
      {children}
    </StyledAmount>
  )
}
