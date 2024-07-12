import { type FC } from 'react';
import LinkCards from './LinkCards';

export type LinkCardProps = {
    id: number;
    link: string;
    title: string;
    description: string;
};

const d: Array<LinkCardProps> = [
    {
        id: 1,
        link: '/microTodo',
        title: 'Micro Todo',
        description: 'This is micro todo app',
    },
];

const Home: FC = () => {
    return (
        <>
            <LinkCards texts={d} />
        </>
    );
};

export default Home;
