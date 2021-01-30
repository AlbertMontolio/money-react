import React from 'react'
import styled from 'styled-components'

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'

import { dataAccounts } from '../../_common/dataAccounts'
import { AccountLink } from './account-item/AccountItem'

import { urls } from '../../config'

export const Accounts = () => {
  return (
    <Page>
      <Title>
        Accounts Menu
      </Title>
      <>
        {dataAccounts.map((dataAccount: any) => <AccountLink dataAccount={dataAccount} />)}
      </>
    </Page>
  )
}
