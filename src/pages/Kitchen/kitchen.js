import React from 'react';
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';
import { getAllOrders } from '../../services/data';
import Orders from "../../components/CardOrders/Orders/orders";



export const Kitchen = () => {

  const [allOrders, setAllOrders] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const sortListOrders = () => allOrders.sort((a, b) => b.id - a.id);


  useEffect(() => {
    getAllOrders()
      .then((response) => {
        response.json()
          .then((json) => {
            console.log(json)
            const preparingOrder = json.filter(
              (item) =>
                item.status.includes('preparing') ||
                item.status.includes('pending')
            );
            setAllOrders(preparingOrder);
          });
      });
  }, []);


  const handlePreparing = (data) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders/';
    const id = data.id;
    const status = { status: 'preparing' };

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
        setAllOrders(allOrders.map((item) => item.id === data.id ? {
          ...data,
          status: response.status,
        }
          : item))

      })

  };

  const handleFinished = (data) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders/';
    const id = data.id;
    const status = { status: 'ready' };

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
        setAllOrders(allOrders.map((item) => item.id === data.id ? {
          ...data,
          status: response.status,
        }
          : item))
      })
  };

  return (
    <div className="container-kitchen">
      <header className="header-kitchen">
        <h1 className="chef">Chef | {localStorage.getItem("name")} </h1>
        <div className="status-btn">
          <Button
            className="btn-pending"
            type="submit"
            text="Em preparo"
            onClick={() => {
              history.push('/Kitchen')
            }}>Pedidos Pendentes
          </Button>
          <Button
            className="btn-history"
            type="submit"
            text="Histórico dos Pedidos"
            onClick={() => {
              history.push('/orderHistory')
            }}>Histórico dos Pedidos
          </Button>
          <Button className="logoutBtn" onClick={() => {
            localStorage.clear()
            history.push('/')
          }}>Sair
        </Button>
        </div>
      </header>
      <div className="header-title">
        <h3 className="title">PEDIDOS PENDENTES</h3>
      </div>
      <div className="container-card-orders">
        {sortListOrders().map((order) => (
          (order.status === 'pending' || order.status === 'preparing')
          &&
          <Orders
            key={order.id}
            order={order}
            handlePreparing={handlePreparing}
            handleFinished={handleFinished}
          />
        ))}
      </div>
    </div>
  );
};