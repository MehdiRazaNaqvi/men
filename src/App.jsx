import { useState } from "react"


const App = () => {


  const [users, setusers] = useState([])

  const fetchkro = () => {

    fetch('http://localhost:4000/get')
      .then((r) => r.json())
      .then((d) => console.log(d))


  }



  return (
    <div>
      <h1>

        <button onClick={() => fetchkro()} >cllick kr bhai</button>

      </h1>
    </div>
  )



}



export default App