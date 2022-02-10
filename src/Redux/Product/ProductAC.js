import axios from 'axios'
import * as ActionType from './ProductType'

export const productRequest = (data) => {
    return {
        type: ActionType.PRODUCT_REQUEST,
        payload: data
    }
}

export const productLoading = () => {
    return {
        type: ActionType.PRODUCT_LOADING,
    }
}

export const productError = (message) => {
    return {
        type: ActionType.PRODUCT_ERROR,
        payload: message

    }
}


//dataFetching
export const dataFetching = () => {
    return (dispatch) => {
        dispatch(productLoading())
        axios.get('http://localhost:8000/Product')
            .then(response => {
                const product = response.data
                dispatch(productRequest(product))
            }
            )
            .catch(e => {
                const errmess = e.message
                dispatch(productError(errmess))
            })
    }
}