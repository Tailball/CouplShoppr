import Axios from 'axios';

const connection = 'http://couplshoppr.herokuapp.com';


export const getListDataFromServer = () => {
    const route = 'api/shoppinglist';

    return new Promise((res, rej) => {

        Axios.get(`${connection}/${route}`)
        
            .then(results => {
                if(results && results.data) {
                    res(results.data);
                }
                else {
                    rej({ message: 'unknown error occurred' });
                }
            })

            .catch(err => {
                rej(err);
            });

    });
};


export const addItem = item => {
    const route = 'api/shoppinglist/add';

    return new Promise((res, rej) => {

        Axios.post(`${connection}/${route}`, item)

            .then(results => {
                if(results && results.data) {
                    res(results.data);
                }
                else {
                    rej({ message: 'unknown error occurred' });
                }
            })

            .catch(err => {
                rej(err);
            });

    });
};


export const deleteItem = item => {
    const route = 'api/shoppinglist/delete';

    return new Promise((res, rej) => {

        Axios.post(`${connection}/${route}/${item._id}`)

            .then(results => {
                if(results && results.data) {
                    res(results.data);
                }
                else {
                    rej({ message: 'unknown error occurred' });
                }
            })

            .catch(err => {
                rej(err);
            });

    });
};


export const checkItem = item => {
    const route = 'api/shoppinglist/check';

    return new Promise((res, rej) => {

        Axios.post(`${connection}/${route}/${item._id}`)

            .then(results => {
                if(results && results.data) {
                    res(results.data);
                }
                else {
                    rej({ message: 'unknown error occurred' });
                }
            })

            .catch(err => {
                rej(err);
            });

    });
};


export const clearList = () => {
    const route = 'api/shoppinglist/clear';

    return new Promise((res, rej) => {

        Axios.post(`${connection}/${route}`)

            .then(results => {
                if(results && results.data) {
                    res(results.data);
                }
                else {
                    rej({ message: 'unknown error occurred' });
                }
            })

            .catch(err => {
                rej(err);
            });

    });
}