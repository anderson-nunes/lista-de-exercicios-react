import React, { useState } from 'react'

import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ddd;
  padding: 20px;
  margin-bottom: 5rem;

 input {
  margin: 1rem 0;
 }

 button {
  padding: 6px;
  background-color: #1fc21f;
  border: none;
  outline: 0;
 }
`

const Ex07 = () => {

  const [InputName, InputSetName] = useState('')

  const [InputEmail, InputSetEmail] = useState('')

  const handleForm = (event) => {
    event.preventDefault()

    if (InputName.length && InputEmail.length) {
      alert(`As informações de nome: ${InputName} e email: ${InputEmail}`)
    } else {
      alert('Favor preencher os campos')
    }

    InputSetName('')
    InputSetEmail('')
  }

  console.log(InputName)
  console.log(InputEmail)

  return (
    <div>
      <FormContainer type="submit">
        <label>Nome:
          <input type="text"
            value={InputName}
            onChange={(e) => InputSetName(e.target.value)}
          />
        </label>

        <label>E-mail:
          <input type='email'
            value={InputEmail}
            onChange={(e) => InputSetEmail(e.target.value)}
          />
        </label>
        <button onClick={handleForm}>Enviar dados</button>
      </FormContainer>
    </div>
  )
}

export default Ex07