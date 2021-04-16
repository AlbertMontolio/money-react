import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`

export const Item: FunctionComponent = ({
  children
}) => {
  return (
    <StyledItem>
      {children}
    </StyledItem>
  )
}
