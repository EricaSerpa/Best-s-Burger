import React from 'react';
import { statusTime, formatDate } from '../../../services/timeDate';
import { Button } from '../../Button';


export default function Orders({
    order,
    handlePreparing,
    handleFinished
}) {


    return (
        <div className="container-products">
            <article
                key={order.id}
                className="card-list">
                <div className="card-product" >
                    <h1 className="status-orders">
                        {order.status
                            .replace('pending', 'Pendente')
                            .replace('preparing', 'Preparando ...')
                            .replace('ready', 'Pronto')
                            .replace('finished', 'Entregue')}
                    </h1>
                    <div className="card-order">
                        <p>Comanda nº {order.id} - MESA {order.table}</p>
                        <hr className="line" />
                        <p>Cliente: {order.client_name}</p>
                        <p>Entrada do Pedido: {formatDate(order.createdAt)}</p>
                        <p> 🕓 Preparo: {statusTime(order.updatedAt)} min. </p>
                        <hr className="line" />
                        <ul className="order-list">
                            {order.Products.map((order) => (
                                <li key={order.id}>
                                    {order.qtd > 1 ? `Qtd. ${order.qtd} - ` : ''} {order.name} {order.flavor} {order.complement ? `+ ${order.complement}` : ''}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="btn-status">

                        <Button className="pending-btn"
                            onClick={() =>
                                handlePreparing(order)}
                        >PREPARAR
                        </Button>

                        <Button className="preparing-btn"
                            onClick={() =>
                                handleFinished(order)}
                        >FINALIZAR
                        </Button>
                    </div>
                </div>
            </article>
        </div>
    );
};

