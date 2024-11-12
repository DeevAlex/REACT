import p from 'prop-types'; // devemos importar o prop-types para fazer a validação
import { Component } from 'react';
import React from 'react';

import './styles.css';

export class Button extends Component {
  // constructor(props) { // implicitamente as props já estão no constructor e a gente usa constructor se a gente precisar fazer algo, a gente não vai usar nesse caso porque a gente não está mexendo com estado
  //     super(props) //precisamos colocar aqui um super com aas props como parametro
  // }

  // quando uma prop não é requerida coloque como false
  render() {
    const { text, quandoClica, disabled = false } = this.props; // pegando o metodo que será acionado

    // é aqui que
    return (
      <button className="button" disabled={disabled} onClick={quandoClica}>
        {text}
      </button> // as props ficam aqui this.props, Ex.: {this.props.text}
    );
  }
}

Button.defaultProps = {
  disabled: false, // o botão nunca inicia desativado, usamos o defaultProps quando colocamos não requerido la em baixo
};

// fazendo as validações das props
Button.propTypes = {
  text: p.string.isRequired,
  quandoClica: p.func.isRequired,
  disabled: p.bool,
};
