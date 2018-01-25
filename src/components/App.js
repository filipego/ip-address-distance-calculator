import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './Main'
import HowLong from './HowLong'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/how-long" component={HowLong}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
