import React from "react";

import "./App.css";
import { useContext } from "react";
import { useState } from "react";

//  useContext - React Hook

// tudo aqui pode ser separado em arquivos distintos

// para usarmos o useContext precisamos de um estado inicial, dai criamos um componente de contexto dai ele vai ter duas coisas um provider e um consumer, quando usamos o hook de useContext não precisamos usar o consumer

// objeto com o estado inicial
const globalState = {
  title: "O titulo que contexto",
  body: "O body do contexto",
  counter: 0,
};

// Criando um contexto, Como isso é contexto ele deve ser prover, ele vai prover um contexto a outros componentes, podemos passar o estado ali em cima como parametro dentro do createContext
// devemos ter cuidado pois ele passa o valor do contexto para todos os filhos dos filhos dos componentes e quando algum valor muda todos os componentes são atualizados
const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line react/prop-types
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter }, // apenas pegando o title e o counter
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  ); // pegando valores do contexto global
};

// eslint-disable-next-line react/prop-types
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body }, // apenas pegando o body
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))} // o conteudo se mantem porque passamos pelo spread todos os outros valores e estamos atualizando somente o counter, e essa atualização é mostrada acontecendo em outros componentes que o usam
    >
      {body}
    </p>
  ); // pegando valores do contexto global
};

// aqui é onde queremos disponibilizar esse contexto para todos os filhos, se fosse usar props nos deveriamos passar essas propriedades para a Div e dela para o H1 e para o P, nesse caso não precisamos porque o globalContext passa automaticamente quando estiver dentro do .Provider

// o value ali vai parar no contexto
function App() {
  // ao invés de passar um objeto direto no value, colocamos num estado, não é assim que usamos o contexto, usa o useReducer para trabalhar com estados mais complexos
  const [contextState, setContextState] = useState(globalState); // não precisaria do useState apenas usamos para podermos alterar o estado e isso refletir nos outros componentes

  // as variaveis e funções ali no value os filhos também terão acesso a eles(as)
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
