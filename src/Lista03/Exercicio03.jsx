import React, { useState, useEffect } from 'react';

const ContadorRegressivo = () => {
  const [time, setTime] = useState({
    minutes: 1,
    seconds: 0,
  });

  useEffect(() => {

    const regressiveTimer = setInterval(() => {

      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(regressiveTimer);
        return;
      }

      setTime((prevTime) => ({
        minutes:
          prevTime.seconds > 0 ? prevTime.minutes : prevTime.minutes - 1,
        seconds:
          prevTime.seconds > 0 ? prevTime.seconds - 1 : 59,
      }));
    }, 1000);

    return () => {
      clearInterval(regressiveTimer);
    };
  }, [time]);

  return (
    <div>
      <div>
        {/* toString().padStart()para garantir que eles tenham 2 dígitos, adicionando um 0 a esquerda */}
        <span>{time.minutes.toString().padStart(2, '0')}</span>:
        <span>{time.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default ContadorRegressivo;
