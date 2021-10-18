import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from './pages/Login/login';
import { Register } from './pages/Register/register';
import { Menu } from './pages/Menu/menu';
import { Kitchen } from './pages/Kitchen/kitchen';
import { ReadyOrder } from './pages/ReadyOrder/readyOrder';
import { OrderHistory } from './pages/Kitchen/orderHistory';
import { NotFound } from './pages/NotFound/notFound';
import PrivateRoute from './routes'
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={(Login)} />
        <Route exact path="/login" component={(Login)} />
        <Route path="/register" component={(Register)} />
        <PrivateRoute path="/menu" component={Menu} />
        <PrivateRoute path="/kitchen" component={Kitchen} />
        <PrivateRoute path="/ReadyOrders" component={ReadyOrder} />
        <PrivateRoute path="/OrderHistory" component={OrderHistory} />
        <Route component={(NotFound)} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
