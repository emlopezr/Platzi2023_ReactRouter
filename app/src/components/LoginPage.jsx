import React, { useState } from 'react'
import useAuth from '../useAuth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
    const auth = useAuth();
    const [username, setUsername] = useState('');

    if(auth.user) return <Navigate to="/profile"/>

    const login = (e) => {
        e.preventDefault();
        auth.login(username);
    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={login}>
                <label>Escribe tu nombre de usuario</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default LoginPage