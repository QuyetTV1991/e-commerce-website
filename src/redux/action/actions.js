export const ADD_TO_CART = "ADD_TO_CART"
export const LOADING_PRODUCTS = "LOADING_PRODUCTS"


export const loadFilterProducts = () => {
    return {
        type: LOADING_PRODUCTS,
        payload: filter
    }
}

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}