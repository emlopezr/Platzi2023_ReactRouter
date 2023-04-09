import React from 'react'
import { NavLink } from 'react-router-dom'

const routes = [
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog' },
    { name: 'Profile', to: '/profile' }
]

const Menu = () => {
    return (
        <nav>
            <ul>
                {routes.map(route => (
                    <li key={route.to}>
                        <NavLink
                            className={({ isActive }) => isActive ? 'active' : ''}
                            to={route.to}
                            end
                        >
                            {route.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}



export default Menu