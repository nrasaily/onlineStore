import {createContext} from 'react'

/**
 * the context is just an interface
 * aa description/ promise of the data structure
 * it should not have any implementation
 * ****
 */


const DataContext = createContext({
    cart: [],
    user: {},

    addProductTocart: () => {},
    removeProductFromCart: () => {},
    clearcart: () => {}
});

export default DataContext;