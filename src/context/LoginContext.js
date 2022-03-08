import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [login, setLogin] = useState();
  const [adress, setAdress] = useState();
  const [cartItens, setCartItens] = useState([]);
  const [valorCarrinho, setValorCarrinho] = useState();
  const [numberCard, setNumberCard] = useState();
  const value = {
    numberCard,
    setNumberCard,
    adress,
    setAdress,
    login,
    setLogin,
    cartItens,
    setCartItens,
    valorCarrinho,
    setValorCarrinho,
  };

  return (
    <LoginContext.Provider value={ value }>
      { children }
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;

LoginContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
