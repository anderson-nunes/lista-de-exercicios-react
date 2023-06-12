import React, { useState } from 'react'

const ExercicioUseState = () => {

  const [inputName, setInputName] = useState('')

  return (
    <>
      <div>
        <h1>Exemplo 2</h1>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)} />
        {inputName}
      </div>
    </>
  )
}

export default ExercicioUseState