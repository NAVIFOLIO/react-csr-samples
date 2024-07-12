import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import { type FC } from 'react';

import Home from '@/components/Home';
import microTodoApp from '../micro-todo-app/App';

const links: Array<string> = ['/', '/microTodo'];

const AppRouter: FC = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/microTodo" Component={microTodoApp} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
