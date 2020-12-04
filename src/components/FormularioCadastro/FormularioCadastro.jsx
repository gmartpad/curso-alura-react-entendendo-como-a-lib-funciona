import React from 'react'

import "./estilo.css"

class FormularioCadastro extends React.Component {
  render() {
    return (
      <form>
        <input 
          type='text' 
          placeholder='Título' 
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