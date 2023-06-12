import React, { useState } from 'react'

import styled from 'styled-components'

export const Container = styled.form`
  width: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ddd;
  padding: 20px;
  margin-bottom: 5rem;

 input {
  width: 100px;
  margin: 1rem 0;
 }

 button {
  padding: 6px;
  margin: .5rem 0;
  background-color: #1fc21f;
  border: none;
  outline: 0;
  cursor: pointer;
 }
`


const Ex08 = () => {

  const [inputAltura, setInputAltura] = useState(0)
  const [inputPeso, setInputPeso] = useState(0)
  const [inputResultado, setInputResultado] = useState(0)

  console.log(inputAltura, inputPeso)

  const handleCalculator = (event) => {
    event.preventDefault()

    const calc = inputPeso / (inputAltura * inputAltura)
    const result = calc.toFixed(2)

    if (result < 17) {
      setInputResultado(`IMC ${result} - Muito abaixo do peso`)
    } else if (result > 17 && result <= 18.49) {
      setInputResultado(`IMC ${result} - Abaixo do peso`)
    } else if (result > 18.5 && result <= 24.99) {
      setInputResultado(`IMC ${result} - Peso normal`)
    } else if (result >= 25 && result <= 29.99) {
      setInputResultado(`IMC ${result} - Acima do peso`)
    } else if (result >= 30 && result <= 34.99) {
      setInputResultado(`IMC ${result} - Obesidade 1`)
    } else {
      setInputResultado(`IMC ${result} - Obesidade 2`)
    }
  }

  const handleClear = () => {
    setInputAltura(0)
    setInputPeso(0)
    setInputResultado(0)
  }

  return (
    <div>
      <Container>
        <h3>Calculadora IMC</h3>
        <label>Digite a sua altura:
          <input
            type="number"
            value={inputAltura}
            onChange={(e) => setInputAltura(e.target.value)}
            placeholder='Digite a sua Altura'
          />
        </label>
        <label>Digite o seu peso:
          <input
            type="number"
            value={inputPeso}
            onChange={(e) => setInputPeso(e.target.value)}
            placeholder='Digite o seu peso'
          />
        </label>
        <button onClick={handleCalculator}>Calcular IMC</button>
        <button onClick={handleClear}>Limpar dados</button>
        <h4>{inputResultado}</h4>
      </Container>
    </div>
  )
}

export default Ex08