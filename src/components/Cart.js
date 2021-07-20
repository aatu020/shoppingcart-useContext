import React, { useState, useEffect, useContext } from 'react';
import SingleProduct from './SingleProduct';
import { C } from '../Context';

const Cart = () => {
  const { cart } = useContext(C);

  const [totalPrice, setTotalPrice] = useState(0);

  console.log(cart);

  function addingPrice() {
    setTotalPrice(cart.reduce((acc, ele) => acc + Number(ele.price), 0));
  }

  useEffect(() => {
    addingPrice();
  }, [cart]);

  return (
    <>
      <span>Total Product Added - {cart.length}</span>
      <br />
      <span>Total - $ {totalPrice} </span>
      <div className="productContainer">
        {cart.map(prod => (
          <SingleProduct p={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
};

export default Cart;
