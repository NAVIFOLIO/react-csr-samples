import React from 'react';
import { NavLink } from 'react-router-dom';
import { type FC } from 'react';
import { Telescope } from 'lucide-react';

const Header: FC = () => (
    <NavLink to="/">
        <header className="flex mb-5 border-b">
            <Telescope className="mr-6" />
            <h1 className="font-bold mb-5">React App Micro Samples</h1>
        </header>
    </NavLink>
);

export default Header;
