import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAuthorize } from '../../providers/authorize-provider/AuthorizeProvider'

import { PropertyCard } from './PropertyCard'

import { urls } from '../../config'

const StyledPage = styled.div`
  padding: 20px;
`

export const Properties = () => {
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()
  const [properties, setProperties] = useState([])

  const fetchData = async () => {
    const url = `${urls.productionApi}/users/${backendUserId}/properties`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      console.log('### Properties responseData', responseData)
      setProperties(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <StyledPage>
      {properties.map((property) => <PropertyCard property={property} />)}
    </StyledPage>
  )
}
