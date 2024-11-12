import './App.css';
import React from 'react';
import { PostCard } from './components/PostCard';

class App extends React.Component { 

    // Props e organização dos componentes - Parte 1

    state = {
      counter: 0,
      posts: []
    }

    componentDidMount() { 
      
      this.loadPosts()

    }

    loadPosts = async () => {

        const postsResponse = fetch("https://jsonplaceholder.typicode.com/posts")
        const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos")

        // resolvendo tudo de uma vez usando .all
        const [ posts, photos ] = await Promise.all([ postsResponse, photosResponse ])

        const postsJSON = await posts.json() // as informações recebidas e trasformando em json
        const photosJSON = await photos.json()

        const postsAndPhotos = postsJSON.map((post, index) => { // percorrendo o postsJSON e pegando o indice e o post
          return { ...post, cover: photosJSON[index].url } // retornando um objeto que tem o post atual da iteração e colocando uma outra propriedade nesse objeto que é a url da foto
        })

        this.setState({ posts: postsAndPhotos }) // pegando as fotos e os posts e atribuindo ao estado para podermos utilizar nos elementos html

    }


    // devemos colocar 'alt' nos elementos img
    render() {

        const { posts } = this.state // pegando os posts e consequentemente pegando também as fotos

        return ( // aqui fazemos o nosso componente já com os posts e as fotos: o elemento é o post e o elemento.cover é a foto
          <section className='container'>
            <div className="posts">
              {posts.map((elemento) => (
                <PostCard
                  key={elemento.id} // é aqui que devemos colocar o atributo key  
                  // title={elemento.title} // podemos colocar um de cada ou o elemento inteiro dependendo de como vamos usa-lo, como lá ja estamos usando o post. , usaremos somente o elemento
                  // body={elemento.body}
                  // id={elemento.id}
                  // cover={elemento.cover}
                  elemento={elemento} // deve ser o mesmo nome na hora de fazer destructuring
                 />
              ))}
            </div>
          </section>
      );
    }
}



export default App;
