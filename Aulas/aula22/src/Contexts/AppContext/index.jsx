import { createContext, useState } from "react";
import globalState from "./data";

export let GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [contextState, setState] = useState(globalState); // podemos criar funções para alterar coisas especificas de um estado

  // devemos usar o children para colocar os componentes dentro do globalcontext provider
  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
