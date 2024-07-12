import { useTodosContext, type Todo } from '../store/todos-context';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { type FC } from 'react';
import StatusChangeButton from './StatusChangeButton';
import { CalendarCheck2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TodoInCardProps {
    todoData: Todo;
}

const TodoInCard: FC<TodoInCardProps> = ({ todoData }) => {
    const todosCtx = useTodosContext();
    const { id, title, description, date, progress } = todoData;

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center">
                        <CalendarCheck2 className="mr-4" />
                        {title}
                    </div>
                </CardTitle>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Detail</AccordionTrigger>
                        <AccordionContent>
                            <CardContent>
                                <p>{description}</p>
                            </CardContent>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardHeader>
            <CardFooter className='flex justify-between'>
                    <div className="w-18 mr-4">
                        <StatusChangeButton todoNow={todoData} />
                    </div>
                    <div className="mr-6">
                        <p>
                            {date!.from!.getMonth()}/{date!.from!.getDate()}/
                            {date!.from!.getFullYear()} - {date!.to!.getMonth()}/
                            {date!.to!.getDate()}
                        </p>
                    </div>
                    <div className="ml-auto">
                        <Button
                            onClick={() => {
                                todosCtx.removeTodo(id);
                            }}
                            className="h-8 bg-gray-900"
                        >
                            <Trash2 size={18} />
                        </Button>
                    </div>
            </CardFooter>
        </Card>
    );
};

export default TodoInCard;
