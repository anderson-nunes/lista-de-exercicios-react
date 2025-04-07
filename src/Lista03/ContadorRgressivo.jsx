import React, { useEffect, useState } from 'react'

const ContadorRgressivo = () => {

  const [segundos, setSegundos] = useState(20)

  useEffect(() => {


    if (segundos > 0) {
      const timer = setTimeout(() => {
        setSegundos(segundos - 1)
      }, 1000)
      return () => clearInterval(timer)

    }
  }, [])

  return (
    <div>
      {segundos === 0 ? (
        <h4>Seu tempo esgotou</h4>
      ) : (
        <h4>Tempo restante e de : {segundos} segundos</h4>
      )}
    </div>
  )
}

export default ContadorRgressivo
