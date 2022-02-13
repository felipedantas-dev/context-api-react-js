import Alunos from "./Alunos";
import {useState} from "react";

import UserProvider from "./contexts/user";

function App () {

  const [nomeAluno, setNomeAluno] = useState("João");

  return (
    <UserProvider>
      <div>
        <h1>Escola</h1>
        <hr/>
        <Alunos/>
      </div>
    </UserProvider>
  );
}

export default App;