import React from 'react';
import '@styles/search-bar.scss';
import { useNavigate } from 'react-router-dom';
import { routes } from '@constants/index';

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const searchValue = formData.get('search') as string;
    navigate(`${routes.items}?search=${searchValue}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="search-bar" role="search">
        <input placeholder="Nunca dejes de buscar" className="search-bar-input" name="search"/>
        <button className="magnifying-btn"><img src="/magnifying-glass.svg" alt="icono de busqueda" /></button>
      </form>
    </>
  );
};

export default SearchBar;
