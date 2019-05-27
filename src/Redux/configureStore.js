import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers';

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer(),
        preloadedState,
        compose(
            applyMiddleware(
                thunkMiddleware
            )
        ),
    )
}
