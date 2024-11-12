// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { GlobalContext } from "../../Contexts/AppContext/index";

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

export default H1;
