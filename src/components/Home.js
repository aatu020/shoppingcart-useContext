import React, { useState, useContext } from 'react';
import SingleProduct from './SingleProduct';
import faker from 'faker';
import './Home.css';
import { C } from '../Context';

faker.seed(100);

const Home = () => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image()
  }));

  const [products, setProducts] = useState(productArray);

  return (
    <>
      <div className="productContainer">
        {products.map(prod => {
          return <SingleProduct p={prod} />;
        })}
      </div>
    </>
  );
};

export default Home;
