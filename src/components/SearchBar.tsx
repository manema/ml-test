import React from 'react';

const SearchBar = () => {

  return (
    <>
      <form action="/items">
        <input placeholder="Nunca dejes de buscar" name="search"/>
        <button>lupa</button>
      </form>
    </>
  );
};

export default SearchBar;
