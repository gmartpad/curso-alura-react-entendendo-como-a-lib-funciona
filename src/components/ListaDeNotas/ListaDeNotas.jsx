import React from 'react'

import CardNota from '../CardNota';

import "./estilo.css"

class ListaDeNotas extends React.Component {
    render(){
        return(
            <ul className="lista">
                {
                    Array.of("Trabalho", "Trabalho", "Estudos").map((i, k) =>{
                        return(
                            <li 
                                className="item-da-lista"
                                key={k}
                            >
                                <h2>{i}</h2>
                                <CardNota/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;