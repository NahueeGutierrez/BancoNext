
import React, { useState } from 'react';

const AumentarLimite = () => {
  const [solicitudEnviada, setSolicitudEnviada] = useState(false);

  const enviarSolicitud = () => {

    setSolicitudEnviada(true);
  };

  return (
    <div className='aumentar-limite'>
      <h1>Solicitar Aumento de Límite</h1>
      {!solicitudEnviada ? (
        <div>
          <p>Completa el formulario para solicitar un aumento de límite.</p>
          <button onClick={enviarSolicitud}>Enviar Solicitud</button>
        </div>
      ) : (
        <p>Solicitud enviada. Espera la respuesta.</p>
      )}
    
    </div>
  );
};

export default AumentarLimite;
