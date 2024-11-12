import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { Component } from 'react';

// useState - React Hook (Parte 2)

// componente sem estado
function App() {
  // const { foward } = this.state;

  const [foward, setFoward] = useState(false); // [<estado>, <coloca o valor nesse estado>] = useState(<valor padrão do estado>)
  const [contador, setContador] = useState(0);

  const fowardClass = foward ? 'foward' : '';

  const handleClick = () => {
    setFoward((prevFoward) => !prevFoward);
  };

  // o useState pode receber uma função de callback
  const addNumber = () => {
    // o c seria o estado contador só que não estamos usando o contador diretamente
    setContador((prevCounter) => prevCounter + 2); // é muito mais vantajoso a gente usar assim pois ele garante que temos o estado correto, e também garante que não vamos usar o counter diretamente dentro do setCounter
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${fowardClass}`} alt="logo" />
        <h1>Contador: {contador}</h1>
        <div className="containerFlex">
          <button type="button" onClick={handleClick}>
            foward {fowardClass}
          </button>
          <button type="button" onClick={addNumber}>
            Adicionar ao Contador
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
