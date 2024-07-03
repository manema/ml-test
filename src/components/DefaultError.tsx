import React from 'react';
import '@styles/default-error.scss';

type DefaultErrorProps = {
  className?: string
}

const DefaultError = ({ className }: DefaultErrorProps) =>
  <div className={`default-error ${className || ''}`}>Ha ocurrido un error. Por favor, contacta al soporte</div>;


export default DefaultError;
