import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import todoApp from './reducers';

let store = createStore(todoApp);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        React Redux Example
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

