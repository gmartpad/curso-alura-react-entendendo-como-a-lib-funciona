import React from 'react'

import ListaDeNotas from './components/ListaDeNotas/index'
import FormularioCadastro from './components/FormularioCadastro/index'

import './assets/App.css'

class App extends React.Component {

  constructor(){
    super()

    this.notas = [];
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto}

    this.notas.push(novaNota)
  }

  render(){
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }
}

export default App;
