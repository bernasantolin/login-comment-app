import { createContext, useState, useEffect, memo } from 'react';
export const AuthContext = createContext();

export const AuthProvider = memo(({ children }) => {
    const [auth, setAuth] = useState(false);
    const authStorage = localStorage.getItem('auth');

    useEffect(()=>{
        if(auth) localStorage.setItem('auth', auth);
    },[auth]);

    const handleLogin = ({ email, password }) => {
        if(email === "admin@email.com" && password === '123456') {
            setAuth(true);
            window.location.reload();
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('auth');
        window.location.reload();
    }
    
    const values = {
        hasAuth: JSON.parse(authStorage) ? true : false,
        handleLogin,
        handleLogout,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
});