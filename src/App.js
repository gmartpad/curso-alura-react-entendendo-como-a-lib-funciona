import React from 'react'

import ListaDeNotas from './components/ListaDeNotas/index'
import FormularioCadastro from './components/FormularioCadastro/index'

import './assets/App.css'

class App extends React.Component {
  render(){
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
