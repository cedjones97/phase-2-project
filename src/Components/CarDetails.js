import '../Car.css'
import React, { useState } from 'react'
import Timer from './Timer'


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
      <summary>
        <details>
        <p id='engine'><strong>Engine Type:</strong> {engine}</p>
        <p id='trans'><strong>Transmission Type:</strong> {trans}</p>
        <p id='drivetrain'><strong>Drivetrain Type:</strong> {drivetrain}</p>
        <p id='power'><strong>Power:</strong> {power}</p>
        <p id='torque'><strong>Torque:</strong> {torque}</p>
        <p id='speed'><strong>0-60:</strong> {speed}</p>
        <p id='quarter'><strong>1/4 Mile Split:</strong> {quarter}</p>
        </details>
      </summary>
      <button onClick={handleBid}>Bid</button>
      <ul>
        <p className='bid-amount'><em>Current Bid Amount:</em> ${money}</p>
        <Timer className='timer'/>
      </ul>
    </div>
  )
}

export default CarDetails 