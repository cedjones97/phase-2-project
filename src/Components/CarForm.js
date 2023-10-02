import Form from '../Form.css'


const CarForm = ({ count, handleForwardCount, handleBackwardCount }) => {

    // const handleNextCick = (count) => {
    //    (count = 1 ?  handleForwardCount(count) : count = 1)
    // }

    // const handlePrevClick = (count) => {
    //     handleBackwardCount(count)
    // }

    const handleSubmit = () => {
        fetch('http://localhost300/carData', {
            method: 'POST',
        })
    }

  return (
    <div className='form-box'>
        <h3><em><strong>Submit This Form To Add Your Car To The Auction!</strong></em></h3>
        <br />
        <form>
            <div className='field1'>
            <input placeholder='vehicle name..'/>
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