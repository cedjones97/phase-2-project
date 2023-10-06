import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import Auction from './Auction'
import AuctionYourCar from './AuctionYourCar'


export const App = () => {

    const [car, setCar] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/carData')
        .then(res => res.json())
        .then(setCar)
    }, [])

    const handlePost = (newCar) => {
        setCar(newCar)
    }

  return (
    <div>
        <Header />
        <Switch>
        <Route path='/auction'>
            <Auction cars={car}/>
        </Route>
        <Route path='/auctionyourcar'>
            <AuctionYourCar handlePost={handlePost} />
        </Route>
        <Route exact path='/'>
            <Home />
        </Route>

        </Switch>
    </div>
  )
}

export default App