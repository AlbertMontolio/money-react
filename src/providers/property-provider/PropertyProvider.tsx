import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'
import { useAuthorize } from '../authorize-provider/AuthorizeProvider'

const PropertyContext = createContext<any>([])

type PropertyProviderProps = {
  propertyId: any
}

export const PropertyProvider: FunctionComponent<PropertyProviderProps> = ({
  children, 
  propertyId
}) => {
  const [property, setProperty] = useState([])
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  const fetchData = async () => {
    const url = `${urls.productionApi}/properties/${propertyId}`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      setProperty(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <PropertyContext.Provider value={property}>
      {children}
    </PropertyContext.Provider>
  )
}

export const useProperty = () => {
  const property = useContext(PropertyContext)

  return { property }
}
