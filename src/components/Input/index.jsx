import React from "react";

import {Container,Label, InputText} from "./style"

import {Space} from "../Space"

export const Input = ({label,placeholder,top}) => {
    return(
        <>
            <Container>
                <Label htmlFor="">{label}</Label>
                <InputText type="text" placeholder={placeholder} />
            </Container>
            <Space top={top? top: 0}/>
        </>
    )
} 






