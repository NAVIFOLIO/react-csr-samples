import { openDB } from 'idb';
import { demoData } from './demoData';
import { type TodosState } from './todos-context';

export default async function initializer(): Promise<TodosState> {
    let initialState: TodosState;
    let existPrevData: Boolean = true;

    const db = await openDB('TodoAppData', 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('todos')) {
                existPrevData = false;
                const todoStore = db.createObjectStore('todos', {
                    keyPath: 'id',
                });
                todoStore.createIndex('idIndex', 'id', { unique: true });
            }
        },
    });

    if (!existPrevData) {
        // Add dummy data to clientDB to demonstrate.
        // This is only nessesary for demo.
        const tx = await db.transaction('todos', 'readwrite');
        await Promise.all([
            tx.store.add(demoData.Todos[0]),
            tx.store.add(demoData.Todos[1]),
            tx.store.add(demoData.Todos[2]),
            tx.store.add(demoData.Todos[3]),
            tx.store.add(demoData.Todos[4]),
            tx.store.add(demoData.Todos[5]),
            tx.store.add(demoData.Todos[6]),
            tx.done,
        ]);

        initialState = demoData;
        return initialState;
    } else {
        let TodosFromIDBStore: TodosState = {
            Todos: [],
        };
        const tx = await db.transaction('todos', 'readonly');
        let cursor = await tx.store.openCursor();

        while (cursor) {
            TodosFromIDBStore.Todos.push(cursor.value);
            cursor = await cursor.continue();
        }
        initialState = TodosFromIDBStore;
        return initialState;
    }
}
