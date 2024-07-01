import React from 'react';
import '@styles/search-bar.scss';

const SearchBar = () => {

  return (
    <>
      <form action="/items" className="search-bar">
        <input placeholder="Nunca dejes de buscar" className="search-bar-input" name="search"/>
        <button className="magnifying-btn"><img src="/magnifying-glass.svg" alt="icono de busqueda" /></button>
      </form>
    </>
  );
};

export default SearchBar;
