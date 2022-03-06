import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, nota) {
    const novaNota = { titulo, nota };
    const novoArrayNotas = [...this.state.notas, novaNota];
    this.setState({
      notas: novoArrayNotas
    });
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} apagarNota={this.deletarNota.bind(this)} />
      </section>
    );
  }
}

export default App;