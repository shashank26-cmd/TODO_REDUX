/* eslint-disable react/prop-types */
import {  useState } from "react";
function AddTodo({addTodo}){


const[inputText,setinputText]=useState('');

return(
<div>
<input type="text" 
placeholder="add todo"
value={inputText}
onChange={e=>setinputText(e.target.value)}

/>


<button onClick={()=>{
addTodo(inputText)
setinputText('');
}}>Add</button>

</div>



)


}
export default AddTodo;