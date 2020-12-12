
import './App.css';
import {useState} from "react";

function App() {
  const [todos,setTodos] = useState(['Talk dogs for walk','Talk dogs for walk','Let me sleep']);


  return (
    <div>
        <h1>Hello World </h1>
        <input />
        <button>Add Todo </button>

        <ul> 
          {todos.map(todo =>(
              <li>{todo}</li>
            ))
          }
        </ul>

    </div>

    
  );
}

export default App;
