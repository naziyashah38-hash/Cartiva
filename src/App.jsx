import React from 'react'
import Intro from './components/intro'
import Category from './components/Middle/Category'
import Sale from './components/Middle/Sale' 
import Elect from './components/Middle/Elect'
import BtT from './components/Footer/BtT'
import Support from './components/Footer/Support'
import Recent from './components/Recents/Recent'
import Ymal from './components/Middle/Ymal'
// your world one cart 

const App = () => {
  return (
    <div  >
      <Intro />
      <Sale />
      <Ymal />
      <Category />
      <Elect />
      <BtT />
      <Recent />
      <Support />
    </div>
  )
}

export default App
