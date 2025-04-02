import { createContext, useEffect, useState } from 'react';
import { Page } from './Page.jsx';

export const AppContext = createContext({ auth: undefined });

function App({ initPromise }) {
    const [auth, setAuth] = useState(undefined);

    useEffect(() => {
        initPromise.then(res => {
            if (res.error) {
                setAuth(null);
            } else {
                setAuth(res);
            }
        });
    }, [initPromise]);

    return <AppContext.Provider value={{ auth }}>
        <Page />
    </AppContext.Provider>
}

export default App
