import { PostCard } from '../PostCard';
import './styles.css'

export const Posts = ({ posts }) => {
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
    )

}