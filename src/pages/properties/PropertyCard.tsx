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

const Info = styled.div`
  margin-top: 5px;
  font-size: 14px;
`

export const PropertyCard: FunctionComponent<PropertyCardProps> = ({property}) => {
  console.log('### property', property)
  const endContractDate = (new Date(property.endContractDate)).toLocaleDateString("en-GB")
  return (
    <StyledProperty>
      <Address to={`/real-state/properties/${property.id}/tenant-contracts`}>
        {property.address}
      </Address>
      <Info>
        {`end contract date: ${endContractDate}`}
      </Info>
      <Info>
        {`rent: ${property.rent} € / month`}
      </Info>
    </StyledProperty>
  )
}
