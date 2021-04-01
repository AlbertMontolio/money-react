import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Title } from '../../brewery/title/Title'
import { SubTitle } from '../../brewery/sub-title/SubTitle'
import { Page } from '../../brewery/page/Page'
import { Button } from '../../brewery/button/Button'
import { StyledLink } from '../../brewery/styled-link/StyledLink'
import { findUploaderLink } from '../uploaders/uploaderLinks'
import { urls } from '../../config'
import { Files } from '../uploaders/uploader/files/Files'
import { UrlParamTypes } from '../../types/common'
import { Calendar } from '../../components/organisms/calendar/Calendar'
import { useAuthorize } from '../../providers/authorize-provider/AuthorizeProvider'

const StyledForm = styled.div``

const StyledButton = styled.div`
  margin-top: 20px;
`

const StyledGant = styled.div`
  margin-top: 40px;
`

export const Uploader = ({accountId}: {accountId: any}) => {
  const [files, setFiles] = useState([])
  console.log('### files', files)
  const { authorize: { backendUserId, authorizeToken } } = useAuthorize()

  const handleOnChange = (e: any) => {
    if (e) {
      e.persist()
      setFiles(e.target.files)
    }
  }

  const submitForm = async () => {
    const url = `${urls.productionApi}/accounts/${accountId}/account_files`
    const form = new FormData()

    for (let i = 0; i < files.length; i++) {
      if (files[i]) {
        form.append(`files[${i}]`, files[i])
      }
    }

    form.append('account_id', accountId)

    console.log('### form', form)

    try {
      const response = await fetch(url, {
        method: 'post',
        headers: { 
          'Authorization': authorizeToken
        },
        body: form
      })
      const responseData = await response.json()
      console.log('responseData', responseData)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Page>
      <StyledForm>
        <input 
          type="file" 
          accept='.csv'
          name='files'
          multiple
          onChange={(e) => handleOnChange(e)}
        />  
      </StyledForm>
      <StyledButton>
        <Button onClick={() => submitForm()}>
          Upload
        </Button>
      </StyledButton>
      <StyledGant>
        {false && <Calendar initYear={2012} endYear={2021} />}
      </StyledGant>
      {false && <Files accountId={accountId} />}
    </Page>
  )
}
