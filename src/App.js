import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </>
    </BrowserRouter>
  );
}
