import React, { 
  useEffect,
  useState
} from 'react'
import styled from 'styled-components'

import { urls } from '../../../config'
import { useAuthorize } from '../../../providers/authorize-provider/AuthorizeProvider'

const YearLine = styled.div`
  display: flex;
  align-items: center;
`

const StyledCalendar = styled.div`
  display: flex;
  align-items: flex-start;
`

const Years = styled.div`
  display: flex;
  flex-direction: column;
`

const YearLines = styled.div`

`

type MonthProps = {
  isFull: boolean
}

const Month = styled.div<MonthProps>`
  background-color: ${({isFull}) => isFull === true ? '#6af16a' : 'white'};
  border-radius: 2px;
  margin: 1px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`

const Year = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 3px;
  font-size: 12px;
  margin-bottom: 2px;
`

export const FilesCalendar = ({accountId}: {accountId: any}) => {
  const [filesCalendar, setFilesCalendar] = useState<any>({})

  console.log('filesCalendar', filesCalendar)
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()
  const fetchData = async () => {
    const url = `${urls.productionApi}/accounts_users/${accountId}/calendar`

    try {
      const response = await fetch(url, {
        method: 'get',
        headers: {
          'Content-type': 'application/json',
          'Authorization': authorizeToken
        }
      })
      const responseData = await response.json()
      setFilesCalendar(responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <StyledCalendar>
      <Years>
        {Object.keys(filesCalendar).map((year) => (
          <Year>
            {year}
          </Year>
        ))}
      </Years>
      <YearLines>
        {Object.keys(filesCalendar).map((year: any) => (
          <YearLine>
            {Object.keys(filesCalendar[year]).map((month: any) => (
              <Month isFull={filesCalendar[year][month] === true}>
                {month}
              </Month>
            ))}
          </YearLine>
        ))}
      </YearLines>
    </StyledCalendar>
  )
}
