import React from 'react';
import './App.css';
import ChangeName from './ChangeName';

class App extends React.Component {

  constructor( props ){
    super( props );

    this.state = {
      name : 'Default'
    }
  } 

  changeName = ( event ) => {
    event.preventDefault();
    
    let newName = event.target.newName.value;

    this.setState({
      name : newName
    });
  }

  render(){
    return (
      <div className="App">
        <ChangeName changeName={this.changeName} name={this.state.name}/>
      </div>
    );
  }
}

export default App;
