
import './App.css';
import {useState, useEffect} from "react";
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase';


function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  console.log('input',input);
  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  //useEffect run when the app loads
  useEffect(()=>{
    //this code here... runs when app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc=>doc.data()))
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
      
    })
  },[]);


  const addTodo = (event)=>{

    //this will fire up when we click the button

    //to prevent default data
    event.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //appen
    setTodos([...todos,input])
    console.log('clicked')
    setInput('') // to clear up input

  }


  return (
    <div>
        <h1>Hello World </h1>
        <form>
          <input value={input} onChange= {event => setInput(event.target.value)}/>
          <button type="submit" onClick={addTodo}> Add Todo </button>

        </form>
        
        <ul> 
          {todos.map(todo =>(
            <Todo todo={todo} />
              
            ))
          }
        </ul>

    </div>

    
  );
}

export default App;
