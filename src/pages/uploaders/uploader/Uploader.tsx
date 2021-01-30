import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Title } from '../../../brewery/title/Title'
import { SubTitle } from '../../../brewery/sub-title/SubTitle'
import { Page } from '../../../brewery/page/Page'
import { Button } from '../../../brewery/button/Button'
import { findUploaderLink } from '../uploaderLinks'

interface ParamTypes {
  code: string
}

interface FileProps {
  success: boolean
  message: string
}

const StyledForm = styled.div`

`

const StyledButton = styled.div`
  margin-top: 20px;
`

export const Uploader = () => {
  const { code } = useParams<ParamTypes>()
  const [file, setFile] = useState(null)

  console.log('### file', file)

  const uploaderLink = findUploaderLink(code)

  const handleOnChange = (e: any) => {
    if (e) {
      setFile(e.target.files)
    }
  }

  const submitForm = () => {
    console.log('clickinggg')
  }

  return (
    <Page>
      <Title>
        Uploader
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
    </Page>
  )
}
