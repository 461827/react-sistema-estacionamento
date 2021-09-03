import React from "react";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";


function App() {
  return (
    <div> 
      <Button label="Adicionar 1" kkkkk={() => { alert("oi")}}/>  
      <Button label="Adicionar 2" onClick={() => { alert("oi 2")}}/>  
      <Button label="Adicionar 3"/>  

      <Input/>

      <Title/>

      <Subtitle/>

    </div>
  );
}

export default App;
