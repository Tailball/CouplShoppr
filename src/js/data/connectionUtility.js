const demoList = [
    {
        product: 'Kattenbakvulling',
        quantity: 2,
        description: '',
        checked: false
    },
    {
        product: 'Champignonroomsoep',
        quantity: 1,
        description: 'Uit blik.',
        checked: false
    },
    {
        product: 'Tonijn',
        quantity: 1,
        description: '200gr nodig. In eigen nat.',
        checked: false
    },
    {
        product: 'Sandwiches',
        quantity: 2,
        description: 'Wit',
        checked: false
    },
];

export const getListDataFromServer = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(demoList);
        }, 1000);
    });
}