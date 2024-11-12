import { Component } from "react";

import './styles.css'

export class Button extends Component {

    // constructor(props) { // implicitamente as props já estão no constructor e a gente usa constructor se a gente precisar fazer algo, a gente não vai usar nesse caso porque a gente não está mexendo com estado
    //     super(props) //precisamos colocar aqui um super com aas props como parametro
    // }

    render(props) {

        const { text, quandoClica, disabled } = this.props // pegando o metodo que será acionado

        // é aqui que 
        return (
            <button className="button" disabled={disabled} onClick={quandoClica}>{text}</button> // as props ficam aqui this.props, Ex.: {this.props.text}
        )
    }

}