import './App.css';
import { useCallback, useState } from 'react';
import prop from 'prop-types';
import React from 'react';

// useCallBack - React Hook

// useCallBack geralmente é usado em otimizações

// o react memo, memoriza o componente se ele não mudar se mudar ele muda também o componente, o react verifica se o componente mudou ou não se mudou ele gera um novo componente se não mudou ele não gera um componente
const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: prop.func,
};

// como estamos utilizando função ela não tem o metodo render por isso atualiza tudo o que está dentro dela, o useCallBack é usado em processos um pouco mais complexos do que incrementar como estamos fazendo ali em baixo, devemos ponderar
function App() {
  const [counter1, setCounter1] = useState(0);

  // o useCallback vai salvar a "função" e ele só vai mudar/recriar a função quando a dependencia mudar
  const incrementCounter = useCallback((num) => {
    setCounter1((c) => c + num);
  }, []);

  console.log('pai renderizou');

  return (
    <div className="App">
      <h1>C1: {counter1}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
