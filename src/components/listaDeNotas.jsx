import React from 'react'

import CardNota from './CardNota';

class ListaDeNotas extends React.Component {
    render(){
        return(
            <ul>
                <li>
                    <CardNota/>
                </li>
                <li>
                    <CardNota/>            
                </li>
                <li>
                    <CardNota/>
                </li>
            </ul>
        )
    }
}

export default ListaDeNotas;