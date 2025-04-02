import { useContext, useState } from 'react';
import { AppContext } from './App.jsx';
import { useLocalStorage } from './use-local-storage.js';

export function Page() {
    const { auth } = useContext(AppContext);

    const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        }).then(() => {
            window.location.reload();
        });
    }

    const logout = () => {
        fetch('http://localhost:3001/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        }).then(() => {
            window.location.reload();
        });
    };

    const onGuestClick = () => fetch('http://localhost:3001/api/guest', { credentials: 'include' })
        .then(res => res.json())
        .then(console.log)

    return (
        <div className={['page', isDarkMode ? 'dark' : ''].join(' ')}>
            <pre className="debug">{JSON.stringify(auth, null, 2)}</pre>
            <div>
                Dark mode: <input type="checkbox" checked={isDarkMode} onChange={e => setIsDarkMode(e.currentTarget.checked)} />
            </div>
            {auth === undefined && 'Loading ...'}

            {auth === null
                && <form>
                    <div>
                        <input
                            onChange={e => setUsername(e.currentTarget.value)}
                            value={username}
                            type="text"
                            name="demo_username"
                            placeholder="Username"/>
                    </div>
                    <div>
                        <input
                            onChange={e => setPassword(e.currentTarget.value)}
                            value={password}
                            type="password"
                            name="demo_password"
                            placeholder="********"/>
                    </div>
                    <div>
                        <button type="submit" onClick={login}>Log in</button>
                    </div>
                </form>}

            {!!auth?.sub
                && <div>
                    <h1>Hello, <strong>{auth.sub}</strong>!</h1>
                    <div>Roles: {auth.roles.join(' ')}</div>
                    {auth.roles.includes('guest')
                        && <div>
                            <button onClick={onGuestClick}>Guest</button>
                        </div>}
                    <button onClick={logout}>Logout</button>
                </div>}
        </div>
    )
}
