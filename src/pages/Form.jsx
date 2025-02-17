import React,{useEffect, useState} from "react";
import{useHistory, useParams, } from "react-router-dom"
import {db, updateItemV2} from "../db"

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

    const [showModal, setShowModal] = useState(false);
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

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
            parkingSpace: Number(numVaga)
        }

        isEdit ? updateItemV2(data): db.push(data)

        setShowModal(true)
    }

    useEffect(() => {
        setIsView(history.location.pathname.split("/")[2] === "view")
        setIsEdit(history.location.pathname.split("/")[2] === "edit")
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
                disabled={isView | isEdit}

                top={2}
            />

            <Button 
                label={ params.space === undefined ?
                    "Adicionar Veiculo": isView 
                    ? "ok":"Guardar Informações"}
                onClick={() => {handleOnSubmit()}}
            />

            {showModal && (
                <ModalDialog 
                    title={ params.space === undefined ?
                        "Veiculo Adicionado": isView 
                        ? "ok":"Veiculo Editado"} 
                    onNext={() => {history.push('/')}} 
                />
            )}
        </Layout>
    )
}