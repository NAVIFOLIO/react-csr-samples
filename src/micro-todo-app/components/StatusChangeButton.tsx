import React from 'react';
import { type FC } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useTodosContext } from '../store/todos-context';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';
import { type Todo } from '../store/todos-context';

interface StatusButtonProps {
    todoNow: Todo;
}

type SelectEventObject = 'New' | 'Working' | 'Pending' | 'Done';

const StatusChangeButton: FC<StatusButtonProps> = ({ todoNow }) => {
    const todosCtx = useTodosContext();

    return (
        <Select
            onValueChange={(value: SelectEventObject) => {
                todosCtx.editTodo({
                    ...todoNow,
                    progress: value,
                });
            }}
        >
            <SelectTrigger>
                <SelectValue placeholder={todoNow.progress} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Working">Working</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default StatusChangeButton;
