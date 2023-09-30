import React from 'react';
import Link from 'next/link'
// esto es un componente
function CreditCardList({ creditCards }) {
  return (
    <ul>
      {creditCards.map((card) => (
        <li key={card.id}>
          <Link href={`/credit-cards/${card.id}`}>
            {card.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// Pagina principal que muestra la lista de tarjetas 
function HomePage({ creditCards }) {
  return (
    <div>
      <h1>Tarjetas de Crédito</h1>
      <CreditCardList creditCards={creditCards} />
    </div>
  );
}
export async function getStaticProps() {
  const creditCards = [
    { id: '4798-2011-8481-4822', name: 'Tarjeta de Débito' },
    { id: '4213-7178-4718-6503', name: 'Tarjeta de Crédito' },
  ];

  return {
    props: { creditCards },
  };
}


export default HomePage;

