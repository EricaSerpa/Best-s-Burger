import React from 'react';
import CartItem from '../CartItem/cartItem';

export default function CartArea({ arrItem, removeButton }) {
    return (
      <section>
        {arrItem.map((item) => {
          return (
            <CartItem
              key={item.id}  
              nome={item.nome}
              preco={item.preco}
              remove={removeButton}
            />)
        })}
      </section> 
      
    )
  }