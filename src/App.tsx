import React from 'react'
import styled from 'styled-components'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { SignInForm } from './pages/sign-in-form/SignInForm'
import { TopNavbar } from './components/molecules/top-navbar/TopNavbar'
import { AuthenticateProvider } from './providers/authenticate-provider/AuthenticateProvider'
import { AuthorizeProvider } from './providers/authorize-provider/AuthorizeProvider'
import { UserProvider } from './providers/user-provider/UserProvider'

import { BottomNavbarFrame } from './routes/BottomNavbarFrame'

const StyledPage = styled.div`
  margin-top: 50px;
`

function App() {
  console.log('### App')
  return (
    <Router>
      <UserProvider>
        <AuthorizeProvider>
          <AuthenticateProvider>
            <TopNavbar />
            <StyledPage>
              <Route path='/' exact component={Home} />
              <Route path='/real-state' component={BottomNavbarFrame} /> 
              <Route path='/log-in' component={SignInForm} /> 
            </StyledPage>
          </AuthenticateProvider>
        </AuthorizeProvider>
      </UserProvider>
    </Router>
  )
}

export default App
