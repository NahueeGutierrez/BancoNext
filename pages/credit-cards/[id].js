import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../Footer';
import NavbarLateral from '@/components/NavbarLateral/NavbarLateral';
import Header from '@/components/Header/NavbarTop';

// Página de detalles de una tarjeta de crédito
function CreditCardDetail() {
 
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
    <div className='detalles-credito'>
      <p>Mostrando detalles para la tarjeta con ID: {id}</p>
      <p>Nombre de usuario: Carlos Embarrado</p>
      <p>El vencimiento es el: 08/30</p>
      {/* Aca van los datos de la tarjeta */}
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
