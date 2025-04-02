import { Link, useParams } from "react-router";
import './TodoItem.css';

export const TodoItemPage = ({ onRemoveTodo }) => {
  const { id } = useParams();

  return (
    <>
      <h2>TodoItem: {id}</h2>
      <div className="todo-item-container">
        <button className="remove-button" onClick={() => onRemoveTodo(Number(id))}>Remove</button>
        <Link to="/todos" className="back-link">Back to Todos</Link>
      </div>
    </>
  );
}