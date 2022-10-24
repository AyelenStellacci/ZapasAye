import React from 'react';
import { Item } from '../ItemListContainer/Item';

export const ItemList = ({ listaProductos }) => {

  return (
    <>
      {listaProductos.map((producto) =>  
              <Item key={producto.id} product={producto}/>
        )}
    </>
  )
}