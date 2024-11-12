import "./App.css";
import { AppContext } from "./Contexts/AppContext";
import { Div } from "./components/Div";

//  useContext - React Hook Parte 2

function App() {
  // as variaveis e funções ali no value os filhos também terão acesso a eles(as)
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;

// comando para arrumar os erros do ESLINT: npx eslint src/**/*.js --fix
