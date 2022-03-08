import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import '../styles/search.css'
import { MdDeleteForever} from 'react-icons/md';


function ItensCart({ itensName, itensImage, itensPrice, itenID }) {
    const {cartItens, setCartItens} = useContext(LoginContext)
  
    const removeProduct = (target) => {
      const filtred = cartItens.filter((product) => product.itenID !== target)
      setCartItens(filtred)
      console.log(filtred);

    }

  return (
    <div className='card'>
      <div className='cards'>
      <img className='iten-image' src={ itensImage } alt={ itensName } />
      <h4 className='iten-name'>{ itensName }</h4>
      {/* <h3 className='iten-id'>{ itenID }</h3> */}
      <h5 className='iten-price'> R$ {itensPrice} </h5>
      <button className='delet-product' type='submit' onClick={() => removeProduct(itenID)} >
        <MdDeleteForever/>
      </button>
      </div>

    </div>
  );
}


export default ItensCart;
