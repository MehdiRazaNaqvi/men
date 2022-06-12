
import { useState, useNavigate } from "react";


const App = () => {


  const [users, setusers] = useState({ name: "" })

  // let navigate = useNavigate();




  const fetchkro = () => {

    fetch('http://localhost:3000/get', {
      method: "get"
    })
      .then((d) => console.log(d))


  }





  const sendkro = () => {








    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    };



    fetch('http://localhost:3000/posst', {


      method: 'post',
      body: JSON.stringify(users),
      headers: headers



    })

  }






  return (
    <div>
      <h1>

        <button onClick={() => fetchkro()} >cllick kr bhai</button>

        <input type="text" onChange={(e) => setusers({ name: e.target.value })} />
        <button onClick={() => sendkro()} >SEND DATA</button>





      </h1>
    </div>
  )



}



export default App