import { useReducer } from "react";
import "./App.css";

// useReducer - React Hooks - Parte 1

// O useReducer é muito similar ao useState só que ele foi projetado para trabalharmos com estados complexos que requerem alguma logica

const globalState = {
  title: "O titulo do contexto",
  body: "O body do contexto",
  counter: 0,
};

// função de reducer -> uma função que recebe o estado antigo e uma action e retorna um estado novo
const reducer = (state, action) => {
  switch (action.type) {
    case "muda":
      console.log("Chamou muda com ", action.payload);
      return { ...state, title: "Mudou - " + action.payload }; // mudando o estado, passando o mesmo estado e mudando a chave title
    case "inverter": {
      console.log("Chamou inverter");
      const { title } = state;

      return { ...state, title: title.split("").reverse().join("") };
    }
  }

  console.log("Nenhuma action encontrada");
  return { ...state }; // super importante retornar o estado mesmo o estado anterior se não ira gerar um erro
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState); // devemos passar a função reducer e o estado inicial, entre colchetes estamos pegando o estado e uma função dispatch (serve para despachar coisas (vai ser usado para disparar acões))
  // eslint-disable-next-line no-unused-vars
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} - {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: "muda",
            payload: new Date().toLocaleString("pt-br"), // toLocaleString é horario completo, e toLocaleDateString é somente a data
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: "inverter" })}>Invert</button>
      <button onClick={() => dispatch({ type: "olaMundo" })}>SEM ACTION</button>
    </div>
  );
}

// o objeto que esta sendo passado no dispatch ira para o action da função reducer é comum que tenha um type nele e como queremos passar parametros para a função dispatch coloque um objeto {}, podemos passar outras coisas dentro desse objeto como um payload (os dados que queremos enviar para dentro da função do reducer)

export default App;
