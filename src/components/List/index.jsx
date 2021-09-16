import React,{useState, useEffect} from "react";

import {Container} from "./style";
import {Item} from "./Item"

export const List = ({data}) => {
    const [dataList, setDataList] = useState([]);
    const [refresh, setRefresh] = useState("")
    
    useEffect(() => {
        setDataList(data)
    }, [refresh])  
        
   return(
       <Container>
           {dataList.map( (item,key) => {
               return <Item data={item} key={key} setRefresh={setRefresh}/> 
           })}
       </Container>
    )
}