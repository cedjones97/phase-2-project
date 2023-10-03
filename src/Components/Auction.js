import CarDetails from './CarDetails'

const Auction = ({ cars }) => {

  const car = cars.map(car => { 
    return <CarDetails key={car.id} 
    carName={car.carName}
    image={car.image}
    description={car.description}
    engine={car.engine}
    trans={car.transmission}
    drivetrain={car.drivetrain}
    power={car.power}
    torque={car.torque}
    speed={car.mph}
    quarter={car.quarterMile}
    />
  })

  return (
    <div>
        <br />
        <p>This will load my Auction content</p>
        {car}
    </div>
  )
}

export default Auction