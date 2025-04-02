import { NavLink  } from 'react-router';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive}) => isActive ? 'active-link' : ''} >Home</NavLink >
      <NavLink  to="/todos" className={({ isActive}) => isActive ? 'active-link' : ''}>Todos</NavLink >
    </nav>
  );
};