import React from 'react'

import CardNota from '../CardNota';

import "./estilo.css"

class ListaDeNotas extends React.Component {

    render(){
        return(
            <ul className="lista">
                {
                    this.props.notas.map((nota, k) =>{
                        return(
                            <li 
                                className="item-da-lista"
                                key={k}
                            >
                                <CardNota titulo={nota.titulo} texto={nota.texto}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default ListaDeNotas;