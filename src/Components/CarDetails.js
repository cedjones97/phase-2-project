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
      
      <h1>{carName}</h1>
      <p>{description}</p>
      <p>{engine}</p>
      <p>{trans}</p>
      <p>{drivetrain}</p>
      <p>{power}</p>
      <p>{torque}</p>
      <p>{speed}</p>
      <p>{quarter}</p>
    </div>
  )
}

export default CarDetails 