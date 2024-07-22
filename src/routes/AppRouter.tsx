import { type FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from '@/components/Header';
import Home from '@/components/Home';
import MicroTodoApp from '@/micro-todo-app/App';
import { InternalLinkContainer } from '@/components/LinkContainer';
import TourismSite from '@/TourismSite/App';

const AppRouter: FC = () => (
    <HashRouter>
        <InternalLinkContainer as={Header} internalLink="/" />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/microTodo" element={<MicroTodoApp />} />
            <Route path="/tourism" element={<TourismSite />} />
        </Routes>
    </HashRouter>
);

export default AppRouter;
