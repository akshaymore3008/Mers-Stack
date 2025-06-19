// if else = Jar tar jar he aseal tar te kar
// Recate Hooks = useState , useeffect
// component
// event = onChange , OnClick
import { useState } from "react";


function App() {

  const
    [name, setName] = useState() // 1 hook

  const [showname, setshowName] = useState(false)

  console.log(name);

  const handleOnChange = () => {
    console.log(e.target.value, "====")

    setName(e.target.value)

  }



  const handelSubmit = () => {


  }


  return (
    <>
      <input name="name" placeholder="Enter Your Name" onChange={handleOnChange} />
      <button onClick={handelSubmit}>Submit</button>

      {
        showname && <h1>{name}</h1>} 
    
  </>
}

export default App
