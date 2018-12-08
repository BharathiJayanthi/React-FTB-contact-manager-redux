import React, { Component } from 'react'
// may need to change BrowserRouter to HashRouter when deployed
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Contacts from './Contacts'
import AddContact from './AddContact'
import EditContact from './EditContact'
import About from './About'
import NotFound from './NotFound'

import { Provider } from 'react-redux'
import store from '../store'

import 'bootstrap/dist/css/bootstrap.min.css'
// import '../App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
