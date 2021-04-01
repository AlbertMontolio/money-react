import React, { 
  useState, 
  useEffect
} from 'react'
import styled from 'styled-components'

import { urls } from '../../config'
import { useAuthorize } from '../../providers/authorize-provider/AuthorizeProvider'

import { useParams } from 'react-router-dom'

import { Page } from '../../brewery/page/Page'
import { UrlParamTypes } from '../../types/common'
import { AccountTransaction } from '../../components/molecules/account-transaction/AccountTransaction'

const StyledTransactions = styled.div`
  width: 100%;
`

export const File = () => {
  const initState = {
    info: {
      name: ''
    },
    accountTransactions: [] 
  }
  const [file, setFile] = useState(initState)
  console.log('### file', file)
  const { id } = useParams<UrlParamTypes>()
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  const fetchData = async () => {
    const url = `${urls.productionApi}/account_files/${id}`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      setFile(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Page>
      <div>
        {file.info.name}
      </div>
      <StyledTransactions>
        {file.accountTransactions.map((transaction) => <AccountTransaction transaction={transaction} />)}
      </StyledTransactions>
    </Page>
  )
}
