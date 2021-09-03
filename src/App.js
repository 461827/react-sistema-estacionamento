import React from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { Layout } from "./components/Layout";
import {Space} from "./components/Space";


function App() {
  return (
    <div>
      <Layout>
        <Title />

        <Space top={6}/>

        <Subtitle>Adicionar</Subtitle>

        <Space top={4}/>

        <Input 
          label="Nome do Proprietario" 
          placeholder="Digite o nome" 
          top={2}
        />

        <Input 
          label="Placa do Veiculo" 
          placeholder="Digite a placa" 
          top={2}
        />

        <Input 
          label="Nome do Funcionario" 
          placeholder="Selecione" 
          top={2}
        />

        <Input 
          label="Vaga" 
          placeholder="Selecione" 
          top={2}
        />

        <Space top={4}/>

        <Button label="Adicionar 1"/>
      </Layout>
    </div>
  );
}

export default App;
