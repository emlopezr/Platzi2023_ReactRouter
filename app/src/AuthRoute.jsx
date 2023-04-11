import React from "react";
import useAuth from "./useAuth";
import { Navigate } from "react-router-dom";

const AuthRoute = ({children}) => {
    const auth = useAuth();

    if(!auth.user) {
        return <Navigate to="/login"/>
    }

    return children;
}

export default AuthRoute;