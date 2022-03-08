import PropTypes from 'prop-types';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import carrinho from '../imagens/carrinho.png'
import '../styles/search.css'

function ItensCard({ itensName, itensImage, itensPrice, itenID, }) {
  const {cartItens, setCartItens} = useContext(LoginContext)

const addProductToCart=(target)=> {
  console.log(target);
  let newObj = cartItens.concat(target) 
  setCartItens(newObj)
  console.log(cartItens);
}
  return (
    <div className='card'>

      <div className='cards'>

      <h3 className='iten-name'>{ itensName }</h3>
      <div className='imgBox'>
      <img className='mouse' src={ itensImage } alt={ itensName } />
      </div>
      <h2 className='price'> R$ {itensPrice} </h2>
      {/* <h5 className='iten-id'> {itenID} </h5> */}
      <button className='buy' type='submit' onClick={() => addProductToCart({itensName, itensImage,itensPrice, itenID})} >
      <img className='cartB' src={carrinho} alt="" />
      </button>
      </div>
      </div>
  );

}

ItensCard.propTypes = {
  itensImage: PropTypes.string.isRequired,
  itensName: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ItensCard;
