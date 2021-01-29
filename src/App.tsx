import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import { Home } from './pages/home/Home'
import { BottomNavbar } from './components/molecules/bottom-navbar/BottomNavbar'

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <BottomNavbar />
    </Router>
  );
}

export default App;
