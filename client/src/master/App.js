import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { 
  Main, ExCon
} from '../containers';

import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
      {/* <Router> */}
        <div className="App">
          <Route exact={true} path="/" component={Main} />
          <Route exact={true} path="/" component={ExCon} />
        </div>
      {/* </Router> */}
      </Provider>
    );
  }
}

export default App;