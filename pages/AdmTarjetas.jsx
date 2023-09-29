import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header/NavbarTop';
import Footer from './Footer';
import NavbarLateral from '@/components/NavbarLateral/NavbarLateral';

// Componente para mostrar una lista de tarjetas de crédito
function CreditCardList({ creditCards }) {
  return (
    <>
      <ul>
        {creditCards.map((card) => (
          <li key={card.id}>
            <Link href={`/credit-cards/${card.id}`}>
              {card.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// Página principal que muestra la lista de tarjetas de crédito
function HomePage({ creditCards }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='main-tarjetas'>
        <NavbarLateral className="navbarlateral-tarjetas" />
        <div className='tarjetas'>
          <h1>Tus tarjetas</h1>
          <CreditCardList creditCards={creditCards} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const creditCards = [
    {
      id: '4798-2011-8481-4822', name: 'Tarjeta de Débito',
      user: 'Carlos Embarrado'
    },
    {
      id: '4213-7178-4718-6503', name: 'Tarjeta de Crédito',
      user: 'Carlos Embarrado'
    },
  ];

  return {
    props: { creditCards },
  };
}

export default HomePage;
