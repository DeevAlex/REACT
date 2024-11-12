import './App.css';
import React from 'react';

class App extends React.Component { 

    state = {
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
        },
      ]
    }

    // Erro:
    // Each child in a list should have a unique "key" prop.' Check the render method of `App`. See https://reactjs.org/link/warning-keys for more information. at h1 at App (http://localhost:3000/static/js/bundle.js:28:5)

    // Solução:
    // Quando for iterar sobre um array coloque no primeiro elemento que é retornado nesse map: key={(algo que faça ser unico, como ali em baixo usamos o elemento.id)}

    render() {

        const { posts } = this.state

        return (
          <div className="App">
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
