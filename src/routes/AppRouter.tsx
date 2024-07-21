import { type FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from '@/components/Header';
import Home from '@/components/Home';
import microTodoApp from '../micro-todo-app/App';

import { InternalLinkContainer } from '@/components/LinkContainer';

const AppRouter: FC = () => (
    <HashRouter>
        <InternalLinkContainer as={Header} internalLink="/" />
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/microTodo" Component={microTodoApp} />
        </Routes>
    </HashRouter>
);

export default AppRouter;
