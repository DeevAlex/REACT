import { Component } from 'react';
import './styles.css';

export class Home extends Component {

  state = {
    counter: 0
  }

  handleClick = () => {

    // melhor forma de garantir o estado anterior correto caso tenhamos varios setStates na pagina
    this.setState((prevState, prevProps) => { 
      console.log("PREV STATE: " + prevState.counter)
      console.log("PREV PROPS: " + prevProps)
      return { counter: prevState.counter + prevProps.numberToIncrement }
    }, () => { 
      console.log("POST STATE: " + this.state.counter)
    })

  }

  render() {

    return (
      <div className='container'>
        <h1>Olá Mundo - {this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )

  }

}
