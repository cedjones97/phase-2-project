import CarDetails from './CarDetails'

const Auction = ({ cars }) => {

  const car = cars.map()
  return (
    <div>
        <br />
        <p>This will load my Auction content</p>
        <CarDetails />
    </div>
  )
}

export default Auction