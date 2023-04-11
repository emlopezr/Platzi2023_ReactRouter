import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const adminList = ['lopezemmanuel'];

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const login = (username) => {
        const isAdmin = adminList.includes(username);

        setUser({ username, isAdmin })
        navigate('/profile');
    }
    const logout = () => {
        setUser(null)
        navigate('/');
    }

    const auth = { user, login, logout };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;