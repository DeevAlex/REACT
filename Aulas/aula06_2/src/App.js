import './App.css';
import React from 'react';
import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts';

class App extends React.Component { 

    // Props e organização dos componentes - Parte 2

    state = {
      counter: 0,
      posts: []
    }

    async componentDidMount() { // devemos colocar o async aqui porque ela retorna uma Promise
      
      await this.loadPosts()

    }

    loadPosts = async () => {

        const postsAndPhotos = await loadPosts(); // pegando o retorno da arrow function e colocando nessa variavel como ela é assincrona devemos colocar o await
        this.setState({ posts: postsAndPhotos }) // pegando as fotos e os posts e atribuindo ao estado para podermos utilizar nos elementos html

    }


    // devemos colocar 'alt' nos elementos img
    render() {

        const { posts } = this.state // pegando os posts e consequentemente pegando também as fotos

        return ( // aqui fazemos o nosso componente já com os posts e as fotos: o elemento é o post e o elemento.cover é a foto
          <section className='container'>
            <Posts posts={posts} />
          </section>
      );
    }
}



export default App;
