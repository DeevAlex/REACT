import './App.css';
import React from 'react';

class App extends React.Component { 

    state = {
      counter: 0,
      posts: [
        {
          id: 1,
          title: "O titulo 1",
          body: "O corpo 1"
        },
        {
          id: 2,
          title: "O titulo 2",
          body: "O corpo 2"
        },
        {
          id: 3,
          title: "O titulo 3",
          body: "O corpo 3"
        }
      ]
    }
    timeoutUpdate = null;

    // ciclos de vida de um componente: componentDidMount, componentDidUpdate e componentWillUnmount, porem pode haver outros, no basico é isso.

    // Método de ciclo de vida chamado: componentDidMount, ele é usado depois que um componente é montado e queremos que aconteça alguma coisa
    componentDidMount() { // Ele tem que ser do mesmo modo de escrever do render, componentDidMount() {}
        
        // Ele é normalmente usado em requisições de API's 

        this.handleTimeOut()

    }

    // quando atualiza um componente esse metodo é chamado, por exemplo estamos atualizando o estado e quando é atualizado o render é chamado e quando tudo for atualizado é chamado esse metodo
    componentDidUpdate() { // esse metodo pode receber alguns parametros como o prevprops, prevstate e snapshot
        this.handleTimeOut() // Aqui vai virar um loop infinito
    }

    // quando for desmontado fazemos a limpeza de lixos por exemplo o setTimeout
    componentWillUnmount() {
        clearTimeout(this.timeoutUpdate)
    }

    // usasse como convenção a palavra handle no começo
    handleTimeOut = () => {
      const { posts, counter } = this.state

        posts[0].title = "O titulo mudou"

        this.timeoutUpdate = setTimeout(() => {
          this.setState({posts, counter: counter + 1})
        }, 1000)
    }


    render() {

        const { posts, counter } = this.state

        return (
          <div className="App">
            <h1>{counter}</h1>
            {posts.map((elemento) => (
              <div key={elemento.id}>
                <h1>{elemento.title}</h1>
                <p>{elemento.body}</p>
              </div>
            ))}
          </div>
      );
    }
}



export default App;
