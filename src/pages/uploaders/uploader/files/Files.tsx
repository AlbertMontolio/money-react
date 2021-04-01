import React, { useState, useEffect, FunctionComponent } from 'react'
import styled from 'styled-components'
import { Title } from '../../../../brewery/title/Title'
import { urls } from '../../../../config'
import { useAuthorize } from '../../../../providers/authorize-provider/AuthorizeProvider'

const StyledFiles = styled.div`
  margin-top: 30px;
`

const File = styled.div`
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
`

const Name = styled.div`
  font-weight: bold;
`

const Dates = styled.div`
  margin-top: 5px;
`

type FilesProps = {
  accountId: any
}

export const Files: FunctionComponent<FilesProps> = ({accountId}) => {
  const [files, setFiles] = useState([])
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  useEffect(() => {
    const fetchFiles = async () => {
      console.log('### submitForm')
      const url = `${urls.productionApi}/accounts/${accountId}/user_files`
  
      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            'Content-type': 'application/json',
            'Authorization': authorizeToken
          }
        })
        const responseData = await response.json()
        console.log('### responseData', responseData)
        setFiles(responseData)
        console.log('responseData', responseData)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchFiles()
  }, [])

  return (
    <StyledFiles>
      <Title>
        Files
      </Title>
      <>
        {false && files.map((file: any) => (
          <File>
            <Name>
              {file.name}
            </Name>
            <Dates>
              {`${file.first_day} - ${file.last_day}`}
            </Dates>
          </File>
        ))}
      </>
    </StyledFiles>
  )
}
