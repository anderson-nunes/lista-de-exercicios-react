import React from 'react'

const Exercicio03 = () => {

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const pairNumbers = numeros.filter((item) => item % 2 === 0)



  return (
    <div>
      {pairNumbers.map((num, index) => (

        <div key={index}>
          <span>Números pares: {`${num}, `}</span>
        </div>
      ))}

    </div>
  )
}

export default Exercicio03