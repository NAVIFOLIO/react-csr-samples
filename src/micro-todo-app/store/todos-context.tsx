import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { DateRange } from 'react-day-picker';
import { v4 as uuidv4 } from 'uuid';
import initializer from './initializer';
import syncWithClientDB from './syncData';

export type Todo = {
    id: string;
    title: string;
    description: string;
    date: DateRange | undefined;
    progress: 'New' | 'Working' | 'Done' | 'Pending';
};

export interface NewTodo {
    title: string;
    description: string;
    date: DateRange | undefined;
}

export interface NewTodoExtendToSync extends NewTodo {
    // add id property to sync with indexedDB
    id: string;
}

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

type AddTodoActionToSync = {
    type: 'ADD_TODO';
    payload: NewTodoExtendToSync;
};

type RemoveTodoAction = {
    type: 'REMOVE_TODO';
    id: string;
};

type EditTodoAction = {
    type: 'EDIT_TODO';
    updates: Todo;
};

// export type Action = AddTodoAction | RemoveTodoAction | EditTodoAction;
export type Action = AddTodoActionToSync | RemoveTodoAction | EditTodoAction;

function todosReducer(state: TodosState, action: Action): TodosState {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                Todos: [
                    ...state.Todos,
                    {
                        // id: uuidv4();
                        id: action.payload.id,
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

let initialState: TodosState;
(async () => {
    initialState = await initializer();
})();

export default function TodosContextProvider({
    children,
}: TodosContextProviderProps) {
    const [todosState, dispatch] = useReducer(todosReducer, initialState);

    const ctx: TodosContextValue = {
        Todos: todosState.Todos,
        addTodo(newTodoData) {
            const newId = uuidv4();
            const newTodoDataToSync = {
                ...newTodoData,
                id: newId,
            };
            dispatch({
                type: 'ADD_TODO',
                // payload: newTodoData
                payload: newTodoDataToSync,
            });
            syncWithClientDB(todosState, {
                type: 'ADD_TODO',
                payload: newTodoDataToSync,
            });
        },
        removeTodo(todoId) {
            dispatch({ type: 'REMOVE_TODO', id: todoId });
            console.log('remove is called');
            syncWithClientDB(todosState, { type: 'REMOVE_TODO', id: todoId });
        },
        editTodo(updates) {
            dispatch({ type: 'EDIT_TODO', updates });
            console.log('edit is called');
            syncWithClientDB(todosState, { type: 'EDIT_TODO', updates });
        },
    };

    return (
        <TodosContext.Provider value={ctx}>{children}</TodosContext.Provider>
    );
}
