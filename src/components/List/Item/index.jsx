
import React from "react";
import {FaEdit,FaSistrix,FaSignOutAlt} from "react-icons/fa";
import {useHistory} from"react-router-dom";

import {ButtonIcon} from "../ButtonIcon"; 

import {Container, ContentInfo,ContentActions,ModelCar, ParkingSpace} from "./style";

export const Item = ({data}) => {
    const history = useHistory();

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
                <ButtonIcon 
                    name={<FaSignOutAlt/>} 
                    onClick={() => {alert("remover")}}/>
            </ContentActions>
        </Container>
    )
}