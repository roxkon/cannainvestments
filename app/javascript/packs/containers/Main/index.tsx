import * as React from 'react';
import HelloWorld from '../../components/HelloWorld';


interface Istate {
  content: string;
}

class Main extends React.Component<{}, Istate>{
  constructor(props) {
    super(props);
    this.state = {
      content: 'Waiting for a response from Rails...',
    };
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.content}
          <HelloWorld />
        </header>
        <div className="App-main">

        </div>
      </div>
    );
  }
}

export default Main;
