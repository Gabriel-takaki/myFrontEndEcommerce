import react from 'react';
import pix from '../imagens/pix.jpeg'
// import '../styles/search.css'
import { useHistory } from 'react-router-dom';


function PayMetods() {

const history = useHistory();  

  return (
    <div className='itens-div'>
      <img className='iten-image' src={ pix } />
      <button onClick={() => history.push('/cart')}>
          Retornar
      </button>

    </div>
  );
}


export default PayMetods;
