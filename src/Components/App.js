import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Auction from './Auction'
import AuctionYourCar from './AuctionYourCar'


export const App = () => {

    const [car, setCar] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/carData')
        .then(res => res.json())
        .then(data => console.log(data))
    })

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