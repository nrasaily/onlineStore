
import DataContext from './DataContext';
import { useState } from 'react';

function GlobalProvider(props){

    const [cart, setCart] = useState([]); 
    const [user, setUser] = useState({userName: "Nar"});

    function addProductToCart(prod) {
        // 3 step
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);

    }
    function removeProductFromCart() {}
    function clearCart() {}

    return(
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,
            ClearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
        
    )
}

export default GlobalProvider;