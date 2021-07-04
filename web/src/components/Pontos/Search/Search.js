  
import React, { useState, useEffect } from 'react';
import useApi from 'components/utils/useApi';
import { Link } from 'react-router-dom';

import PontosList from '../List/List';
import './Search.css';

const PontosSearch = () => {
  const [search, setSearch] = useState('');
  const [load, loadInfo] = useApi({
    url: '/pontos',
    method: 'get',
    params: {
      _embed: 'comments',
      _order: 'desc',
      _sort: 'id',
      title_like: search || undefined,
    },
  });

  useEffect(() => {
    load();
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
      <PontosList
        pontos={loadInfo.data}
        loading={loadInfo.loading}
        error={loadInfo.error}
      />
    </div>
  );
};

export default PontosSearch;
