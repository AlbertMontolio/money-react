import React from 'react'
import styled from 'styled-components'

import { Title } from '../../brewery/title/Title'
import { Page } from '../../brewery/page/Page'

import { dataAccounts } from '../../_common/dataAccounts'
import { AccountLink } from './account-item/AccountItem'
import { UserAccountsProvider, useUserAccount } from '../../providers/user-accounts-provider/UserAccountsProvider'

import { urls } from '../../config'

export const AccountsWithData = () => {
  const { userAccounts } = useUserAccount()
  return (
    <Page>
      <Title>
        Accounts Menu
      </Title>
      <>
        {userAccounts.map((userAccount: any) => <AccountLink userAccount={userAccount} />)}
      </>
    </Page>
  )
}

export const Accounts = () => {
  return (
    <UserAccountsProvider>
      <AccountsWithData />
    </UserAccountsProvider>
  )
}
