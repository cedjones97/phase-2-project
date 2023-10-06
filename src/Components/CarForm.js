import Form from '../Form.css'
import React, { useState } from 'react'


const CarForm = ({ count, handleForwardCount, handleBackwardCount, handlePost }) => {


  const [carName, setCarName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [engine, setEngine] = useState('')
  const [transmission, setTransmission] = useState('')
  const [drivetrain, setDrivetrain] = useState('')
  const [power, setPower] = useState('')
  const [torque, setTorque] = useState('')
  const [mph, setMph] = useState('')
  const [quarterMile, setQuarterMile] = useState('')
    // const handleNextCick = (count) => {
    //    (count = 1 ?  handleForwardCount(count) : count = 1)
    // }

    // const handlePrevClick = (count) => {
    //     handleBackwardCount(count)
    // }
    const handleEngine = (e) => {
      setEngine(e.target.value)
    }

    const handleCarName = (e) => {
      setCarName(e.target.value)
    }

    const handleImage = (e) => {
      setImage(e.target.value)
    }

    const handleDescription = (e) => {
      setDescription(e.target.value)
    }

    const handleTransmission = (e) => {
      setTransmission(e.target.value)
    }

    const handleDrivetrain = (e) => {
      setDrivetrain(e.target.value)
    }

    const handlePower = (e) => {
      setPower(e.target.value)
    }

    const handleTorque = (e) => {
      setTorque(e.target.value)
    }

    const handleQuarterMile = (e) => {
      setQuarterMile(e.target.value)
    }

    const handleMph = (e) => {
      setMph(e.target.value)
    }

    
  const handleSubmit = (e) => {
    e.preventDefault();

    const itemData = {
      carName: carName,
      image: image,
      description: description,
      engine: engine,
      transmission: transmission,
      drivetrain: drivetrain,
      power: power,
      torque: torque,
      mph: mph,
      quarterMile: quarterMile,
    }

    fetch('http://localhost:3000/carData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
      })

      .then(res => res.json())
      .then(newCar => handlePost(newCar))

    }
  

  return (
    <div className='form-box'>
        <h3><em><strong>Submit This Form To Add Your Car To The Auction!</strong></em></h3>
        <br />
        <form onSubmit={handleSubmit}>
            <div className='field1'>
            <input placeholder='vehicle name..' value={carName} onChange={handleCarName}/>
            <input placeholder='vehicle image..' value={image} onChange={handleImage} />
            <input placeholder='vehicle description..' value={description} onChange={handleDescription} />
            <input placeholder='vehicle engine type..' value={engine} onChange={handleEngine} />
            <input placeholder='vehicle transmission type..' value={transmission} onChange={handleTransmission} />
            <input placeholder='vehicle drivetrain type..' value={drivetrain} onChange={handleDrivetrain} />
            <input placeholder='vehicle power..' value={power} onChange={handlePower} />
            <input placeholder='vehicle torque..' value={torque} onChange={handleTorque} />
            <input placeholder='vehicle 0-60..' value={mph} onChange={handleMph} />
            <input placeholder='vehicle 1/4 split..' value={quarterMile} onChange={handleQuarterMile} />
            <input type='submit' id='submit'/> 
            </div>
        </form>
        {/* <button className = "prevBtn" type = "submit" onClick={handlePrevClick}> PREV </button>
        <button className = "nextBtn" type = "submit" onClick={handleNextCick}> NEXT </button>
        <h4>{count} of 10</h4> */}
    </div>
  )
}

export default CarForm