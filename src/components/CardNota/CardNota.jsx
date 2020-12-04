import React from 'react'
import "./estilo.css"

class CardNota extends React.Component {
    render() {
        return (
            <section
                className="section-da-lista"
            >
                {/* <header>
                    <h3>
                        Título
                    </h3>
                </header> */}
                <p>
                    Escreva sua nota
                </p>
            </section>
        )
    }
}

export default CardNota;