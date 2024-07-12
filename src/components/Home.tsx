import { type FC } from 'react';
import LinkCards from './LinkCards';

export type LinkCardProps = {
    id: number;
    link: string;
    title: string;
    description: string;
    gitlink: string;
};

const d: Array<LinkCardProps> = [
    {
        id: 1,
        link: '/microTodo',
        title: 'Micro Todo',
        description: 'This is micro todo app',
        gitlink: 'https://github.com/NAVIFOLIO/react-csr-samples/tree/main/src/micro-todo-app'
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
