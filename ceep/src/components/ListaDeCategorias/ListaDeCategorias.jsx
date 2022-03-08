import React, { Component } from "react";

class ListaDeCategorias extends Component {
    state = {};

    _handleEventoInput(e) {
        if(e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }


    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <li className="lista-categorias_item" key={index}>{ categoria }</li>
                        );
                    })}
                </ul>
                <input type="text" className="lista-categorias_input" placeholder="adicionar categoria" onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>
        );
    }
}

export default ListaDeCategorias;