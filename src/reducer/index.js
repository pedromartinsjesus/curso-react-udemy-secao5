import React, { useState } from 'react';
import useStore from './somaReducer';




// Nesta aula só foi apresentado a arquitetura flux que é a arquitetura
// do Redux 

function ReducerHook() {


    const [numero, setNumero] = useState('');
    const [segundoNumero, setSegundoNumero] = useState('');

    const [store, dispatch] = useStore()


    const somar = () => {

        const numeroInt = parseInt(numero)
        const segNumeroInt = parseInt(segundoNumero)

        dispatch({
            type: 'SOMA',
            payload: numeroInt + segNumeroInt,
        })

    }






    return (
        <div>
            FNumber:  <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} />
            <br />

     SNumber: <input type="number" value={segundoNumero} onChange={(e) => setSegundoNumero(e.target.value)} />
            <br />

     Result:  <input type="number" value={store.resultado} readOnly />

            <br />

            <button onClick={somar}>ADD</button>


        </div>
    );
}

export default ReducerHook;
