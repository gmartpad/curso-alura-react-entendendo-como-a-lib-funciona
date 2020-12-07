import React from 'react'

import "./estilo.css"

class FormularioCadastro extends React.Component {

  constructor(){
    super();
    this.titulo = "";
    this.texto = "";
  }

  //quando função tem _ no começo do nome
  //quer dizer que ela é privada

  _handleMudancaTitulo(e) {
    e.stopPropagation();
    this.titulo = e.target.value
    // console.log(this.titulo)
  }

  _handleMudancaTexto(e) {
    e.stopPropagation();
    this.texto = e.target.value
    // console.log(this.texto)
  }

  _criarNota(e) {

    e.preventDefault();
    e.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
    // console.log(`nota criada ${this.titulo} - ${this.texto}`);
  }

  render() {

    return (

      <form
        onSubmit={this._criarNota.bind(this)}
      >
        <input 
          type='text' 
          placeholder='Título'
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea 
          placeholder='Escreva sua nota' 
          rows={15}  
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button>Criar Nota</button>
      </form>
    )
  }
}

export default FormularioCadastro;