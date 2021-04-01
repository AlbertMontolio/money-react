import React, { 
  useState, 
  useEffect, 
  createContext, 
  useContext,
  FunctionComponent
} from 'react'

import { urls } from '../../config'
import { useAuthorize } from '../authorize-provider/AuthorizeProvider'

const AccountContext = createContext<any>({
  account: {
    id: 0
  }
})

type AccountProviderProps = {
  accountId: any
}

export const AccountProvider: FunctionComponent<AccountProviderProps> = ({
  children, 
  accountId
}) => {
  const [account, setAccount] = useState([])
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  const fetchData = async () => {
    const url = `${urls.productionApi}/accounts/${accountId}`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      setAccount(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => {
  const account = useContext(AccountContext)
  return { account }
}
