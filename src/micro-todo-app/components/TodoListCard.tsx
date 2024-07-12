import React from 'react';
import { type FC } from 'react';

import { useTodosContext } from '../store/todos-context';
import TodoInCard from './TodoInCard';

const TodoListCard: FC = () => {
    const todosCtx = useTodosContext();
    return (
        <div className="grid grid-cols-1 gap-4">
            {todosCtx.Todos.map((todo) => {
                return <TodoInCard key={todo.id} todoData={todo} />;
            })}
        </div>
    );
};

export default TodoListCard;
