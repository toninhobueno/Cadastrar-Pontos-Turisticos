import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import PontosList from '../List/List';
import './Search.css';

const PontosSearch = () => {
  const [pontos, setPontos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const params = {};
    if (search) {
      params.title_like = search;
    }
    axios.get('http://localhost:5000/pontos?_embed=comments&_order=desc&_sort=id', { params })
      .then((response) => {
        setPontos(response.data);
      });
  }, [search]);

  return (
    <div className="pontos-search">
      <header className="pontos-search__header">
        <h1>PONTOS TURISTICOS DO BRASIL</h1>
        <Link to="/create">Novo Ponto Turistico</Link>
      </header>
      <input
        type="search"
        className="pontos-search__input"
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <PontosList pontos={pontos} loading={!pontos.length} />
    </div>
  );
};

export default PontosSearch;
