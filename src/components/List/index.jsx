import React from "react";

import {Container} from "./style";
import {Item} from "./Item"

export const List = ({data}) => {
    return(
       <Container>
           {data.map( (item,key) => {
               return <Item data={item} key={key}/> 
           })}
       </Container>
    )
}