import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {StripeProvider} from 'react-stripe-elements'

import App from './App'
import Navbar from '../commons/Navbar'
import store from '../store'

export default function Main() {
  return (
    <Provider store={store}>
      <StripeProvider apiKey={'tk_test_1UH9vaIS7p9WlWO'}>
        <Router>
          <Navbar />
          <App />
        </Router>
      </StripeProvider>
    </Provider>
  )
}
