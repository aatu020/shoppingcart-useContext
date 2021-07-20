import React, { useContext } from 'react';
import { C } from '../Context';

const SingleProduct = ({ p }) => {
  const { cart, setCart } = useContext(C);

  function addToCart() {
    setCart([...cart, p]);
  }

  function removeFromCart() {
    setCart(cart.filter(c => c.id !== p.id));
  }

  return (
    <>
      <div class="products">
        <img src={p.image} alt={p.name} />
        <div className="productDesc">
          <span>{p.name}</span>
          <span>$ {p.price.substring(0, 3)}</span>
        </div>
        {cart.includes(p) ? (
          <button className="cart-btn" onClick={removeFromCart}>
            Remove from cart
          </button>
        ) : (
          <button className="cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
