export const db = [
    {
      nameClient: "Diego",
      model:"Corolla",
      plate: "lup5500",
      employee:"Luiz",
      parkingSpace: 6

    },
    {
      nameClient: "Vitor",
      model:"Civic",
      plate: "ABB2341",
      employee:"André",
      parkingSpace: 2

    },
    {
      nameClient: "Renata",
      model:"Gol",
      plate: "JHG5467",
      employee:"Bruno",
      parkingSpace: 5

    }
]

// ALTERAR UM ITEM
export const updateItemV2 = (data) => {
  let alvo = db.findIndex((item) => {
    return item.parkingSpace === data.parkingSpace  
  })
  
  if(alvo === -1){
    return
  }
  
  db.splice(alvo, 1);

  db.push(data)
 
}

const dataIUptaded = {
  nameClient: "Victor",
  model: "Civic", 
  plate: "ABB2341",
  employee: "André",
  parkingSpace: 2
}
//updateItemV2(dataIUptaded)

// BUSCAR UM ITEM
export const selecionaVeiculo = (vaga) => {
  console.log(db.find((veiculo)=>{return veiculo.parkingSpace === vaga}))
} 
//selecionaVeiculo(6)

// REMOVER UM ITEM
export const removeItem = (vaga) => {
  let alvo = db.findIndex((item) => {
    return item.parkingSpace === vaga 
  })

  db.splice(alvo,1);

}
//removeItem(6);