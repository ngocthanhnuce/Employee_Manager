import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../sagas/rootSaga";

// import rootReducer from "../reducer/reducer";
// import rootSaga from "../sagas/saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
