import React from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends React.Component { 

    // Props e organização dos componentes - Parte 3

    state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 53
    }

    async componentDidMount() { // devemos colocar o async aqui porque ela retorna uma Promise
      
      await this.loadPosts()

    }

    loadPosts = async () => {

        const { page, postsPerPage } = this.state
        const postsAndPhotos = await loadPosts(); // pegando o retorno da arrow function e colocando nessa variavel como ela é assincrona devemos colocar o await
        this.setState({ 
          posts: postsAndPhotos.slice(page, postsPerPage),
          allPosts: postsAndPhotos
         }) // pegando as fotos e os posts e atribuindo ao estado para podermos utilizar nos elementos html

    }

    loadMorePosts = (e) => { // aqui não precisa ser assincrono pois não vamos buscar nada
      const { page, postsPerPage, allPosts, posts } = this.state;

      const nextPage = page + postsPerPage

      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

      posts.push(...nextPosts)

      this.setState({posts, page: nextPage})

    }

    // devemos colocar 'alt' nos elementos img
    render() {

        const { posts, page, postsPerPage, allPosts } = this.state // pegando os posts e consequentemente pegando também as fotos
        const noMorePosts = page + postsPerPage >= allPosts.length;

        // ali em baixo o quandoClica é um atributo, não um evento, para acessarmos aquele metodo loadMorePosts precisamos pegar ele nas props
        return ( // aqui fazemos o nosso componente já com os posts e as fotos: o elemento é o post e o elemento.cover é a foto
          <section className='container'>
            <Posts posts={posts} />
            <div className='buttonContainer'>
              <Button disabled={noMorePosts} text="Mostrar Mais Posts" quandoClica={this.loadMorePosts} />
            </div>
          </section>
      );
    }
}

