import React from 'react';
import { useHistory } from "react-router";
//import { Button } from '../../components/Button/index.js';

export const Kitchen = () => {

  const history = useHistory();

  return (
    <div className="container-kitchen">
      <h1>Cozinha</h1>
      <button className='kitchen-btn' onClick={() => {
        localStorage.removeItem('token')
        history.push('/')
      }}>Sair
      </button>
    </div >
  );
};