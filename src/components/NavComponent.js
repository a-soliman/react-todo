import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () => (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to="/" exact={true} activeClassName="active">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/create" activeClassName="active">Create Todo</NavLink>
            </li>
        </ul>
    </nav>
);

export default NavComponent;