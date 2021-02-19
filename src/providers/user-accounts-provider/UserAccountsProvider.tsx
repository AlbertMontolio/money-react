import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'
import { useAuthorize } from '../authorize-provider/AuthorizeProvider'

const UserAccountsContext = createContext<any>([])

export const UserAccountsProvider: FunctionComponent = ({
  children
}) => {
  const [userAccounts, setUserAccounts] = useState([])
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()
  console.log('backendUserId', backendUserId)

  const fetchData = async () => {
    const url = `${urls.productionApi}/users/${backendUserId}/accounts`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: { 
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      console.log('### UserAccountsProvider responseData', responseData)
      setUserAccounts(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <UserAccountsContext.Provider value={userAccounts}>
      {children}
    </UserAccountsContext.Provider>
  )
}

export const useUserAccount = () => {
  const userAccounts = useContext(UserAccountsContext)

  return { userAccounts }
}
