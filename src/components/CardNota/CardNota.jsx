import React from 'react'
import "./estilo.css"

class CardNota extends React.Component {
    render() {
        return (
            <section
                className="section-da-lista"
            >
                <header>
                    <h3>
                        {this.props.titulo}
                    </h3>
                </header>
                <p>
                    {this.props.texto}
                </p>
            </section>
        )
    }
}

export default CardNota;