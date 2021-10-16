import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: "Eduardo", 
      sobrenome: "Fabricio"
    }
  }

  alterarNomeCompleto = () => {
    this.setState({
      nome: "Edward",
      sobrenome: "Fabricius"
    })
  }

  render() {
    return (
      <div>
        <p>Nome : { this.state.nome}</p>
        <p>Sobrenome : { this.state.sobrenome}</p>
        <button onClick={this.alterarNomeCompleto}>alterar</button>
      </div>
    );
  }
}

export default App;
