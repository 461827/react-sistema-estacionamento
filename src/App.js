import React from "react";
import {Button} from "./componentes/Button"
import {Input} from "./components/Input"

function App() {
  return (
    <div> 
      <Button label="Adicionar 1" kkkkk={() => { alert("oi")}}/>  
      <Button label="Adicionar 2" onClick={() => { alert("oi 2")}}/>  
      <Button label="Adicionar 3"/>  

      <Input/>
    </div>
  );
}

export default App;
