import React from 'react'
import { Provider } from 'react-redux';
import Counter from './Counter';
import { store } from './Store';

function ReactRedux() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

export default ReactRedux