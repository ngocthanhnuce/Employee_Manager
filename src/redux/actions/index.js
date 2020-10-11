import { ActionTypeGetData } from "../constants/actionType"

export function requestApiData (todo) {  
    return {
        type: ActionTypeGetData.API_CALL_REQUEST,
        payload: todo
    }
}
export function requestApiDataSuccess (todo) {  
    return {
        type: ActionTypeGetData.API_CALL_REQUEST_SUCCESS,
        payload: todo
    }
}
export function requestApiDataError (todo) {
    return {
        type: ActionTypeGetData.API_CALL_REQUEST_ERROR,
        payload: todo
    }
}
export function deleteData (todo) {
    return {
        type: ActionTypeGetData.REMOVE_TODO,
        payload: todo
    }
}
export function deleteDataSuccess (todo) {
    return {
        type: ActionTypeGetData.REMOVE_TODO_SUCCESS,
        payload: todo
    }
}
export function deleteDataError (todo) {
    return {
        type: ActionTypeGetData.REMOVE_TODO_ERROR,
        payload: todo
    }
}
export function addData (todo) {
    return {
        type: ActionTypeGetData.ADD_TODO,
        payload: todo
    }
}
export function addDataSuccess (todo) {
    return {
        type: ActionTypeGetData.ADD_TODO_SUCCESS,
        payload: todo
    }
}
export function addDataError (todo) {
    return {
        type: ActionTypeGetData.ADD_TODO_ERROR,
        payload: todo
    }
}
export function editData (todo, id) {
    return {
        type: ActionTypeGetData.EDIT_TODO,
        payload: {todo, id}
    }
}
export function editDataSuccess (todo) {
    return {
        type: ActionTypeGetData.EDIT_TODO_SUCCESS,
        payload: todo
    }
}
export function editDataError (todo) {
    return {
        type: ActionTypeGetData.EDIT_TODO_ERROR,
        payload: todo
    }
}
export const searchData = (todo) => {
    return {
        type: ActionTypeGetData.SEARCH_DATA,
        payload: todo
    }
}
