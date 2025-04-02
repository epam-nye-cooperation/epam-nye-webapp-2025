import { Outlet } from 'react-router';
import './Layout.css';

export const Layout = () => {
  return (
    <div className="layout">
      <main className="layout-content">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <p>&copy; 2025 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};