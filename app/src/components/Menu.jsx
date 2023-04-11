import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../useAuth';

const routes = [
    { name: 'Home', to: '/', private: false },
    { name: 'Blog', to: '/blog', private: false },
    { name: 'Profile', to: '/profile', private: true },
    { name: 'Login', to: '/login', private: false },
    { name: 'Logout', to: '/Logout', private: true },
]

const Menu = () => {
    const auth = useAuth();

    return (
        <nav>
            <ul>
                {routes.map(route => {
                    if(route.private && !auth.user) return null;
                    if(route.to === '/login' && auth.user) return null;

                    return (
                        <li key={route.to}>
                            <NavLink
                                className={({ isActive }) => isActive ? 'active' : ''}
                                to={route.to}
                                end
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}



export default Menu