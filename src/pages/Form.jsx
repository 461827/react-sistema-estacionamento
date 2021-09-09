import React from "react";
import{useHistory} from "react-router-dom"

import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import {Space} from "../components/Space";

export default () => {
    const history = useHistory();

    return(
        <Layout>
            <Title/>

            <Space top={2}/>

            <Subtitle>Adicionar Veiculo</Subtitle>

            <Space top={6}/>

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

        <Button label="Adicionar" onClick={() => {history.push('/list')}}/>
            
        </Layout>
    )
}