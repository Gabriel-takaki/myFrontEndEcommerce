import React, { useState, useContext } from 'react';
import { useHistory} from 'react-router-dom'
import { LoginContext } from '../context/LoginContext';

function cadastraCartao() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isTheButtonDisabled, setIsTheButtonDisabled] = useState(true);
    const { setLogin, setAdress, adress } = useContext(LoginContext);
    
    const history = useHistory();
    
    
    function handleInputNome({ target: { value } }) {
        setEmail(value);
    }

  function handleInputNumber({ target: { value } }) {
    setPassword(value);
  }
  function handleInputSecure({ target: { value } }) {
    setAdress(value);
  }

  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    setLogin({ email })
    history.push('/search')

  }

  return (
    <div>
      <input
        type="text"
        name="Nome"
        placeholder="Nome Completo"
        onChange={ handleInputNome }
      />
      <input
        type="text"
        name="NCartão"
        placeholder="N cartão"
        onChange={ handleInputNumber }
      />
       <input
        type="text"
        name="adress"
        placeholder="Codigo de segurança"
        onChange={ handleInputSecure }
      />
    </div>
  );
}

export default cadastraCartao;
