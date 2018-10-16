import * as React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Main from './containers/Main';


class App extends React.Component {
render() {
    return (
      <div className="App">
        <header className="App-header">
        <Router>
        <Route exact path="/" component={Main} />
        </Router>
        </header>
      </div>
    );
  }
}

export default App;
