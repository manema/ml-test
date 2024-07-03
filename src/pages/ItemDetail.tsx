

import { ItemResult, conditionMap } from '@constants/index';
import React, { useEffect, useState } from 'react';

import '@styles/item-detail.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import DefaultError from '@components/DefaultError';

type ItemDetailProps = {
  data: ItemResult
}

const ItemDetail = ({ data } : ItemDetailProps) => {
  const [clientData, setClientData] = useState<ItemResult>(data);
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  let { id } = useParams();
  const { item } = clientData || {};

  useEffect(() => {
    if (!data) {
      const fetchItems = async () => {
        try {
          setIsDataLoading(true);
          setError(null);
          const response = await axios.get(`/api/items/${id}`);
          setClientData(response.data);
        } catch (err) {
          setError(err as string);
        } finally {
          setIsDataLoading(false);
        }
      }

      fetchItems()
    }
  }, [data, id])

  return (
    <>
   
    <div className="item-detail-wrapper">
      {error && <DefaultError className="item-detail-error" />}
      { isDataLoading && 
        <Rings
          visible
          height="100"
          width="100"
          color="#0000001A"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass="item-detail-loader"
        />}
      { item &&
        <>
          <div className="item-content">
            <img src={item?.picture} />
            <span className="item-content-title">Descripción del producto</span>
            <p className="item-content-description">{item?.description}</p>
          </div>
          <div className="item-aside">
            <span className="item-aside-condition">{`${conditionMap.get(item?.condition)} ${ item?.sold_quantity ? `- ${item?.sold_quantity} vendidos}` : ''}`}</span>
            <h1 className="item-aside-title">{item?.title}</h1>
            <span className="item-aside-price">
              $
              {` ${item?.price?.amount}`}
              <span className=''>{item?.price?.decimals || '00'}</span>
            </span>
            <button className="buy-btn">Comprar</button>
          </div>
        </>
      } 
    </div>
    </>
  );
};

export default ItemDetail;
