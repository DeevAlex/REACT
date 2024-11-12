import { useEffect, useRef, useState } from "react";
import "./App.css";

// Criando meu próprio hook

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb; // para lembrar qual foi o ultimo callback a ser chamado
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  // eslint-disable-next-line no-unused-vars
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1, delay));

  return (
    <div>
      <h1>Contador {counter}</h1>
      <h1>Delay {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => Number(e.target.value)}
      />
    </div>
  );
}

export default App;
