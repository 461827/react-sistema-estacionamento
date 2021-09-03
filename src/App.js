import React from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { Layout } from "./components/Layout";


function App() {
  return (
    <div>
      <Layout>
        <Title />
        <Subtitle />
        <Input />
        <Button label="Adicionar 1"/>
      </Layout>
    </div>
  );
}

export default App;
