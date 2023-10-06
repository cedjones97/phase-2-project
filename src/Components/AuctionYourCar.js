import CarForm from "./CarForm";
import React, { useState } from "react"

const AuctionYourCar = ({ handlePost }) => {

  const [count, setCount] = useState(1)

  const handleForwardCount = (count) => {
    setCount(count => count + 1)
  }

  const handleBackwardCount = (count) => {
    setCount(count => count - 1)
  }

  return (
    <div>
      <CarForm count={count} handlePost={handlePost} />
    </div>
  )
}

export default AuctionYourCar