/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList({editTodo , deleteTodo ,todoFinished}){

const list=useSelector((state)=>state.todo);//state mai se joh chahiye woh leleta hai
   

function onFinished(todo,isFinished){
    
todoFinished(todo,isFinished)
 }


function onDelete(todo){

deleteTodo(todo)
}
function onEdit(todo,todoText){

editTodo(todo,todoText)

}

// so now we will use reducer to improve readability of code reduce the work
//reducer will take two things state and action ex state as list and action as delete onedit etc

return (
 <div>
    {list.length > 0 && list.map(todo=><Todo key={todo.id} 
     isFinished={todo.Finished}
     id={todo.id} 
     todoData={todo.todoData}
     changeFinished={(isFinished)=>onFinished(todo,isFinished)}
      
     onDelete={()=>onDelete(todo)}
     onEdit={(todoText)=>onEdit(todo,todoText)}


      />)}
    </div>
)
    }

export default TodoList;