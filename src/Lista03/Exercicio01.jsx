import React, { useState, useEffect } from 'react';
import moment from 'moment'

const RelogioDigital = () => {

  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setInterval(
      () => {
        let date = moment().utcOffset('-03:00').format('DD/MM/YYYY HH:mm:ss');
        setCurrentDate(date);
      },
      1000
    );
  }, []);


  //EXEMPLO 1 DE COMO SE FAZ ESTE EXERCICIO
  // useEffect(() => {
  //   setInterval(
  //     () => {
  //       let day = new Date().getDate();
  //       (day < 10) && (day = `0${day}`);

  //       let month = new Date().getMonth() + 1;
  //       (month < 10) && (month = `0${month}`);

  //       let year = new Date().getFullYear();

  //       let hours = new Date().getHours();
  //       (hours < 10) && (hours = `0${hours}`);

  //       let min = new Date().getMinutes();
  //       (min < 10) && (min = `0${min}`);

  //       let sec = new Date().getSeconds();
  //       (sec < 10) && (sec = `0${sec}`);

  //       setCurrentDate(
  //         `${day}/${month}/${year} ${hours}:${min}:${sec}`
  //       );
  //     },
  //     1000
  //   );
  // }, []);

  // const RelogioDigital = () => {

  //   const [hora, setHora] = useState(new Date())

  //   useEffect(() => {

  //     const tempo = setInterval(() => {
  //       setHora(new Date())

  //     }, 1000)

  //     return ()=> {
  //     clearInterval(tempo)
  //     }
  //   }, [])
  // }


  return (
    <div>
      {/* <h2>{hora.toLocaleTimeString()}</h2> */}
      <h1>Data e Hora</h1>
      <h2>{currentDate}</h2>
    </div>
  )
}

export default RelogioDigital