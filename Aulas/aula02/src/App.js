import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//  Componentes funcionais e componentes de classe

//  componentes de classe

class App extends Component { // deve ser importado o Component

    // constructor(props) { // o constructor no ract recebe um parametro camado props
    //     super(props) // utilizamos o super para chamar o constructor da classe Component
    //     // this.handlePClick = this.handlePClick.bind(this) // Aqui estamos fazendo com que o this.handlePClick tenha dentro dele a palavra THIS dentro do metodo (versoes anteriores do react não tinha isso então precisa fazer isso) 
    //     this.state = { // todo componente react pode conter estado e 
    //       nome: "Alex",
    //       counter: 0
    //     }
    // }

    // sem construtor:
    state = {
      nome: "Alex",
      counter: 0
    }


    handlePClick = () => { // casi seha um metodo normal assim: handlePClick() {}, sempre precisará utilizar no construtor isso: this.handlePClick = this.handlePClick.bind(this)
      
      // Para substituir sem sobreescrever o this.state usa o setState para alterar uma propriedade do thos.state
      this.setState({ nome: "NOVO_NOME" }) // quando atualizamos um estado o render ira ser chamado novamente com o estado novo

    }

    handleAClick = (event) => { // como arrow functions não tem a palavra this ela busca o seu elemento pai que é a classe App e a gente vai ter o this que é essa propria classe 
      event.preventDefault(); // usado para previnir p evento padrão fazendo com que a gente customize esse evento  
      let { counter } = this.state
      this.setState({ counter: counter + 1, nome: "Alex" })
    }

    render() {

        const { nome, counter } = this.state // aqui estamos pegando as propriedades que estão dentro do objeto state e passando para uma variavel via destructuring 

        // this.handlePClick é uma referencia a função e this.handlePClick() é a execução dessa funcção

        // evento sintetico: onClick ali em baixo

        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.handlePClick}>
                Meu nome é {nome} - numero de vezes clicado: {counter}
              </p>
              <a
                onClick={this.handleAClick}
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Este é o link
              </a>
            </header>
          </div>
      );
    }
}


// Componentes funcionais

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
