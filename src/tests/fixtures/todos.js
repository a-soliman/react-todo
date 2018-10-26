import moment from 'moment';

export const todos = [
    {
        id: '1',
        title: 'todo one',
        note: 'todo one note',
        createdAt: moment(0)
    },
    {
        id: '2',
        title: 'todo two',
        note: 'todo two note',
        createdAt: moment(0).add(3, 'days')
    },
    {
        id: '3',
        title: 'todo three',
        note: 'todo three note',
        createdAt: moment(0).add(5, 'days')
    }
];