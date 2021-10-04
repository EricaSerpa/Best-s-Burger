
import React from 'react';
import ButtonIntens from '../Button';

export default function CartItem(props) {
    return (
      <article key={props.id}>
        <p>{props.nome}</p>
        <p>{props.preco}</p>
        <ButtonIntens
          buttonType='text'
          buttonOnClick={props.remove}
          buttonText='-'
        />
      </article> 
   )
}