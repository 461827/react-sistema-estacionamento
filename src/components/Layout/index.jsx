import React from "react";

import {Container} from "./style";

export const Layout = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    );
};