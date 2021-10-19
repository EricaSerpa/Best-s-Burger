import React from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';
import { getAllOrders } from '../../services/data';
import OrdersDelivery from "../../components/CardOrders/OrderDelivery/ordersDelivery";


export const ReadyOrder = () => {

  const [readyOrders, setReadyOrders] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const sortListOrders = () => readyOrders.sort((a, b) => b.id - a.id);

  useEffect(() => {
    getAllOrders()
      .then((response) => {
        response.json()
          .then((data) => {
            const products = data;
            const deliveryOrders = products.filter((item) =>
              item.status.includes('ready') ||
              item.status.includes('finished')
            );
            setReadyOrders(deliveryOrders);
          });
      });
  }, []);




  const handleDelivery = (data) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders/';
    const id = data.id;
    const status = { status: 'finished' };

    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => response.json()
    )
      .then((response) => {
        setReadyOrders(readyOrders.map((item) => item.id === data.id ? {
          ...data,
          status: response.status,
        }
          : item))
      })
  };

  return (
    <div className="container-kitchen">
      <header className="header-kitchen">
        <h1 className="atendent">Atendente | {localStorage.getItem("name")} </h1>
        <div className="status-btn">
          <Button
            className="btn-ready"
            type="submit"
            text="Em preparo"
            onClick={() => {
              history.push('/readyOrders')
            }}>Pedidos Prontos para Entrega
          </Button>
          <Button
            className="btn-history"
            type="submit"
            text="Histórico dos Pedidos"
            onClick={() => {
              history.push('/orderHistory')
            }}>Histórico dos Pedidos
          </Button>
          <Button
            className="returnBtn"
            onClick={() => {
              history.push('/Menu')
            }}>Voltar
          </Button>
          <Button className="logoutBtn" onClick={() => {
            localStorage.clear()
            history.push('/')
          }}>Sair
        </Button>
        </div>
      </header>
      <div className="container-card-orders">
        {sortListOrders().map((order) => (
          (order.status === 'ready' || order.status === 'finished')
          &&
          <OrdersDelivery
            key={order.id}
            order={order}
            handleDelivery={handleDelivery}
          />
        ))}
      </div>
    </div>
  );
};