import React from 'react';
import ButtonItens from '../Button';

export default function CartItem({
  id,
  quantity,
  name,
  price,
  remove,
  add

}) {
  return (
    <article
      key={id}>
      <p>{quantity}</p>
      <p>{name}</p>
      <p>{price}</p>
      <ButtonItens
        btnType='text'
        btnOnClick={remove}
        btnText='-'
      />
      <ButtonItens
        btnType='text'
        btnOnClick={add}
        btnText='+'
      />
    </article>
  );
};


