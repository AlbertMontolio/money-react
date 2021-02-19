import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyledProperty = styled.div`
  background-color: pink;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`

const Address = styled(NavLink)`

`

type PropertyCardProps = {
  property: any
}

export const PropertyCard: FunctionComponent<PropertyCardProps> = ({property}) => {
  console.log('### property', property)
  return (
    <StyledProperty>
      <Address to={`/real-state/properties/${property.id}/tenant-contracts`}>
        {property.address}
      </Address>
    </StyledProperty>
  )
}
