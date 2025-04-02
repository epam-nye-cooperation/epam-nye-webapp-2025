import { Link, Outlet, useSearchParams } from 'react-router';
import './Todos.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../src/store/todosSlice';

export const TodosPage = ({ todos }) => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('text') || '';

  const handleSearch = (e) => {
    const text = e.target.value;
    if(text) {
      setSearchParams({ text });
    } else {
      setSearchParams({});
    }
  };

  const addNewTodo = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    dispatch(addTodo(text));
    e.target.reset();
  }

  return (
    <>
      <h2>Todos</h2>
      <h3>Add Todo</h3>
      <form onSubmit={addNewTodo} className="todo-form">
        <input type="text" placeholder="Enter todo text" className="todo-input" />
        <button type="submit" className="todo-button">Add</button>
      </form>
      <div className="todos-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search..."
          className="search-input"
        />
        {todos
        .filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((todo) => (
          <div key={todo.id} className="todo-card">
            <Link to={`${todo.id}`} className="todo-link">
              <p><strong>Text:</strong> {todo.text}</p>
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};