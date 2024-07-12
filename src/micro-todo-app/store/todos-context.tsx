import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { DateRange } from 'react-day-picker';
import { v4 as uuidv4 } from 'uuid';
import { initialState } from './demoData';

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

export type TodosState = {
    Todos: Todo[];
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
