import { type FC } from 'react';
import { Telescope } from 'lucide-react';

export type HeaderProps = {};

const Header: FC<HeaderProps> = () => (
    <header className="flex mb-5 border-b">
        <Telescope className="mr-6" />
        <h1 className="font-bold mb-5">React App Micro Samples</h1>
    </header>
);

export default Header;
