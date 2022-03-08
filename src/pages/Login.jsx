import React, { useState, useContext } from 'react';
import { useHistory} from 'react-router-dom'
import { LoginContext } from '../context/LoginContext';
import '../styles/login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isTheButtonDisabled, setIsTheButtonDisabled] = useState(true);
const { setLogin, setAdress, adress } = useContext(LoginContext);

const history = useHistory();

  function enabledButton() {
    const minCharactersPass = 3;
    const regexEmail = (/\S+@\S+\.co/);
    const validateEmail = regexEmail.test(String(email));

    if (password.length >= minCharactersPass && validateEmail && adress.length > 7) {
      setIsTheButtonDisabled(false);
    } else {
      setIsTheButtonDisabled(true);
    }
  }

  function handleInputEmail({ target: { value } }) {
    setEmail(value);
    enabledButton();
  }

  function handleInputPass({ target: { value } }) {
    setPassword(value);
    enabledButton();
  }
  function handleInputAdress({ target: { value } }) {
    setAdress(value);
    enabledButton();
  }

  function handleClick() {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    setLogin({ email })
    history.push('/search')

  }

  return (
    <div className='LoginPage'>
      <div className='LoginForm'>
        <h1 className='h1-login'>Bem vindo ao meu Ecommerce.</h1>
      <input
      className='input-login1'
        type="text"
        name="email"
        placeholder="Email"
        onChange={ handleInputEmail }
      />
      <input
      className='input-login2'
        type="text"
        name="password"
        placeholder="Senha"
        onChange={ handleInputPass }
      />
       <input
      className='input-login3'
        type="text"
        name="adress"
        placeholder="CPF"
        onChange={ handleInputAdress }
      />
      <input
      className='botao-hab'
        type="button"
        value="Entrar"
        data-testid="login-submit-btn"
        disabled={ isTheButtonDisabled }
        onClick={ handleClick }
        />
        </div>
    </div>
  );
}

export default Login;
