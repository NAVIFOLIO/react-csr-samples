import { openDB } from 'idb';
import { type TodosState } from './todos-context';
import { type Action } from './todos-context';

export default async function syncWithClientDB(
    state: TodosState,
    action: Action
) {
    const db = await openDB('TodoAppData', 1);

    switch (action.type) {
        case 'ADD_TODO':
            const DatatoSaveIDB = {
                ...action.payload,
                progress: 'New',
            };
            await db.add('todos', DatatoSaveIDB);
            return;
        case 'REMOVE_TODO':
            await db.delete('todos', action.id);
            return;
        case 'EDIT_TODO':
            const updatedTodo = await state.Todos.map((todo) => {
                if (todo.id === action.updates.id) {
                    return {
                        ...todo,
                        ...action.updates,
                    };
                }
            });

            if (updatedTodo.length === 0 || updatedTodo.length > 1) {
                throw Error('client db is not sync with state correctly');
            } else {
                await db.put('todos', updatedTodo[0]);
            }
            return;
        default:
            return;
    }
}
