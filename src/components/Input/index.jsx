import React from "react";

import {Container,Label, InputText} from "./style"

import {Space} from "../Space"

export const Input = ({label,placeholder,top, onChange, value, disabled}) => {
    return(
        <>
            <Container>
                <Label htmlFor="">{label}</Label>
                <InputText 
                    type="text" 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    value={value} 
                    disabled={disabled}
                />
            </Container>
            <Space top={top? top: 0}/>
        </>
    )
} 






