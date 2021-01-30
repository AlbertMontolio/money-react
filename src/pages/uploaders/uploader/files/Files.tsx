import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Title } from '../../../../brewery/title/Title'
import { urls } from '../../../../config'

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

export const Files = () => {
  const [files, setFiles] = useState([])

  useEffect(() => {
    const fetchFiles = async () => {
      console.log('### submitForm')
      const url = `${urls.productionApi}/db_acc_files`
  
      try {
        const response = await fetch(url, {
          method: 'get',
          headers: {
            'Content-type': 'application/json'
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
        {files.map((file: any) => (
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
