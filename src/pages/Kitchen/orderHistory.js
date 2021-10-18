import React from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';
import { getAllOrders } from '../../services/data';
import AllOrders from "../../components/CardOrders/AllOrders/allOrders";



export const OrderHistory = () => {

  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const sortListOrders = () => orders.sort((a, b) => b.id - a.id);


  useEffect(() => {
    getAllOrders()
      .then((response) => {
        response.json()
          .then((order) => {
            setOrders(order);
          });
      });
  }, []);


  const handleDelete = (order) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders/';
    const id = order.id;
    const status = { status: 'ready' };

    fetch(url + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
      });
    });
  };


  return (
    <div className="container-kitchen">
      <header className="header-kitchen">
        <h1 className="chef"> 🍽️  COZINHA - Chef | {localStorage.getItem("name")}</h1>
        <div className="status-btn">
          <Button
            className="btn-preparo"
            type="submit"
            text="Em preparo"
            onClick={() => {
              history.push('/Kitchen')
            }}>Pedidos Pendentes
          </Button>
          <Button
            className="btn-pronto"
            type="submit"
            text="Histórico dos Pedidos"
            onClick={() => {
              history.push('/orderHistory')
            }}>Histórico dos Pedidos
          </Button>
          <Button
            className="returnBtn"
            onClick={() => {
              history.push('/Kitchen')
            }}>Voltar
          </Button>
          <Button className="logoutBtn" onClick={() => {
            localStorage.clear()
            history.push('/')
          }}>Sair
        </Button>
        </div>
      </header>
      <div className="header-title">
        <h3 className="title">HISTÓRICO DE TODOS OS PEDIDOS</h3>
      </div>
      <div className="container-card-orders">
        {sortListOrders().map((order) => (
          <AllOrders
            key={order.id}
            order={order}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};