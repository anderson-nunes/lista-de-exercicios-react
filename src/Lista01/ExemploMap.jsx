import React from 'react'

const ExemploMap = () => {

  const usuario = [

    { name: 'Anderson', banda: 'Link Park', talento: 'Auto didata' },
    { name: 'Marcela', banda: 'Nelson Gonçalves', talento: 'Adaptação' },
    { name: 'Laércio', banda: 'John Cash', talento: 'Criatividade' },
  ]

  return (
    <div>
      {usuario.map((item, index) => (

        <div key={index}>
          <li>{item.name}</li>
          <li>{item.banda}</li>
          <li>{item.talento}</li>
        </div>

      ))}
    </div>
  )
}

export default ExemploMap