import CarDetails from './CarDetails'

const Auction = ({ cars }) => {

  const car = cars.map( car => {
    return <CarDetails />
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