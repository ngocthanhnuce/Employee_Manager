import { put, takeLatest } from "redux-saga/effects";
import { deleteDataSuccess, requestApiDataSuccess, addDataSuccess, editDataSuccess }  from "../actions";
import { ActionTypeGetData } from "../constants/actionType";
function* getDataSaga(){
    try {
        const requestGet = yield fetch(`https://5f7ed30f094b670016b76923.mockapi.io/employees`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'
            })

        })
        const responseGet = yield requestGet.json();
        yield put (requestApiDataSuccess(responseGet));
    } catch (error) {
        
    }
}


function * deleteDataSaga(id){
    try {
        const requestDelete = yield fetch(`https://5f7ed30f094b670016b76923.mockapi.io/employees/${id.payload}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'

            })
        })
        const responseDelete = yield requestDelete.json();
        yield put (deleteDataSuccess(responseDelete));
    } catch (error) {
        
    }
}
 
function* addDataSaga(data){
    try {
        const requestAdd = yield fetch(`https://5f7ed30f094b670016b76923.mockapi.io/employees`,{
            method: 'POST',
            headers: new Headers({
                'Content-Type' : 'application/json',
               
            }),
            body: JSON.stringify(data.payload)
        })
        const responseAdd = yield requestAdd.json();
        yield put (addDataSuccess(responseAdd));
    } catch (error) {
        
    }
}

function* editDataSaga(data){
    if (data)
    try {
        const requestEdit = yield fetch(`https://5f7ed30f094b670016b76923.mockapi.io/employees/${data.payload.id}`,{
            method: 'PUT',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Accept': '*/*'

            }),
            body: JSON.stringify(data.payload.todo)
        })
        const responseEdit = yield requestEdit.json();
        yield put (editDataSuccess(responseEdit));
    } catch (error) {
    }
    else return;
}
export default function* watchSagaGetData(){
    yield takeLatest(ActionTypeGetData.API_CALL_REQUEST, getDataSaga)
    yield takeLatest(ActionTypeGetData.REMOVE_TODO, deleteDataSaga)
    yield takeLatest(ActionTypeGetData.ADD_TODO, addDataSaga)
    yield takeLatest(ActionTypeGetData.EDIT_TODO, editDataSaga)
}