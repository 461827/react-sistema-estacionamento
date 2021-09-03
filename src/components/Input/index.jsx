import React from "react";

import {Container,Label, InputText} from "./style"

export const Input = ({label,placeholder}) => {
    return(
        <Container>
            <Label htmlFor="">{label}</Label>
            <InputText type="text" placeholder={placeholder} />
        </Container>
    )
} 






