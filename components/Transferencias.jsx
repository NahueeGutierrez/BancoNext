// function Transferencias() {
//     return (
//         <>
//         <div className="container-pagos">

//             <section className="secciones">
//                 <div>
                 
//                 </div>
//             </section>
//         </div>
//         </>

//     );
// }

// export default Transferencias;

import React from 'react';
import Link from 'next/link'; // Importa Link
import cuentas from '../pages/cuentas/cuentas'; // Ajusta la ruta según la ubicación real de tu archivo cuentas.js

function Transferencias() {
  return (
    <>
      <div className="container-pagos">
        <section className="secciones">
          <div>
            <h1>Detalles de las Cuentas</h1>
            <ul>
              {Object.values(cuentas).map((cuenta) => (
                <li key={cuenta.id}>
                  {/* Envuelve el nombre de la cuenta en un enlace */}
                  <Link href={`/cuentas/${cuenta.id}`}>
                    
                      <p>Nombre: {cuenta.nombre}</p>
                    
                  </Link>
                  <p>Saldo: ${cuenta.saldo}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Transferencias;
