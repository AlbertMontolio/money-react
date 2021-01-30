import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'
import { urls } from '../../config'
import { UrlParamTypes } from '../../types/common'

export const Reports = () => {
  const { code } = useParams<UrlParamTypes>()
  return (
    <Page>
      <Title>
        {`Reports ${code}`}
      </Title>
    </Page>
  )
}
