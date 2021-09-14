import React,{useEffect, useState,} from "react";
import{useHistory, useParams, } from "react-router-dom"
import {db} from "../db"

import { Layout } from "../components/Layout";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { Subtitle } from "../components/Subtitle";
import { ModalDialog } from "../components/ModalDialog";
import {Space} from "../components/Space";

export default () => {
    const history = useHistory();
    const params = useParams();
    console.log(history.location.pathname.split("/")[2])

    const [showModal, setShowModal] = useState(false);
    const [isView, setIsView] = useState(false);

    const [nameProprietario, setNameProprietario] = useState("");
    const [modelCar, setModelCar] = useState("");
    const [numPlaca, setNumPlaca] = useState("");
    const [nameFuncionario, setNameFuncionario] = useState("");
    const [numVaga, setNumVaga] = useState("");

    const handleOnSubmit = () => {
        const data = {
            nameClient: nameProprietario,
            model: modelCar,
            plate: numPlaca,
            employee: nameFuncionario,
            parkingSpace: numVaga
        }

        db.push(data)
    
        setShowModal(true)
    }

    useEffect(() => {
        setIsView(history.location.pathname.split("/")[2] === "view")
        if(params.space === undefined){ 
            return
        }

        const data = db.find((item) => {return item.parkingSpace === Number(params.space)})

        setNameProprietario(data.nameClient)
        setModelCar(data.model)
        setNumPlaca(data.plate)
        setNameFuncionario(data.employee)
        setNumVaga(data.parkingSpace)

    }, [params.space])

    return(
        <Layout>
            <Title/>

            <Space top={2}/>

            <Subtitle>
                {params.space === undefined ?
                "Adicionar Veiculo": isView 
                ? "Vizualizar":"Editar Veiculos"}
            </Subtitle>

            <Space top={6}/>

            <Input 
                label="Nome do Proprietario" 
                placeholder="Digite o nome"
                value={nameProprietario}
                onChange={(event) => {setNameProprietario(event.target.value)}}
                disabled={isView}
                top={2}
            />

            <Input 
                label="Modelo do Veiculo" 
                placeholder="Digite o modelo"
                value={modelCar}
                onChange={(event) => {setModelCar(event.target.value)}} 
                disabled={isView}
                top={2}
            />

            <Input 
                label="Placa do Veiculo" 
                placeholder="Digite a placa"
                value={numPlaca}
                onChange={(event) => {setNumPlaca(event.target.value)}}
                disabled={isView}
                top={2}
            />

            <Input 
                label="Nome do Funcionario" 
                placeholder="Selecione"
                value={nameFuncionario}
                onChange={(event) => {setNameFuncionario(event.target.value)}} 
                disabled={isView}
                top={2}
            />

            <Input 
                label="Vaga" 
                placeholder="Selecione"
                value={numVaga}
                onChange={(event) => {setNumVaga(event.target.value)}}
                disabled={isView}

                top={2}
            />

            <Button 
                label="Adicionar" 
                onClick={() => {handleOnSubmit()}}
            
            />

            {showModal && (
                <ModalDialog 
                    title="Muito Bom" 
                    onNext={() => {history.push('/')}} 
                />
            )}
        </Layout>
    )
}