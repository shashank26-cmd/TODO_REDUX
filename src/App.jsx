import './App.css'
import { useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo/AddTodo.jsx';
import TodoList from './components/TodoList/TodoList'
import { bindActionCreators } from 'redux';
import { addtodo,deletetodo,edittodo,todoFinished} from './actions/todoAction'

function App() {

  const  dispatch=useDispatch();
  const actions=bindActionCreators( { addtodo,deletetodo,edittodo,todoFinished},dispatch);



  return (

    <>
    

    <AddTodo addTodo={actions.addtodo} />
      <TodoList deleteTodo={actions.deletetodo} editTodo={actions.edittodo} todoFinished={actions.todoFinished}     />

    </>


 
  );
}

export default App;
