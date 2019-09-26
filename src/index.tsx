import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css' // React bootstrap用
import './utils/i18n' // for translation
import { Store, Action, createStore } from 'redux'
import { createReducers, ReduxState } from './reducers'
import { Provider } from 'react-redux'

const store: Store<ReduxState, Action> = createStore(createReducers())

const rootComponent: JSX.Element = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(rootComponent, document.getElementById('root'))

// オフラインにて読み込みを早くしたい場合、regisuter()をunregister()に変更してください。
// ただし、いくつかの注意点があります。: https://bit.ly/CRA-PWA
serviceWorker.unregister()
