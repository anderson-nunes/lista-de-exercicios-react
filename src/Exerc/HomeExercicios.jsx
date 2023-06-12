import React from 'react'
import ExemploFilter from './ExemploFilter'
import ExemploMap from '../Exerc/ExemploMap'
import Exercicio01 from '../Exerc/Exercicio01'
import Exercicio02 from '../Exerc/Exercicio02'
import Exercicio03 from '../Exerc/Exercicio03'
import Exercicio04 from '../Exerc/Exercicio04'
import Exercicio05 from './Exercicio05'
import Exercicio06 from './Exercicio06'
import UseState from './UseState'
import ExercicioUseState from './ExercicioUseState'

const HomeExercicios = () => {

  const posts = [
    { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
    { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
    { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
  ];

  const name = 'Anderson'

  return (
    <div>
      <ExemploFilter />
      <hr />
      <ExemploMap />
      <hr />
      <Exercicio01 />
      <hr />
      <Exercicio02 post={posts} name={name} />
      <hr />
      <Exercicio03 />
      <hr />
      <Exercicio04 />
      <hr />
      <Exercicio05 />
      <hr />
      <h1>Exercicio 06</h1>
      <Exercicio06 />
      <hr />
      <h1>Exemplo 1 useState</h1>
      <UseState />
      <hr />
      <h1>Exemplo 2 useState</h1>
      <ExercicioUseState />
    </div>
  )
}

export default HomeExercicios