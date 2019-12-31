import { ADD_TO_CART } from "../action/actions"

const initialState = {
    loading: true,
    products: [],
    cartItems: []
}

export const actionReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                cartItems: [...state.cartItems, itemAdded],
                loading: false
            }
    }
}