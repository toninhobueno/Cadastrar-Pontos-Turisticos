  
import React from 'react';
import PontosCard from '../Card/Card';
import './List.css';

const PontosList = ({ loading, error, pontos }) => {
 
  if (loading || pontos === null) {
    return <div>Carregando...</div>;
  }
 
  console.log({ loading, error, pontos });
  if (error) {
    return <div>Algo deu errado...</div>;
  }

  if (pontos.length === 0) {
    return <div>Nenhum resultado encontrado</div>;
  }

  return (
    <div className="pontos-list">
      {pontos.map((pontos) => (
        <PontosCard pontos={pontos} />
      ))}
    </div>
  );
}

export default PontosList;
