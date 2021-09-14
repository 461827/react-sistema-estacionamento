import React from "react";

import {Container,Label, InputText} from "./style"

import {Space} from "../Space"

export const Input = ({label,placeholder,top, onChange, value}) => {
    return(
        <>
            <Container>
                <Label htmlFor="">{label}</Label>
                <InputText 
                    type="text" 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    value={value} 
                />
            </Container>
            <Space top={top? top: 0}/>
        </>
    )
} 






