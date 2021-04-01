import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { Title } from '../../brewery/title/Title'
import { SubTitle } from '../../brewery/sub-title/SubTitle'
import { Page } from '../../brewery/page/Page'
import { Button } from '../../brewery/button/Button'
import { UrlParamTypes } from '../../types/common'

import { AccountProvider, useAccount } from '../../providers/account-provider/AccountProvider'
import { Uploader } from './Uploader'
import { AccountFiles } from './AccountFiles'
import { Account } from '../account/Account'

const FilesWithData = () => {
  const { account: { id, name } } = useAccount()
  console.log('id', id)
  if (!id) {
    return null
  }
  return (
    <Page>
      <Title>
        {`Uploader for ${name} (${id})`}
      </Title>
      <SubTitle>
      </SubTitle>
      <Uploader accountId={id} />
      <AccountFiles accountId={id} />
    </Page>
  )
}

export const Files = () => {
  const { id } = useParams<UrlParamTypes>()

  return (
    <AccountProvider accountId={id}>
      <FilesWithData />
    </AccountProvider>
  )
}
