import * as ActionType from './CartType'

const initial = {
    cart: []
}

const CartReducer = (state = initial, action) => {
    switch (action.type) {
        case ActionType.CART_REQUEST:
            return {
                ...state,
                cart: action.payload
            }
        case ActionType.CART_ADD:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }
        case ActionType.CART_DELETE:
            const filter = state.cart.filter(cart => cart.id !== action.payload)
            return {
                ...state,
                cart: filter
            }
        default: return state
    }
}

export default CartReducer