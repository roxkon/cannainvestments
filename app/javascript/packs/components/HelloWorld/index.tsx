import * as React from 'react';

interface IState {
    HelloWolrd:string;
}

class HelloWolrd extends React.Component<{}, IState> {
constructor(props) {
    super(props);
    this.state = {
        HelloWolrd: "elo ziomkiiii"
  }
}


render() {
   
    return (
     <div>
         {this.state.HelloWolrd}
     </div>
  )        
}
}

export default HelloWolrd;
