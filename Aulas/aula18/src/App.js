import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import prop from "prop-types";

//  useRef  - React Hook

const Post = ({ post, handleClick }) => {
  console.log("Filho renderizou");
  return (
    <div key={post.id} className="post">
      <h1 style={{ fontSize: "14px" }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
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
  handleClick: prop.func,
};

// o useRef ele cria uma referencia para alguma coisa, devemos passar para o que queremos que ele referencie
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState("");
  const input = useRef(null); // referencia para o input ali de baixo, podemos inicialo como nulo
  const contador = useRef(0); // o useRef não causa uma rerenderização do componente ele apenas muda a referencia

  console.log("Pai renderizou");

  // Simulando um ComponentDidMount
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++; // ele é mutavel por isso podemos mudar o valor
  });

  const handleClick = (valor) => {
    setValue(valor);
  };

  return (
    <div className="App">
      <h1>renderizou: {contador.current}x</h1>
      <p>
        <input
          ref={input}
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
            posts.map((post) => (
              <Post key={post.id} post={post} handleClick={handleClick} />
            ))
          );
        }, [posts])
      }

      {posts.length <= 0 && <p>Não existem posts ainda...</p>}
    </div>
  );
}
export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
