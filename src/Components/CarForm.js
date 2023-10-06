import Form from '../Form.css'
import React, { useState } from 'react'


const CarForm = ({ count, handleForwardCount, handleBackwardCount, handlePost }) => {


  const [engine, setEngine] = useState('')
    // const handleNextCick = (count) => {
    //    (count = 1 ?  handleForwardCount(count) : count = 1)
    // }

    // const handlePrevClick = (count) => {
    //     handleBackwardCount(count)
    // }
    const handleEngine = (e) => {

      setEngine(e.target.value)
    }

      const handleSubmit = (e) => {
        e.preventDefault();

        const itemData = {
          engine: engine,
          transmission: '',
          drivetrain: '',
          power: '',
          torque: '',
          mph: '',
          quarterMile: '',
        }

        fetch('http://localhost:3000/carData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemData),
        })

        .then(res => res.json())
        .then(newCar => console.log(newCar))

      }
  

  return (
    <div className='form-box'>
        <h3><em><strong>Submit This Form To Add Your Car To The Auction!</strong></em></h3>
        <br />
        <form onSubmit={handleSubmit}>
            <div className='field1'>
            <input placeholder='vehicle name..' value={engine} onChange={handleEngine}/>
            <input placeholder='vehicle image..'/>
            <input placeholder='vehicle description..'/>
            <input placeholder='vehicle engine type..'/>
            <input placeholder='vehicle transmission type..'/>
            <input placeholder='vehicle drivetrain type..'/>
            <input placeholder='vehicle power..'/>
            <input placeholder='vehicle torque..'/>
            <input placeholder='vehicle 0-60..'/>
            <input placeholder='vehicle 1/4 split..'/>
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