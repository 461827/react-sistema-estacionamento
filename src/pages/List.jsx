import React from "react";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Layout } from "../components/Layout";
import {Space} from "../components/Space";
import { List } from "../components/List";

export default ({setRoute}) => {
    return(
        <Layout>
            <Title />

            <Space top={2}/>

            <Subtitle>Lista de Veiculo</Subtitle>

            <Space top={6}/>

            <Button label="Adicionar" onClick={() =>{setRoute("register")}}/>

            <Space top={6}/>

            <List/> 
          </Layout>
    )
}





