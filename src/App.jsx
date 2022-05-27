import { useState } from "react"


const App = () => {


  const [users , setusers] = useState([])

  const fetchkro = () => {

    fetch('http://localhost:4000/get')
      .then((r) => r.json())
      .then((d) => setusers(d))


  }



  return (
    <div>
      <h1>
        <button onClick={() => fetchkro()} >cllick kr bhai</button>

        {users.map( (v,i) => <li key={i}>{v.name}</li> )}

      </h1>
    </div>
  )



}



export default App