import React from "react";
import {Container} from "./style";

export const ButtonIcon = ({name,onClick}) => {
    return(
        <Container onClick={() => {onClick()}}>
            {name}
        </Container>
    )
}