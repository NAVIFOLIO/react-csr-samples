import React, { useContext } from 'react';
import { type FC } from 'react';
import Todo from './TodoInTable';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import TodoInTable from './TodoInTable';
import { useTodosContext } from '../store/todos-context';

const TodoListTable: FC = () => {
    const todosCtx = useTodosContext();
    return (
        <Table>
            <TableCaption>A list of your todos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-12">Status</TableHead>
                    <TableHead>Todo</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead className="text-right"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todosCtx.Todos.map((todo) => {
                    return <TodoInTable key={todo.id} todoData={todo} />;
                })}
            </TableBody>
        </Table>
    );
};

export default TodoListTable;
