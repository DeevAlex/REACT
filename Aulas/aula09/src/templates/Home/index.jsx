import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

//  Migrando para React Hooks

export const Home = () => {

  const [ posts, setPosts ] = useState([]) // dentro de useState é a primeira coisa é o estado inicial da coisa por exemplo um array vazio que está sendo configurada aq [] e a coisa que está sendo configurada ali é posts e o useState retorna um array duas posições com posts e uma função para setar os posts, diferente do state vamos ter 1 funçãp de set para cada uma das partes do estado 
  const [ allPosts, setAllPosts ] = useState([])
  const [ page, setPage ] = useState(0)
  const [ postsPerPage ] = useState(2)
  const [ searchValue, setSearchValue ] = useState('')

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase())
  }) : posts

  const handleChange = (e) => {
    const { value } = e.target // pegando o valor do ca mpo de texto
    setSearchValue(value)
  }

  const handleLoadPosts = useCallback(async (page, postsPerPage ) => {

      const postsAndPhotos = await loadPosts(); // pegando o retorno da arrow function e colocando nessa variavel como ela é assincrona devemos colocar o await

      setPosts(postsAndPhotos.slice(page, postsPerPage))
      setAllPosts(postsAndPhotos)

  }, [])

  useEffect(() => { 
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage]) // o array aqui é um array de dependencias, recebe qualquer variavel que a gente usar dentro dessa função e se essa variavel mudar o valor essa função é chamada

  const loadMorePosts = (e) => { // aqui não precisa ser assincrono pois não vamos buscar nada

    const nextPage = page + postsPerPage

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)

  }

  return ( // aqui fazemos o nosso componente já com os posts e as fotos: o elemento é o post e o elemento.cover é a foto
          <section className='container'>
            
            <div className='searchContainer'>
              {!!searchValue && (
                <>
                <h1>Procurando pelo titulo:</h1>
                </>
              )}

              <TextInput searchValue={searchValue} handleChange={handleChange} />
            </div>
            
            {filteredPosts.length > 0 && (
              <Posts posts={filteredPosts} />
            )}

            {filteredPosts.length === 0 && (
              <h1>Não há nenhum post com esse titulo</h1>
            )}

            <div className='buttonContainer'>
              {!searchValue && ( // o !searchValue aqui é que se não tiver busca exiba o botão
                <Button disabled={noMorePosts} text="Mostrar Mais Posts" quandoClica={loadMorePosts} />
              )}
            </div>
          </section>
  );
}

// export class Home2 extends React.Component { 

//     state = {
//       posts: [],
//       allPosts: [],
//       page: 0,
//       postsPerPage: 10,
//       searchValue: ''
//     }

//     async componentDidMount() { // devemos colocar o async aqui porque ela retorna uma Promise
      
//       await this.loadPosts()

//     }

//     componentDidUpdate() {
//       console.log(this.props)
//     }

//     handleChange = (e) => {
//       const { value } = e.target // pegando o valor do ca mpo de texto
//       this.setState({ searchValue: value })
//     }

//     loadPosts = async () => {

//         const { page, postsPerPage } = this.state
//         const postsAndPhotos = await loadPosts(); // pegando o retorno da arrow function e colocando nessa variavel como ela é assincrona devemos colocar o await
//         this.setState({ 
//           posts: postsAndPhotos.slice(page, postsPerPage),
//           allPosts: postsAndPhotos
//          }) // pegando as fotos e os posts e atribuindo ao estado para podermos utilizar nos elementos html

//     }

//     loadMorePosts = (e) => { // aqui não precisa ser assincrono pois não vamos buscar nada
//       const { page, postsPerPage, allPosts, posts } = this.state;

//       const nextPage = page + postsPerPage

//       const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

//       posts.push(...nextPosts)

//       this.setState({posts, page: nextPage})

//     }

//     // devemos colocar 'alt' nos elementos img
//     render() {

//         const { posts, page, postsPerPage, allPosts, searchValue } = this.state // pegando os posts e consequentemente pegando também as fotos
//         const noMorePosts = page + postsPerPage >= allPosts.length;

//         const filteredPosts = !!searchValue ? allPosts.filter(post => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase())
//         }) : posts

//         // !!searchValue && () , a parte !!searchValue faz a string que está como valor padrão '' caso esteja vazia retorna false caso contrario true e depois do && é o que é para fazer 

//         // ali em baixo o quandoClica é um atributo, não um evento, para acessarmos aquele metodo loadMorePosts precisamos pegar ele nas props
//         return ( // aqui fazemos o nosso componente já com os posts e as fotos: o elemento é o post e o elemento.cover é a foto
//           <section className='container'>
            
//             <div className='searchContainer'>
//               {!!searchValue && (
//                 <>
//                 <h1>Procurando pelo titulo:</h1>
//                 </>
//               )}

//               <TextInput searchValue={searchValue} handleChange={this.handleChange} />
//             </div>
            
//             {filteredPosts.length > 0 && (
//               <Posts posts={filteredPosts} />
//             )}

//             {filteredPosts.length === 0 && (
//               <h1>Não há nenhum post com esse titulo</h1>
//             )}

//             <div className='buttonContainer'>
//               {!searchValue && ( // o !searchValue aqui é que se não tiver busca exiba o botão
//                 <Button disabled={noMorePosts} text="Mostrar Mais Posts" quandoClica={this.loadMorePosts} />
//               )}
//             </div>
//           </section>
//       );
//     }
// }

