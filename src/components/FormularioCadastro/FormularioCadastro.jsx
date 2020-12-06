import React from 'react'

import "./estilo.css"

class FormularioCadastro extends React.Component {

  constructor(){
    super();
    this.titulo = "";
  }

  handleMudancaTitulo(e) {
    this.titulo = e.target.value
    console.log(this.titulo)
  }

  render() {

    return (

      <form>
        <input 
          type='text' 
          placeholder='Título'
          onChange={this.handleMudancaTitulo}
        />
        <textarea 
          placeholder='Escreva sua nota' 
          rows={15}  
        />
        <button>Criar Nota</button>
      </form>
    )
  }
}

export default FormularioCadastro;