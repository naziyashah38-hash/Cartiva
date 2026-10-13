import React from 'react'
import Intro from './components/intro'
import Category from './components/Middle/Category'
import Sale from './components/Middle/Sale' 
import BtT from './components/Footer/BtT'
import Support from './components/Footer/Support'
import Collection from './components/Middle/Collection'
import BestSellers from './components/Middle/BestSellers'
import OurStory from './components/Footer/OurStory'
import CustomerReviews from './components/testimonial/CustomerReviews'
import Newsletter from './components/testimonial/Newsletter'
// your world one cart 

const App = () => {
  return (
    <div  >
      <Intro />
      <Category />
      <Collection />
      <BestSellers />
      <Sale />
      <OurStory />
      <CustomerReviews />
      <Newsletter />
      <BtT />
      <Support />
    </div>
  )
}

export default App
