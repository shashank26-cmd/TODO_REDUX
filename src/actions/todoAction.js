
import  { ADD_TODO , DELETE_TODO , EDIT_TODO , Finish_TODO } from '../constants/action.js'


export const todoFinished=(todo,isFinished)=>({type:Finish_TODO,payload:{todo,isFinished:isFinished}});
export const addtodo=(inputText)=>({type:ADD_TODO,payload:{todoText:inputText}});
export const deletetodo=(todo)=>({type:DELETE_TODO,payload:{todo}});
export const edittodo=(todo,todoText)=>({type:EDIT_TODO,payload:{todo,todoText}});