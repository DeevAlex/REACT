import { useEffect, useMemo, useState } from "react";
import "./App.css";
import prop from "prop-types";

// useMemo - React Hook

const Post = ({ post }) => {
  console.log("Filho renderizou");
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

// sempre que for um objeto use o shape({ atributos que estão no objeto e coloque os tipos também })
Post.propTypes = {
  post: prop.shape({
    id: prop.number,
    title: prop.string,
    body: prop.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");

  console.log("Pai renderizou");

  // Simulando um ComponentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {
        // vai memorizar os posts, caso outro componente seja atualizado, só vai atualizar esse componente quando for ele alterado
        useMemo(() => {
          return (
            posts.length > 0 &&
            posts.map((post) => <Post key={post.id} post={post} />)
          );
        }, [posts])
      }

      {posts.length <= 0 && <p>Não existem posts ainda...</p>}
    </div>
  );
}
export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
