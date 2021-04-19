import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'
import { useAuthorize } from '../authorize-provider/AuthorizeProvider'

const initState = {
  purchasePayments: {
    collection: [],
    total: 0
  },
  fixCosts: {
    collection: [],
    total: 0
  },
  rent: 0,
  cashFlowWithFixCosts: 0,
  expenses: {
    collection: [],
    total: 0
  }
}

const PropertyContext = createContext<any>(initState)

type PropertyProviderProps = {
  propertyId: any
}

export const getAggCashFlowWithFixCosts = ({
  year, 
  cashFlowWithFixCosts
}: {
  year: number,
  cashFlowWithFixCosts: number
}) => year * 12 * cashFlowWithFixCosts

export const PropertyProvider: FunctionComponent<PropertyProviderProps> = ({
  children, 
  propertyId
}) => {
  const [property, setProperty] = useState(initState)
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
