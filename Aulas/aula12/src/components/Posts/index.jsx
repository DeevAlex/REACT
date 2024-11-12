import { PostCard } from '../PostCard';
import p from 'prop-types';
import React from 'react';

import './styles.css';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((elemento) => (
        <PostCard
          key={elemento.id} // é aqui que devemos colocar o atributo key
          title={elemento.title} // podemos colocar um de cada ou o elemento inteiro dependendo de como vamos usa-lo, como lá ja estamos usando o post. , usaremos somente o elemento
          body={elemento.body}
          id={elemento.id}
          cover={elemento.cover}
        />
      ))}
    </div>
  );
};

// isso aqui é a mesma coisa da props do Posts, se tirarmos os dois daqui e de lá levanta um erro
Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: p.arrayOf(
    // esse p.shape seria uma forma tipada de um post
    p.shape({
      title: p.string.isRequired,
      cover: p.string.isRequired,
      body: p.string.isRequired,
      id: p.number.isRequired,
    }),
  ),
};
