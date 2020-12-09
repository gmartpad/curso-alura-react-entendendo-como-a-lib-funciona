import React from 'react'

import ListaDeNotas from './components/ListaDeNotas/index'
import FormularioCadastro from './components/FormularioCadastro/index'

import './assets/App.css'

class App extends React.Component {

  constructor(){
    super();    
    
    this.state = {
      notas: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas,
    };
    this.setState(novoEstado)
  }

  render(){
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
