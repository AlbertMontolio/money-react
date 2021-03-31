import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Uploaders } from '../pages/uploaders/Uploaders'
import { Uploader } from '../pages/uploaders/uploader/Uploader'
import { Accounts } from '../pages/accounts/Accounts'
import { Properties } from '../pages/properties/Properties'
import { TenantContracts } from '../pages/tenant-contracts/TenantContracts'
import { Account } from '../pages/account/Account'
import { Transactions } from '../pages/transactions/Transactions'
import { Reports } from '../pages/reports/Reports'
import { Year } from '../pages/reports/year/Year'
import { Month } from '../pages/reports/month/Month'
import { Property } from '../pages/property/Property'
import { BottomNavbar } from '../components/molecules/bottom-navbar/BottomNavbar'


export const BottomNavbarFrame = () => {
  console.log('hello world')
  return (
    <div>
      <Route path='/real-state/accounts/:id' exact component={Account} />
      <Route path='/real-state/users/:user/accounts' exact component={Accounts} />
      <Route path='/real-state/users/:user/properties' exact component={Properties} />
      <Route path='/real-state/properties/:propertyId' exact component={Property} />
      <Route path='/real-state/properties/:propertyId/tenant-contracts' exact component={TenantContracts} />
      <Route path='/uploaders' exact component={Uploaders} />
      <Route path='/real-state/accounts/:id/files' exact component={Uploader} />
      <Route path='/transactions/:code' exact component={Transactions} />
      <Route path='/:code/reports/years' exact component={Reports} />
      <Route path='/:code/reports/years/:year' exact component={Year} />
      <Route path='/:code/reports/years/:year/months/:month' exact component={Month} />
      <BottomNavbar />
    </div>
  )
}