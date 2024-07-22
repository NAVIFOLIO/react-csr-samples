import { type FC } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider from './store/todos-context';

const MicroTodoApp: FC = () => {
    return (
        <TodosContextProvider>
            <TodoForm />
            <TodoList />
        </TodosContextProvider>
    );
};

export default MicroTodoApp;
