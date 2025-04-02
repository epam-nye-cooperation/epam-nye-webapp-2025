import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './index.css'

const initPromise = fetch('http://localhost:3001/api/token', { credentials: 'include' }).then(res => res.json())

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App initPromise={initPromise} />
    </StrictMode>
);
