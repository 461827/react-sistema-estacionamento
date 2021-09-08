import React from "react";

import {Container} from "./style"

export const Button = ({label, onClick}) => {

    return (
        <Container onClick={() =>{onClick()}}>
           {label}
        </Container>
        
    )
}
