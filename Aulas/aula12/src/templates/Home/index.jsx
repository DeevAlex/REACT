import React, { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

//  Migrando para React Hooks

export const Home = () => {
  const [posts, setPosts] = useState([]); // dentro de useState é a primeira coisa é o estado inicial da coisa por exemplo um array vazio que está sendo configurada aq [] e a coisa que está sendo configurada ali é posts e o useState retorna um array duas posições com posts e uma função para setar os posts, diferente do state vamos ter 1 funçãp de set para cada uma das partes do estado
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleChange = (e) => {
    const { value } = e.target; // pegando o valor do ca mpo de texto
    setSearchValue(value);
  };

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts(); // pegando o retorno da arrow function e colocando nessa variavel como ela é assincrona devemos colocar o await

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]); // o array aqui é um array de dependencias, recebe qualquer variavel que a gente usar dentro dessa função e se essa variavel mudar o valor essa função é chamada

  // aqui não precisa ser assincrono pois não vamos buscar nada
  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  // aqui fazemos o nosso componente já com os posts e as fotos: o elemento é o post e o elemento.cover é a foto
  return (
    <section className="container">
      <div className="searchContainer">
        {!!searchValue && (
          <>
            <h1>Procurando pelo titulo:</h1>
          </>
        )}

        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

      {filteredPosts.length === 0 && <h1>Não há nenhum post com esse titulo</h1>}

      <div className="buttonContainer">
        {!searchValue && ( // o !searchValue aqui é que se não tiver busca exiba o botão
          <Button disabled={noMorePosts} text="Mostrar Mais Posts" quandoClica={loadMorePosts} />
        )}
      </div>
    </section>
  );
};
