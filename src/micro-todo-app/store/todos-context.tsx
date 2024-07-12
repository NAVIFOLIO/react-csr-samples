import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { DateRange } from 'react-day-picker';
import { v4 as uuidv4 } from 'uuid';
import { addDays } from 'date-fns';

export type Todo = {
    id: string;
    title: string;
    description: string;
    date: DateRange | undefined;
    progress: 'New' | 'Working' | 'Done' | 'Pending';
};

export type NewTodo = {
    title: string;
    description: string;
    date: DateRange | undefined;
};

type TodosState = {
    Todos: Todo[];
};

const initialState: TodosState = {
    Todos: [{
        id: uuidv4(),
        title: 'Test Component',
        description: 'Test Link of New Header Component',
        date: {
            from: new Date(),
            to: addDays(new Date(), 30)
        },
        progress: 'Working'
    },
    {
        id: uuidv4(),
        title: 'Meet with Client',
        description: 'Have meeting with my client about released App',
        date: {
            from: addDays(new Date(), 10),
            to: addDays(new Date(), 11)
        },
        progress: 'New'
    },
    {
        id: uuidv4(),
        title: 'Launch App',
        description: 'Launch My App to server.',
        date: {
            from: addDays(new Date(), 10),
            to: addDays(new Date(), 40)
        },
        progress: 'Working'
    },{
        id: uuidv4(),
        title: 'Refactoring my code',
        description: 'Refactor Timeline Component of task management app',
        date: {
            from: new Date(),
            to: addDays(new Date(), 30)
        },
        progress: 'Working'
    },{
        id: uuidv4(),
        title: 'Write Article',
        description: 'Write Articles about my app',
        date: {
            from: addDays(new Date(), 7),
            to: addDays(new Date(), 9)
        },
        progress: 'Working'
    },{
        id: uuidv4(),
        title: 'Test Component',
        description: 'Test Link of New Header Component',
        date: {
            from: new Date(),
            to: addDays(new Date(), 30)
        },
        progress: 'New'
    },{
        id: uuidv4(),
        title: 'Setup Test Environment',
        description: 'Setup New Test Environment for Next 14.',
        date: {
            from: addDays(new Date(), 1),
            to: addDays(new Date(), 7)
        },
        progress: 'New'
    }],
};

type TodosContextValue = TodosState & {
    addTodo: (newTodoData: NewTodo) => void;
    removeTodo: (todoId: string) => void;
    editTodo: (updates: Todo) => void;
};

export const TodosContext = createContext<TodosContextValue | null>(null);

export function useTodosContext() {
    const todosCtx = useContext(TodosContext);

    if (todosCtx === null) {
        throw new Error('TodosContext is null');
    }

    return todosCtx;
}

type TodosContextProviderProps = {
    children: ReactNode;
};

type AddTodoAction = {
    type: 'ADD_TODO';
    payload: NewTodo;
};

type RemoveTodoAction = {
    type: 'REMOVE_TODO';
    id: string;
};

type EditTodoAction = {
    type: 'EDIT_TODO';
    updates: Todo;
};

type Action = AddTodoAction | RemoveTodoAction | EditTodoAction;

function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                Todos: [
                    ...state.Todos,
                    {
                        id: uuidv4(),
                        title: action.payload.title,
                        description: action.payload.description,
                        date: action.payload.date,
                        progress: 'New',
                    },
                ],
            };
        case 'REMOVE_TODO':
            return {
                Todos: state.Todos.filter((todo) => {
                    return todo.id !== action.id;
                }),
            };
        case 'EDIT_TODO':
            return {
                Todos: state.Todos.map((todo) => {
                    if (todo.id === action.updates.id) {
                        return {
                            ...todo,
                            ...action.updates,
                        };
                    } else {
                        return todo;
                    }
                }),
            };
        default:
            return state;
    }
}

export default function TodosContextProvider({
    children,
}: TodosContextProviderProps) {
    const [todosState, dispatch] = useReducer(todosReducer, initialState);

    const ctx: TodosContextValue = {
        Todos: todosState.Todos,
        addTodo(newTodoData) {
            dispatch({ type: 'ADD_TODO', payload: newTodoData });
        },
        removeTodo(todoId) {
            dispatch({ type: 'REMOVE_TODO', id: todoId });
        },
        editTodo(updates) {
            dispatch({ type: 'EDIT_TODO', updates });
        },
    };

    return (
        <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>
    );
}
