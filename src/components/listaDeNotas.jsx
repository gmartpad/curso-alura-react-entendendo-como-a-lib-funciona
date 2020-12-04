import React from 'react'

import CardNota from './CardNota';

class ListaDeNotas extends React.Component {
    render(){
        return(
            <ul>
                {
                    Array.of("Trabalho", "Trabalho", "Estudos").map((i, k) => 
                        <li key={k}>
                            <h2>{i.valueOf}</h2>
                            <CardNota/>
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default ListaDeNotas;