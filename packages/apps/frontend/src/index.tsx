import { ChakraProvider } from '@devices/ui'

import { store } from 'App/store'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { App } from './App/App'
import { reportWebVitals } from './App/config/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
)

reportWebVitals()
