import { all } from 'redux-saga/effects';
import watchSagaGetData from '.';


function* rootSaga() {
    yield all([
        watchSagaGetData()
    ]
    )
};
export default rootSaga;
