import React from 'react';
import { type FC } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import TodoListTable from './TodoListTable';
import TodoListCard from './TodoListCard';

const TodoList: FC = () => {
    const { windowWidth, windowHeight } = useWindowSize();

    return <>{windowWidth < 640 ? <TodoListCard /> : <TodoListTable />}</>;
};

export default TodoList;
