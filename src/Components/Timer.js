import React, { useRef, useState, useEffect} from 'react'

const Timer = () => {


    const [ minutes, setMinutes] = useState('00')

    const [ seconds, setSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {

      const  countDownDate = new Date('October 20, 2023 00:00:00').getTime();

      interval = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        if (distance < 0) {
          clearInterval(interval.current)

        } else {
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
       <ul> In {minutes}:{seconds}, the auction will be over!</ul>
    </div>
  )
}

export default Timer