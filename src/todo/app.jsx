import { useEffect } from "react";
import { useState } from "react"










const App = () => {
    const [todo, settodo] = useState("");

    const [todolist, settodolist] = useState([]);


 




    const fetchdata = () => {
        fetch('http://localhost:4000/get', {
            method: "get"
        })
            .then((r) => r.json())
            .then((d) => console.log(d))
    }






    const postdata = () => {


        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': '*'
        };


        // const data = { name: "mehdi", age: 22 }

        fetch(' http://localhost:4000/post', {
            method: 'post',
            headers: headers,
            body: JSON.stringify(todolist)
        })



    }


    return (


        <div>

            <input value={todo} onChange={(e) => settodo(e.target.value)} type="text" placeholder="enter todo" />
            <button onClick={() => { settodolist(todolist.concat(todo)); settodo("") }} >Add</button>

            {

                todolist.map((v, i) => (
                    <div key={i}>

                        <li> {v} </li>

                    </div>
                ))

            }











            <button onClick={() => fetchdata()} >Fetch</button>
            <button onClick={() => postdata()} >Post</button>

        </div>


    )
}


export default App