import { type FC } from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { DatePickerWithRange } from './DateRangePicker';
import { useState } from 'react';
import { addDays } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { CalendarPlus2, Plus } from 'lucide-react';
import { useTodosContext } from '../store/todos-context';

const TodoForm: FC = () => {
    const todosCtx = useTodosContext();

    const [inputTitle, setInputTitle] = useState<string>('');
    const [inputDescription, setInputDescription] = useState<string>('');
    const [inputDate, setInputDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 30),
    });

    console.log(
        `title:${inputTitle}, description:${inputDescription}, date:${inputDate}`
    );

    return (
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="mb-2.5">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Todo
                    </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px] max-w-full">
                    <SheetHeader>
                        <SheetTitle>Add Your New Todo</SheetTitle>
                        <SheetDescription>
                            input details of todo below
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid grid-cols-1 gap-4 m-4">
                        <div>
                            <DatePickerWithRange
                                date={inputDate}
                                setDate={setInputDate}
                            />
                        </div>
                        <div>
                            <Label htmlFor="todo-name">Title</Label>
                            <Input
                                type="text"
                                id="todo-name"
                                placeholder="todo name"
                                value={inputTitle}
                                onChange={(e) => {
                                    setInputTitle(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <Label htmlFor="todo-detail">Detail</Label>
                            <Textarea
                                className="h-28"
                                id="todo-detail"
                                placeholder="write detail of todo."
                                value={inputDescription}
                                onChange={(e) => {
                                    setInputDescription(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button
                                onClick={() => {
                                    if (
                                        inputTitle !== '' &&
                                        inputDescription !== ''
                                    ) {
                                        todosCtx.addTodo({
                                            title: inputTitle,
                                            description: inputDescription,
                                            date: inputDate,
                                        });
                                    }
                                }}
                            >
                                <CalendarPlus2 className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default TodoForm;
