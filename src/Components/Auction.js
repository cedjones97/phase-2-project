import CarDetails from './CarDetails'
import '../Auction.css'

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
        <ul>
          <h1><em>WELCOME TO THE AUCTION!</em></h1>
        </ul>
        {car}
    </div>
  )
}

export default Auction