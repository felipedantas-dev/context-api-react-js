import { UserContext } from "../contexts/user";
import { useContext } from "react";

function Nome () {

  const { alunos, setAlunos } = useContext(UserContext);
  
  return (
    <div>
      Bem-vindo {alunos}
      <br/>
      <button onClick={ () => setAlunos("João") }>Mudar nome</button>
    </div>
  );
}
  
  export default Nome;
  