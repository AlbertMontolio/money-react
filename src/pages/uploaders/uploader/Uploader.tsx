import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Page } from '../../../brewery/page/Page'
import { Button } from '../../../brewery/button/Button'
import { StyledLink } from '../../../brewery/styled-link/StyledLink'
import { findUploaderLink } from '../uploaderLinks'
import { urls } from '../../../config'
import { Files } from './files/Files'
import { UrlParamTypes } from '../../../types/common'
import { Gant } from '../../../components/organisms/gant/Gant'

const StyledForm = styled.div`
`

const StyledButton = styled.div`
  margin-top: 20px;
`

const StyledGant = styled.div`
  margin-top: 40px;
`

export const Uploader = () => {
  const { code } = useParams<UrlParamTypes>()
  const [file, setFile] = useState('')

  const uploaderLink = findUploaderLink(code)

  const handleOnChange = (e: any) => {
    if (e) {
      e.persist()
      setFile(e.target.files[0])
    }
  }

  const submitForm = async () => {
    const url = `${urls.productionApi}/db_acc_transactions`
    const form = new FormData()
    if (file) {
      form.append("file", file)
    }

    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
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
      <Title>
        {`Uploader ${code}`}
      </Title>
      <SubTitle>
        {uploaderLink?.name}
      </SubTitle>

      <StyledForm>
        <input 
          type="file" 
          accept='.csv'
          onChange={(e) => handleOnChange(e)}
        />  
      </StyledForm>
      <StyledButton>
        <Button onClick={() => submitForm()}>
          Upload
        </Button>
      </StyledButton>
      <StyledGant>
        <Gant />
      </StyledGant>
      <Files />
    </Page>
  )
}
