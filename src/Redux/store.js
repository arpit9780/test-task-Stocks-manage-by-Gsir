import {applyMiddleware, legacy_createStore, compose} from 'redux';
import rootReducer from './RootReducer';
import createSagaMiddleware  from '@redux-saga/core'
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = legacy_createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(sagaMiddleware)) 
    );
    sagaMiddleware.run(rootSaga)              

export default store