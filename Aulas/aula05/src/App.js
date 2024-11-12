import './App.css';
import React from 'react';

class App extends React.Component { 

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
                <div className='post'>
                  <img src={elemento.cover} alt={elemento.title}/>
                  <div key={elemento.id} className='postContent'>
                    <h1>{elemento.title}</h1>
                    <p>{elemento.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
      );
    }
}



export default App;
