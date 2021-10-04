import React from 'react';

export default function ItensMenu({
    id,
    name,
    price,
    image,
    flavor,
    complement,
    onClickRemove,
    onClick
}) {
    return (
        <div>
            <article
                key={id}
                className="itens-menu"
                flavor={flavor}
                complement={complement}
                onClick={onClick} >
                <img className="products-img" src={image} alt={`imagem do produto ${name}`} />
                {/*<span>{id}</span>*/}
                <span>{name}</span>
                <span>Preço: R$ {price},00</span>
            </article>
        </div>
    );
};