import React from 'react'

const Exercicio02 = ({ name, post }) => {

  return (
    <div>
      {name}
      {post.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Exercicio02