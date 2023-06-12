import React from 'react'

const Exercicio06 = () => {

  const cores = ['vermelho', 'azul', 'amarelo', 'verde', 'roxo'];

  const colorPrimary = cores.filter((item) => cores.includes(item))






  console.log(colorPrimary)
  //fazer para os outros

  return (
    <div>
      {colorPrimary.map((item, index) => (

        <div key={index}>
          <p>{item}</p>
        </div>

      ))}
    </div>
  )
}

export default Exercicio06

// import React from "react";

// const Exercicio6 = () => {
//   const cores = ["vermelho", "azul", "amarelo", "verde", "roxo"];

//   const coresSearch = [];

//   cores.forEach((cor) => {
//     if (["vermelho", "azul", "amarelo"].includes(cor)) {
//       coresSearch.push(cor);
//     }
//   });

//   return (
//     <div>
//       <h1>Exercicio 06</h1>
//       {coresSearch.map((cor, index) => (
//         <div key={index}>
//           <ul>
//             <li>{cor}</li>
//           </ul>
//         </div>
//       ))}
//     </div>
//     )
// }