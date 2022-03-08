import PropTypes from 'prop-types';
import React from 'react';
import LoginContextProvider from './context/LoginContext';

function ContextProviders(props) {
    const { children } = props;
    return (
      
            <LoginContextProvider>{children}</LoginContextProvider>

    );
  }
  
  ContextProviders.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default ContextProviders;
  