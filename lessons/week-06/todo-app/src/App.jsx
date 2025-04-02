import { Navigation } from './components/Navigation/Navigation'

import './App.css'
import { HomePage } from '../pages/home/HomePage'
import { TodosPage } from '../pages/todos/TodosPage'
import { Route, Routes, useNavigate } from 'react-router'
import { Layout } from './components/Layout/Layout'
import { NotFoundPage } from '../pages/notFound/NotFoundPage'
import { TodoItemPage } from '../pages/todos/TodoItemPage'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './store/todosSlice'

function App() {
  const navigate = useNavigate();
  
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    // setTodos((state) => state.filter((todo) => todo.id !== id));
    dispatch(removeTodo(id));
    navigate('/todos');
  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>My Todo APP</h1>
      <Navigation />
      <Routes>
        <Route element={<Layout />} >
          <Route index path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage todos={todos} />}>
            <Route path=":id" element={<TodoItemPage onRemoveTodo={handleRemoveTodo} />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
