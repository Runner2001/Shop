import * as ActionType from './ProductType'

const initial = {
    products: [],
    isLoading: true,
    errorFound: null
}
const productReducer = (state = initial, action) => {
    switch (action.type) {
        case ActionType.PRODUCT_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ActionType.PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: false,
                errorFound: '',
                products: action.payload
            }
        case ActionType.PRODUCT_ERROR:
            return {
                ...state,
                isLoading: false,
                products: [],
                errorFound: action.payload
            }

        default: return state
    }
}

export default productReducer