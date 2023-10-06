import React, { useRef, useState, useEffect} from 'react'

const Timer = () => {

    const [ hours, setHours] = useState('00')

    const [ minutes, setMinutes] = useState('00')

    const [ seconds, setSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {

      const  countDownDate = new Date('October 30, 2023 00:00:00').getTime();

      interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (distance < 0) {
          clearInterval(interval.current)

        } else {
          setHours(hours)
          setMinutes(minutes)
          setSeconds(seconds)
        }

      }, 1000)
    }

    useEffect(() => {

      startTimer()

      return () => {
        
        clearInterval(interval.current)
      }
    })

  return (
  
    <div>
        {hours}:{minutes}:{seconds}
    </div>
  )
}

export default Timer