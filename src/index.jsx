import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, Router, hashHistory } from 'react-router'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { App } from './layouts'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
)

ReactDOM.render(
    <Provider store={store}>
       <HashRouter>
             <Route path="/" component={App} />
        </HashRouter>
    </Provider>,
    document.getElementById('app'),
)
