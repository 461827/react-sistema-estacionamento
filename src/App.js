import React,{useState} from "react";

import PageForm from "./pages/Form";
import PageList from "./pages/List";

function App() {
  const [route,setRoute] = useState("register");

  return (
    <> 
    {route === "home" && <PageList setRoute={setRoute}/>}
    {route === "register" && <PageForm setRoute={setRoute}/>}
      
    </>
  );
}

export default App;
