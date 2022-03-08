import React, { useEffect, useState } from 'react';
import { useCallback } from 'react/cjs/react.development';
import ItensCard from '../components/ItensCard';
import { useHistory} from 'react-router-dom'
import '../styles/search.css'
import { FaUserCircle, FaShoppingCart} from 'react-icons/fa';

export default function Search() {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q='
    const [handleCategory, setHandleCategory] = useState();
    const [category, setCategory] = useState('celular');
    const [itens, setItens] = useState([])
    const [itensCard, setItensCard] = useState([])
    const history = useHistory();

    const fetchData = useCallback(async () => {
        const fetchDados = await fetch(
            `${url}${category}`,
        ).then((response) => response.json());
        setItens(fetchDados.results)
    }, [category])

    useEffect(() => {
        fetchData()
    })
    
    
    // useEffect = () => {
    //     if (category === ''){
    //         setCategory('celular')
    // };

    function handleChange({ target: {value} }){
        setCategory(value)
        console.log(category);
    }

    return (
        <div className='page-search'>
            <h1 className='h1-search'>Aqui tem de tudo !</h1>
            <header className='header-search'>
                <div className='itens-header'>
                <button className='itens button1'> <FaUserCircle/> </button>
            <button
            className='itens button2'
                onClick={() => history.push('/cart')}>
                    <FaShoppingCart/>
            </button>
            </div>
            <input className= 'barra' type='text'
            onChange={handleChange}>
            </input>
            </header>
            <div className='products-vitrine'>
                <div className='card-principal'>
        { itens
        && itens.map(({ title, thumbnail, price, id }) => {
            return(
               <ItensCard
               
               itensName={title}
               itensImage={ thumbnail }
               itensPrice={price}
               itenID={id}
               />
            )
        })
        }</div>
 </div>
        </div>
    )
}