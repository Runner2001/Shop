import axios from 'axios'
import * as ActionType from './CartType'

//Data Request To server
export const cardRequest = (data) => {
    return {
        type: ActionType.CART_REQUEST,
        payload: data
    }
}

export const dataFetch = () => {
    return (dispatch) => {
        axios.get('http://localhost:9000/Cart')
            .then(response => {
                const data = response.data
                dispatch(cardRequest(data))
            })
    }
}
//Data Request End


//Add item To card
export const cardAdd = (add_data) => {
    return {
        type: ActionType.CART_ADD,
        payload: add_data
    }
}

export const postCart = (cart) => {
    return (dispatch) => {
        axios.post('http://localhost:9000/Cart', cart)
            .then(response => {
                dispatch(cardAdd(response))
            })
    }
}
//Add item End


//Delete item Start
export const cardDelete = (id) => {
    return {
        type: ActionType.CART_DELETE,
        payload: id
    }
}

export const deleteCart = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:9000/Cart/${id}`)
            .then(() => {
                dispatch(cardDelete(id))
            })
    }
}
//Delete item end