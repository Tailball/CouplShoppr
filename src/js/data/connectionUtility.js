const demoList = [
    {
        product: 'Kattenbakvulling',
        quantity: 2,
        description: ''
    },
    {
        product: 'Champignonroomsoep',
        quantity: 1,
        description: 'Uit blik.'
    },
    {
        product: 'Tonijn',
        quantity: 1,
        description: '200gr nodig. In eigen nat.'
    },
    {
        product: 'Sandwiches',
        quantity: 2,
        description: 'Wit'
    },
];

export const getListDataFromServer = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(demoList);
        }, 2500);
    });
}