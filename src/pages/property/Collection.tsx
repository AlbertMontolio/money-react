import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledCollection = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
`

export const Collection: FunctionComponent = ({
  children
}) => {
  return (
    <StyledCollection>
      {children}
    </StyledCollection>
  )
}
