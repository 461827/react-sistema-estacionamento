import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    margin-top: ${({top})=> top ? top * 8 : 8}px;
`;

export const Space = ({top}) => (<Container top={top}/>)