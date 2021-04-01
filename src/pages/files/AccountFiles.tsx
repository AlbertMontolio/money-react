import React, { 
  useEffect,
  useState
} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { Title } from '../../brewery/title/Title'
import { urls } from '../../config'
import { useAuthorize } from '../../providers/authorize-provider/AuthorizeProvider'

const StyledFiles = styled.div`
  margin-top: 30px;
`

const File = styled(NavLink)`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  background-color: white;
  display: inline-block;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
`

const Name = styled.div`
  font-size: 12px;
  margin-top: 5px;
`

const Dates = styled.div`
  font-weight: bold;
  font-size: 14px;
`

export const AccountFiles = ({accountId}: {accountId: any}) => {
  const [accountFiles, setAccountFiles] = useState([])
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  const fetchData = async () => {
    const url = `${urls.productionApi}/accounts/${accountId}/account_files`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      setAccountFiles(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <StyledFiles>
      <Title>
        Files
      </Title>
      <>
        {accountFiles.map((file: any) => (
          <File to={`/real-state/files/${file.id}`}>
            <Dates>
              {`${file.first_day} - ${file.last_day}`}
            </Dates>
            <Name>
              {file.name}
            </Name>
          </File>
        ))}
      </>
    </StyledFiles>
  )
}
