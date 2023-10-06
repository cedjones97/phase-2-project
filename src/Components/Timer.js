import React, { useState, useEffect} from 'react'

const Timer = () => {

    const [ hours, setHours] = useState(24)

    const [ minutes, setMinutes] = useState(60)

    const [ seconds, setSeconds] = useState(60)

    useEffect(() => {

        const second = setTimeout(() => (prev => prev - 1), 1000)
    })

  return (
  
    <div>
        hours:minutes:{seconds}
    </div>
  )
}

export default Timer