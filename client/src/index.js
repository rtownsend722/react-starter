import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    this.state ={

    }
  }

  render() {
    return (
      <div>Hey it's me the div.</div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));