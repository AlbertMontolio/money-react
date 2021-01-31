import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Uploaders } from './pages/uploaders/Uploaders'
import { Uploader } from './pages/uploaders/uploader/Uploader'
import { Accounts } from './pages/accounts/Accounts'
import { Account } from './pages/account/Account'
import { Transactions } from './pages/transactions/Transactions'
import { Reports } from './pages/reports/Reports'
import { Year } from './pages/reports/year/Year'

import { BottomNavbar } from './components/molecules/bottom-navbar/BottomNavbar'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/uploaders' exact component={Uploaders} />
      <Route path='/uploaders/:code' exact component={Uploader} />
      <Route path='/accounts/:code' exact component={Account} />
      <Route path='/accounts' exact component={Accounts} />
      <Route path='/transactions/:code' exact component={Transactions} />
      <Route path='/:code/reports/years' exact component={Reports} />
      <Route path='/:code/reports/years/:year' exact component={Year} />
      <BottomNavbar />
    </Router>
  );
}

export default App
