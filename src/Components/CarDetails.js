import Car from '../Car.css'
import React, { useState } from 'react'


const CarDetails  = ({
    carName,
    image,
    description,
    engine,
    trans,
    drivetrain,
    power,
    torque,
    speed,
    quarter
}) => {

    const [ money, setMoney ] = useState(5000)

    const handleBid = () => {
      setMoney(prev => prev + 5000)
    }
    
  return (
    <div className='card'>
      <img src={image} alt='muscle-car'/>
      <h1>{carName}</h1>
      <p id='description'>{description}</p>
      <p id='engine'>Engine Type: {engine}</p>
      <p id='trans'>Transmission Type: {trans}</p>
      <p id='drivetrain'>Drivetrain Type: {drivetrain}</p>
      <p id='power'>Power: {power}</p>
      <p id='torque'>Torque: {torque}</p>
      <p id='speed'>0-60: {speed}</p>
      <p id='quarter'>1/4 Mile Split: {quarter}</p>
      <button onClick={handleBid}>Bid</button>
      <p>Current Bid Amount: ${money}</p>
    </div>
  )
}

export default CarDetails 