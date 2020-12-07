import React from 'react'

import ListaDeNotas from './components/ListaDeNotas/index'
import FormularioCadastro from './components/FormularioCadastro/index'

import './assets/App.css'

class App extends React.Component {

  criarNota(titulo, texto) {
    console.log(`${titulo} - ${texto}`);
  }

  render(){
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
