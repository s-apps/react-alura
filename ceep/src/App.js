import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro categorias={this.categorias.categorias} criarNota={this.notas.adicionarNota} />
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias.categorias} adicionarCategoria={this.categorias.adicionarCategoria} />
          <ListaDeNotas notas={this.notas.notas} apagarNota={this.deletarNota.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;