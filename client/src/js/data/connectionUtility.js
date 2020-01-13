import Axios from 'axios';

//const connection = '';
//const connection = 'http://couplshoppr.herokuapp.com'; //use when locally testing with live server
const connection = 'http://localhost:3000'; //use when testing with local server


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


export const addItemOnServer = item => {
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


export const deleteItemFromServer = item => {
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


export const checkItemOnServer = item => {
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


export const clearListOnServer = () => {
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