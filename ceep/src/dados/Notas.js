export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    adicionarNota(titulo, nota, categoria) {
        const novaNota = new Nota(titulo, nota, categoria);
        console.log(novaNota)
        this.notas.push(novaNota);
    }

    apagarNota(indice) {
        this.notas.splice(indice, 1);
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => { 
            func(this.categorias);
        });
    }

}

class Nota {
    constructor(titulo, nota, categoria) {
        this.titulo = titulo;
        this.nota = nota;
        this.categoria = categoria;
    }
}