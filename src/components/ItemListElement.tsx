import React from 'react';
import '@styles/item-list-element.scss';
import { Link } from 'react-router-dom';
import { ItemType } from '@constants/index';

const ItemListElement = ({ picture, title, price, neighborhood, id, free_shipping }: ItemType ) => {

  return (
    <Link 
      className="item-list-container"
      to={`/items/${id}`}
    >
      <img src={picture} alt="imagen del producto" className="item-list-image" />
      <div className="item-list-content-wrapper">
        <div className="item-list-content">
          <div>
            <span className="item-list-content-price">
                $
              {` ${price?.amount}`}
              <span className=''>{price?.decimals || '00'}</span>
              {free_shipping && <img src="/truck.svg" className="item-list-content-shipping-icon"/>}
            </span>
          </div>
          <span className="item-list-content-title">{title}</span>
        </div>
        <span className="item-list-location">{neighborhood}</span>
      </div>
    </Link>
  );
};

export default ItemListElement;
