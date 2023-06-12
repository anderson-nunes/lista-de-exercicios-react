import React, { useEffect, useState } from 'react'
import moment from 'moment'

const AlteracaoDeFundo = () => {

  const [day, setDay] = useState('')

  useEffect(() => {

    setInterval(() => {

      let date = moment().utcOffset('-03:00').format('DD/MM/YYYY HH:mm:ss');
      setDay(date);

    }, 1000)

  },)

  let backgroundColor
  let hour = moment().hour()

  if (hour >= 6 && hour < 12) {

    backgroundColor = 'yellow'
  } else if (hour >= 12 && hour < 18) {
    backgroundColor = 'orange'
  } else {
    backgroundColor = 'black'
  }

  return (
    <div style={{ backgroundColor }}>
      <h1>{day}</h1>
    </div>
  )
}

export default AlteracaoDeFundo