import React from 'react';
import './Card.css';

const PontosCard = ({ pontos }) => (
  <div className="pontos-card">
    <img
      src={pontos.imageUrl}
      alt={pontos.title}
      className="pontos-card__image"
    />
    <div className="pontos-card__info">
      <h1 className="pontos-card__title">{pontos.title}</h1>
      <span className="pontos-card__locale">{pontos.locale}</span>
      <span className="pontos-card__references"> - {pontos.references}</span>
      <span className="pontos-card__UF"> - {pontos.UF}</span>
      <h2 className="pontos-card__description">{pontos.description}</h2>
      <footer className="pontos-card__footer">
      


       
        <a
          href={pontos.url}
          target="_blank"
          rel="noopener noreferrer"
          className="pontos-card__link"
        >
          MAIS INFORMAÇÕES
        </a>
      </footer>
    </div>
  </div>
);

export default PontosCard;
