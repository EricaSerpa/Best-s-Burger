import React from 'react';
import { Button } from '../Button';

export default function CartArea({
    arrItem,
    addItem,
    removeItem,
    orderList

}) {

    const totalCommand = arrItem.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="container">
            <div className="command-container">
                <header>
                    <h5> 📝  Comanda</h5>
                </header>



                <div className="product-container">
                    <section className="command-item">
                        {arrItem.map((item) => {
                            console.log(item)
                            return (
                                <div className="item"
                                    key={item.id}>
                                    {item.name} {item.flavor} {item.complement ? `+ ${item.complement}` : ''}
                                    R$ {item.price * item.quantity},00
                                    <div className="quantity-btn">
                                        <Button className='cart-btn'
                                            onClick={() => removeItem(item)}>-
                                        </Button>
                                        <label type="number" name="quantity"> {item.quantity}</label>
                                        <Button className='cart-btn'
                                            onClick={() => addItem(item)}>+
                                        </Button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="totalCommand">
                            <label className="total">Total: </label>
                            <label className="valor"> R${totalCommand},00 </label>
                        </div>
                        <div className="confirm-button">
                            <Button
                                className="btn-confirm"
                                onClick={orderList}>
                                Enviar Pedido
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};


