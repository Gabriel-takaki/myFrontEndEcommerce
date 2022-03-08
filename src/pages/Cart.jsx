import React, { useContext,  } from 'react';
import ItensCart from '../components/itensCart';
import { LoginContext } from '../context/LoginContext';
import { useHistory} from 'react-router-dom'
import '../styles/search.css'

export default function Cart() {
    const {cartItens, setCartItens} = useContext(LoginContext)
    const {valorCarrinho, setValorCarrinho} = useContext(LoginContext)
    const history = useHistory();
    
    let itens = cartItens
    const arrTotal = itens.map((products) => products.itensPrice)
    let soma = arrTotal.reduce(function(soma, i) {
        return soma  + i
    })
    setValorCarrinho(soma)
    return (
        <div className='header-search'>
            <div>
            <h1>Seu carrinho</h1>
            <button className='pay-button'
             onClick={() => history.push('/payment')}>Realizar pagamento</button>
             </div>
          
        <div className='pagamento'>
        <h1 className='valor-total'>Valor total: 
        <br />${valorCarrinho}
        </h1>
        
        <br />
        <button
        className='pay-button'
                onClick={() => history.push('/search')}>
                    Pesquisar +
            </button>
        </div>
        <div className='card-principal'>
        {
         itens.map(({ itensName, itensImage, itensPrice, itenID }  ) => {
            return(
                
               <ItensCart
               
               itensName={itensName}
               itensImage={ itensImage }
               itensPrice={itensPrice}
               itenID={itenID}
               />
            )
        })
    }
    </div>
        </div>
    )
}