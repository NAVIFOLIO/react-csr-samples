import React from 'react';
import { type FC } from 'react';
import { TableCell, TableRow } from '@/components/ui/table';
import StatusChangeButton from './StatusChangeButton';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useTodosContext, type Todo } from '../store/todos-context';
import { Button } from '@/components/ui/button';

interface TodoInTableProps {
    todoData: Todo;
}

const TodoInTable: FC<TodoInTableProps> = ({ todoData }) => {
    const todosCtx = useTodosContext();
    const { id, title, description, date } = todoData;
    const { from, to } = date;

    return (
        <>
            <TableRow>
                <TableCell className="font-medium">
                    <StatusChangeButton todoNow={todoData} />
                </TableCell>
                <TableCell>
                    {<span className="font-bold mr-2">{title}</span>}
                    <Popover>
                        <PopoverTrigger>
                            <Button className="max-h-7 bg-gray-900">
                                Detail
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>{description}</PopoverContent>
                    </Popover>
                </TableCell>
                <TableCell>{from.toDateString()}</TableCell>
                <TableCell>{to.toDateString()}</TableCell>
                <TableCell className="text-right">
                    <Button
                        onClick={() => {
                            todosCtx.removeTodo(id);
                        }}
                        className="max-h-7 bg-gray-900"
                    >
                        Remove
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default TodoInTable;
