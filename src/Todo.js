import React from 'react';
import db from './firebase';

function Todo(props){
	const deleteTodo = (event)=>{
		db.collection('todos').doc(props.todo.id).delete()

	}
	return(
		<div>
			<li>{props.todo.todo}</li>
			<button onClick={deleteTodo}> Delete Me</button>
		</div>
		)
}

export default Todo;