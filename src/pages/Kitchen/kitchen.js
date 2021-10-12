import React from 'react';
import { useHistory } from "react-router";
import { Button } from '../../components/Button/index.js';

export const Kitchen = () => {

  const history = useHistory();

  return (
    <div className="container-kitchen">
      <h1>Cozinha</h1>
      <Button className="logoutBtn" onClick={() => {
        localStorage.clear()
        history.push('/')
      }}>Sair</Button>

      <Button className="returnBtn" onClick={() => {
        history.push('/Menu')
      }}>Voltar</Button>
    </div >
  );
};