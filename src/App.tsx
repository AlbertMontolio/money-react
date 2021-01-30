import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Uploaders } from './pages/uploaders/Uploaders'
import { Uploader } from './pages/uploaders/uploader/Uploader'
import { BottomNavbar } from './components/molecules/bottom-navbar/BottomNavbar'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/uploaders' exact component={Uploaders} />
      <Route path='/uploaders/:code' exact component={Uploader} />
      <BottomNavbar />
    </Router>
  );
}

export default App
