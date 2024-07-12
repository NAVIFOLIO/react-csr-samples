import { v4 as uuidv4 } from 'uuid';
import { addDays } from 'date-fns';
import { type TodosState } from "./todos-context";

export const initialState: TodosState = {
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
