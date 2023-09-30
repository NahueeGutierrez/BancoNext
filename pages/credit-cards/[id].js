import React , {useState}from 'react';
import { useRouter } from 'next/router';
import Pagar from './pagar';
import AumentarLimite from './aumentarLimite';

// Pagina de detalles de una tarjeta 
function CreditCardDetail() {
  const [pagos, setPagos] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const pagoRealizado = (monto) => {
    setPagos([...pagos, monto]);
  };
  return (
    <>
    <div className='detalles-credito'>
      <h2>Detalles de la Tarjeta de Crédito</h2>
      <p>Mostrando detalles para la tarjeta con ID: {id}</p>
      <p>Nombre de usuario: Carlos Embarrado</p>
      <p>El vencimiento es el: 08/30</p>
      <Pagar onPagoRealizado={pagoRealizado}/>
      <div>
        <ol>
        {pagos.map((monto, index) => (
          <li key={index}>Pago de ${monto} relizado con éxito.</li>
        ))}
        </ol>
      </div>
      <AumentarLimite/>
    </div>
    <div className='cvv-externo'>
    <p>CVV: 137</p>
    <div className='cvv-interno-negro'></div>
    <div className='cvv-interno-gris'></div>
    </div>
    </>
  );
}

export default CreditCardDetail;
