import './App.css';
import { useState, useEffect } from 'react';

// useEffect - React Hook
// o useEffect faz sozinho o trabalho de: ComponentDidUpdate, ComponentDidMount

function con() {
  console.log('h1 clicado');
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // ComponentDidUpdate (executa toda vez que o component atualiza)
  // useEffect(() => {
  //   console.log('ComponentDidUpdate');
  // }); // é chamado toda vez que o componente atualizar

  // // ComponentDidMount (executa toda vez que o component for montado) - Executa apenas 1 vez
  // useEffect(() => {
  //   console.log('ComponentDidMount');
  // }, []); // array de dependencias, quando o array esta vazio ele é chamado uma vez

  // Com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('Contador mudou para: ', counter1);
    //setCounter1(counter1 + 1); // caso mudarmos o valor da dependencia aqui dentro ele vai gerar um loop infinito
  }, [counter1]); // ele vai chamar quando todas as dependencias que estiverem aqui no arrray

  useEffect(() => {
    // o ? ali indica que se o que estiver antes da ? for verdadeiro ou existir o restante do codigo sera executado
    document.querySelector('h1')?.addEventListener('click', con);

    // O return aqui simula o ComponentWillUnMount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', con);
    };
  }, []);

  return (
    <div className="App">
      <h1>
        C1: {counter1} - C4: {counter2}
      </h1>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ (2)</button>
    </div>
  );
}

export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
