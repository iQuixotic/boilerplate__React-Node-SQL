import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  Main, ExCon
} from '../containers';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/" component={ExCon} />
        </div>
      </Router>
    );
  }
}

export default App;