
import React from "react";
import {FaEdit,FaSistrix,FaSignOutAlt} from "react-icons/fa";

import {ButtonIcon} from "../ButtonIcon"; 

import {Container, ContentInfo,ContentActions,ModelCar, ParkingSpace} from "./style";

export const Item = ({data}) => {
    return(
        <Container>
            <ContentInfo>
                <ModelCar>{data.model}</ModelCar>
                <ParkingSpace>Vaga {data.parkingSpace}</ParkingSpace>
            </ContentInfo>
            <ContentActions>
                <ButtonIcon name={<FaEdit/>} onClick={() => {alert("edit")}}/>
                <ButtonIcon name={<FaSistrix/>} onClick={() => {alert("ver")}}/>
                <ButtonIcon name={<FaSignOutAlt/>} onClick={() => {alert("remover")}}/>
            </ContentActions>
        </Container>
    )
}