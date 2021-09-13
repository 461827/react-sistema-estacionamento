import React from "react";
import {Container,ContainerButton} from "./style"

import {Subtitle} from "../Subtitle";
import {Button} from "../Button";
import {Space} from "../Space";


export const ModalDialog = ({title, labelNext, labelStop, onNext, onStop}) => {
    return(
        <Container>
            <Subtitle>{title}</Subtitle>

            <ContainerButton>
                <Button label={labelNext ? labelNext : "ok"} onClick={() => {onNext()}}/>

                {labelStop && (
                    <>
                        <Space left={2}/>
                        <Button label="Não" onClick={() => {onStop()}}/>
                    </>
                ) }
            </ContainerButton>
        </Container>
    );
}