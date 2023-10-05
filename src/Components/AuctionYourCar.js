import CarForm from "./CarForm";
import React, { useState } from "react"

const AuctionYourCar = () => {

  const [count, setCount] = useState(1)

  const handleForwardCount = (count) => {
    setCount(count => count + 1)
  }

  const handleBackwardCount = (count) => {
    setCount(count => count - 1)
  }

  return (
    <div>
      <CarForm count={count} handleForwardCount={handleForwardCount} handleBackwardCount={handleBackwardCount}/>
    </div>
  )
}

export default AuctionYourCar