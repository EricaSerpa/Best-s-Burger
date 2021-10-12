import React from 'react';
import { useState, useEffect } from "react";
import ItensMenu from '../../components/ItensMenu/itensMenu';
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Link } from 'react-router-dom';
import validateHall from './validateHall.js';
import CartArea from '../../components/CartArea/cartArea'
import { setOrder } from '../../services/data';

export const Menu = () => {

  const history = useHistory();
  const token = localStorage.getItem('token');
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [itemsList, setItemsList] = useState([]);
  const [formValues, setFormValues] = useState({
    table: '',
    customer: '',
    name: '',
  });

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    })
      .then(response => response.json())
      .then((json) => {
        console.log(json)
        setAllProducts(json)


        const breakfast = json.filter((item) => item.type === 'breakfast')
        setSelectedProducts(breakfast)


      })
      .catch((error) => console.log(error, 'Nenhum produtos selecionado'))
  }, [token])


  const filterMenu = (products) => {
    const filterItens = allProducts.filter((item) => item.type === products);
    setSelectedProducts(filterItens)
  }



  const addItem = (itemMenu) => {
    let productList = itemsList
    console.log(productList)
    const itemRepeated = itemsList.find((item) => item.id === itemMenu.id)
    if (itemsList.length > 0 && itemRepeated) {
      productList = itemsList.map((item) => {
        if (item.id === itemMenu.id) {
          item.quantity++
        }
        return item
      })
    } else {
      itemMenu.quantity = +1
      productList.push(itemMenu)
    }
    setItemsList([...productList])
  }

  const removeItem = (itemMenu) => {
    let productList = itemsList
    const itemRepeated = itemsList.find((item) => item.id === itemMenu.id)
    if (itemRepeated.quantity > 1) {
      productList = itemsList.map((item) => {
        if (item.id === itemMenu.id) {
          item.quantity--
        }
        return item
      })
    } else {
      productList = itemsList.filter((item) => item.id !== itemMenu.id)

    }
    setItemsList([...productList])
  }

  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateHall(formValues));
    console.log(itemsList)
    const orderList = itemsList.map(e => ({ "id": `${e.id}`, "qtd": `${e.quantity}` }))
    setOrder({

      "client": formValues.customer,
      "table": parseInt(formValues.table),
      "products": orderList

    })

      .then((resp) => resp.json())
      .then((json) => {
        console.log("deu certo")
        if (json.message) {
          alert('Ocorreu um erro, tente novamente!')
        } else {
          alert('Pedido realizado com sucesso!')
        }
      })
  }

  return (
    <div className="container-hall">
      <header className="header">
        <h1 className="attendant"> Atendente | {localStorage.getItem("name")} </h1>
        <Link className="linkRequest" to="/kitchen"> Pedidos </Link>
        <Link className="linkRequest" to="/kitchen"> Acompanhar Pedidos </Link>
        <Button className="logoutBtn" onClick={() => {
          localStorage.clear()
          history.push('/')
        }}>Sair
        </Button>
      </header>
      <div className='form-hall-inputs'>
        <form className="form-menu" onSubmit={handleSubmit}>
          <div className="customer">
            <Input
              inputType="text"
              inputName="customer"
              inputPlaceholder="Digite o nome do cliente"
              inputOnChange={handleInputChange}
              inputValue={formValues.customer} />
            {errors.customer && <p>{errors.customer}</p>}
            <select
              className="form-table"
              name="table"
              autoComplete="off"
              onChange={handleInputChange}
              value={formValues.table}>
              <option value=" ">Selecione a Mesa que está atendendo</option>
              <option value="1">001</option>
              <option value="2">002</option>
              <option value="3">003</option>
              <option value="4">004</option>
              <option value="5">005</option>
              <option value="6">006</option>
              {errors.table && <p>{errors.table}</p>}
            </select>
          </div>
          <div className='menu-btn'>
            <Button className='btn-menuA'
              type="submit"
              value='Menu principal'
              onClick={() => filterMenu('all-day')}>Menu principal
           </Button>
            <Button className='btn-menuB'
              type="submit"
              value='Menu matinal'
              onClick={() => filterMenu('breakfast')}>Menu matinal
           </Button>

          </div>
          <div className="container-menu">
            {selectedProducts.map((item) => {
              return (
                <ItensMenu
                  {...item}
                  key={item.id}
                  onClick={() => {
                    addItem(item)
                  }}
                />
              );
            })}
          </div>
          <CartArea
            arrItem={itemsList}
            addItem={addItem}
            removeItem={removeItem}
          />
        </form>
      </div>
    </div>
  );
}
