import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './styles/main.scss'

// Store Initialization
// ------------------------------------
const store = createStore()

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App'
    ], () =>
        setImmediate(() => {
          ReactDOM.unmountComponentAtNode(MOUNT_NODE)
          render()
        })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
