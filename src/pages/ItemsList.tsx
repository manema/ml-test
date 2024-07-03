import DefaultError from '@components/DefaultError';
import ItemListElement from '@components/ItemListElement';
import { ItemType } from '@constants/index';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';



const ItemsList = ({ data } : { data: ItemType[]}) => {
  const [items, setItems] = useState<ItemType[]>(data);
  let [searchParams] = useSearchParams();
  const [isDataLoading, setIsDataLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const search = searchParams.get("search");

  useEffect(() => {
    if (!data) {
      const fetchItems = async () => {
        try {
            setError(null);
            setIsDataLoading(true);
            const response = await axios.get(`/api/items?q=${search}`);
            setItems(response.data);
          } catch (err) {
            setError(err as string);
          } finally {
            setIsDataLoading(false);
          }
      }

      fetchItems()
    }
  }, [data, search])
  return (
    <div className={`item-list-wrapper ${isDataLoading || error ? 'loading' : ''}`}>
      {error && <DefaultError className="item-list-error" />}
      {
      isDataLoading ? 
      <Rings
        visible
        height="100"
        width="100"
        color="#0000001A"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass="item-list-loader"
      /> :
      
      items?.map((item) =>
        <ItemListElement
          key={item.id} 
          {...item}
        />
      )}
    </div>
  );
};

export default ItemsList;
