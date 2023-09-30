import React, { useState } from 'react';

const Pagar = ({onPagoRealizado}) => {
  const [monto, setMonto] = useState('');
  const [pagoRealizado, setPagoRealizado] = useState(false);
  const procesarPago = () => {
    onPagoRealizado(monto);
  }

  return (
    <div>
      <h1>Realizar Pago</h1>
      {!pagoRealizado ? (
        <div>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            placeholder="Monto a pagar"
          />
          <button onClick={procesarPago}>Pagar</button>
        </div>
      ) : (
        <p>Pago realizado con éxito.</p>
      )}
    </div>
  );
};

export default Pagar;
