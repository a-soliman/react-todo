import React from 'react';
import { NavLink } from 'react-router-dom';

import NavComponent from './NavComponent';

const HeaderComponent = () => (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>Todo</div>
            </div>
            <div className='row'>
                <NavComponent />
            </div>
        </div>
    </div>
);

export default HeaderComponent;