
import React,{useState} from "react";
import {FaEdit,FaSistrix,FaSignOutAlt} from "react-icons/fa";
import {useHistory} from"react-router-dom";
import {db, removeItem} from "../../../db"
import { ModalDialog } from "../../ModalDialog";

import {ButtonIcon} from "../ButtonIcon"; 

import {Container, ContentInfo,ContentActions,ModelCar, ParkingSpace} from "./style";

export const Item = ({data, setRefresh}) => {
    const history = useHistory();

    const HandleOnDelete = ({deleteItem}) => {
        const [showModal, setShowModal] = useState(false)
       
       return (
           <>
                <ButtonIcon 
                    name={<FaSignOutAlt/>} 
                    onClick={() => {
                        setShowModal(true)
                    }}
                />

                {showModal && (
                    <ModalDialog 
                            title="Deseja mesmo Remover?"
                            labelNext="Sim"
                            labelStop="Não"
                            onNext={() => {
                                removeItem(deleteItem);
                                setRefresh(new Date())
                            }}
                            onStop={() => setShowModal(false)}
                        />
                )}
            </>
       )
    } 

    return(
        <Container>
            <ContentInfo>
                <ModelCar>{data.model}</ModelCar>
                <ParkingSpace>Vaga {data.parkingSpace}</ParkingSpace>
            </ContentInfo>
            <ContentActions>
                <ButtonIcon 
                    name={<FaEdit/>} 
                    onClick={() => {history.push('/form/edit/' + data.parkingSpace) }}/>
                <ButtonIcon 
                    name={<FaSistrix/>} 
                    onClick={() => {history.push('/form/view/' + data.parkingSpace)}}/>
                <HandleOnDelete 
                    deleteItem={data.parkingSpace}
                />
            </ContentActions>
        </Container>
    )
}