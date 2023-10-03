import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './Home'
import Auction from './Auction'
import AuctionYourCar from './AuctionYourCar'


export const App = () => {

    const [car, setCar] = useState('')

  return (
    <div>
        <Header />
        <Switch>
        <Route path='/auction'>
            <Auction />
        </Route>
        <Route path='/auctionyourcar'>
            <AuctionYourCar />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>
        
        </Switch>
    </div>
  )
}

export default App