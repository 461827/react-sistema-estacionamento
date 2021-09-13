import React from "react";
import { useHistory } from "react-router-dom"
import { db } from "../db";


import { ModalDialog } from "../components/ModalDialog";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { Layout } from "../components/Layout";
import {Space} from "../components/Space";
import { List } from "../components/List";

export default () => {
    const history = useHistory();

    return(
        <Layout>
            <Title />

            <Space top={2}/>

            <Subtitle>Lista de Veiculo</Subtitle>

            <Space top={6}/>

            <Button label="Adicionar" onClick={() => {history.push('/form')}}/>

            <Space top={6}/>

            <List data={db}/> 
          </Layout>
    )
}





