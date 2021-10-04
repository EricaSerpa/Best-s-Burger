import React from 'react';
import { useState, useEffect } from "react";
//import { getProducts } from '../../services/data';
import ItensMenu from '../../components/ItensMenu/itensMenu';
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';
import { Input } from '../../components/Input/index.js';
import { Link } from 'react-router-dom';
import validateHall from './validateHall.js';

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

  /*useEffect(() => {
    products().then((result) => {
      result.json().then((data) => {
        console.log(data)

      })
    })*/

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
    console.log(products)
    setSelectedProducts(filterItens)
  }

  const [errors, setErrors] = useState({});


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateHall(formValues));
  }
  /*localStorage.removeItem('token')
  history.push('/');*/

  /*const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token')
    history.push('/');*/


  return (
    <div className="container-hall">
      <header className="header">
        <h1 className="attendant"> Atendente | {localStorage.getItem("name")} </h1>
        <Button className="link-btn">
          <Link className="link" to="/kitchen"> Pedidos </Link>
        </Button>
        <Button className="link-btn">
          <Link className="link" to="/kitchen"> Acompanhar Pedidos </Link>
        </Button>
        <Button className="logoutBtn" onClick={() => {
          localStorage.clear()
          history.push('/')
        }}>Sair</Button>
      </header>
      <div className='form-hall-inputs'>
        <form onSubmit={handleSubmit}>
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
            <option value="table1">001</option>
            <option value="table2">002</option>
            <option value="table3">003</option>
            <option value="table4">004</option>
            <option value="table5">005</option>
            <option value="table6">006</option>
            {errors.table && <p>{errors.table}</p>}
          </select>
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
          <div>
            {selectedProducts.map((item) => {
              return (
                <ItensMenu
                  {...item}
                  key={item.id}
                  onClick={() => {
                    setItemsList([...itemsList, { ...item }])
                    console.log(item)
                  }}
                />
              );
            })}
            <div className='complement-container'>
              <button className='complement-btn' onClick={() => filterMenu('all-day')} value='queijo'>Queijo</button>
              <button className='complement-btn' onClick={() => filterMenu('all-day')} value='ovo'>Ovo</button>
              <button className='complement-btn' onClick={() => filterMenu('all-day')} value=''>Nenhum</button>
              <div className='options-container'>
                <button className='options-btn' onClick={() => filterMenu('all-day')} value='carne'>Carne</button>
                <button className='options-btn' onClick={() => filterMenu('all-day')} value='frango'>Frango</button>
                <button className='options-btn' onClick={() => filterMenu('all-day')} value='vegetariano'>Vegetariano</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
