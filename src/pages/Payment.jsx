import React, { useContext, useState} from 'react';
import ItensCart from '../components/itensCart';
import { LoginContext } from '../context/LoginContext';
import { useHistory} from 'react-router-dom'
import '../styles/search.css'

export default function Payment() {
    const {cartItens, } = useContext(LoginContext)
    const {valorCarrinho} = useContext(LoginContext)
    const [metod, setMetod] = useState()
    const history = useHistory();

    let itens = cartItens

    function handleChangeMetod({ target: {value} }){
        setMetod(value)
        console.log(metod);
        if(metod === 'Pix'){
            <span>Gerar qrCODE</span>
        }
    }

   
    return (
        <div>
            <h1>Realizar pagamento</h1>
            <h2>Seus itens: </h2>
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
        <div className='pagamento'>
        <h1 className='valor-total'>Valor total: 
        <br />${valorCarrinho}
        </h1>

        <label for="payMetod">Método de pagamento:</label>
        <br />

       <div>
        <input className='pay-button2' type="text" list="metods" id='payMetod' placeholder='PIX' onClick={handleChangeMetod} />
<datalist id="metods">
  <option>Pix</option>
  <option>C.Credito</option>
</datalist>
</div>
<br />
<button className= 'pay-button'onClick={() => history.push('/paymetods')}>Gerar Pix</button>
<button className= 'pay-button'>Cadastrar Cartão</button>
<br />
<br />
<br />
<br />
    </div>
        </div>
        </div>
    )
}