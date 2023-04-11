import React from 'react'
import useAuth from '../useAuth';

const LogoutPage = () => {
    const auth = useAuth();

    const logout = (e) => {
        e.preventDefault();
        auth.logout();
    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={logout}>
                <label>¿Seguro que quieres salir?</label>
                <button type="submit">Salir</button>
            </form>
        </>
    )
}

export default LogoutPage