import React from 'react';
import PontosCard from '../Card/Card';
import './List.css';

const PontosList = ({ loading, pontos }) => {
  if (loading) {
    return <div>Carregando...</div>;
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
