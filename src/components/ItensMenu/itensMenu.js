import React from 'react';

export default function ItensMenu({
    id,
    name,
    price,
    image,
    flavor,
    complement,
    onClick
}) {
    return (
        <div className="container-products">
            <article
                key={id}
                className="card-list">
                <div className="card" onClick={onClick} >
                    <img className="products-img" src={image} alt={`imagem do produto ${name}`} />
                    {/*<span>{id}</span>*/}
                    <div className="product-name">
                        <span className="complement">{name} {flavor} {complement ? `+${complement}` : ''} </span>
                        <span className="price">Preço: R$ {price},00</span>
                    </div>
                </div>
            </article>
        </div>
    );
};


