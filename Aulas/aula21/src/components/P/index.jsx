import { useContext } from "react";
import { GlobalContext } from "../../Contexts/AppContext";

// eslint-disable-next-line react/prop-types
export const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body }, // apenas pegando o body
    setState,
  } = theContext;
  return (
    <p
      // o  ...s estamos espalhando o contexto atual e depois estamos atualizando o que queremos (counter: s.counter + 1)
      onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))} // o conteudo se mantem porque passamos pelo spread todos os outros valores e estamos atualizando somente o counter, e essa atualização é mostrada acontecendo em outros componentes que o usam
    >
      {body}
    </p>
  ); // pegando valores do contexto global
};
