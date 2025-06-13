import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './component/Navbar.jsx'
import './index.css'
import AddTodoForm from './component/AddTodoForm.jsx'
import TodoList from './component/TodoList.jsx'
import Todo from './component/Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Navbar/>
    <AddTodoForm/>
    <TodoList items={["1","iphone"]}/> */}
    <Todo/>
  </StrictMode>,
)
