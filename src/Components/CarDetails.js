import Car from '../Car.css'

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

  return (
    <div className='card'>
      <img src={image} alt='muscle-car'/>
      <h1>{carName}</h1>
      <p>{description}</p>
      <p>Engine Type: {engine}</p>
      <p>Transmission Type: {trans}</p>
      <p>Drivetrain Type: {drivetrain}</p>
      <p> Power: {power}</p>
      <p>Torque: {torque}</p>
      <p>0-60: {speed}</p>
      <p>1/4 Mile Split: {quarter}</p>
    </div>
  )
}

export default CarDetails 