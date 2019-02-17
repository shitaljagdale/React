import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state={
    person:[
      {name:'Jhon', age:24},
      {name:'MAx', age:26},
      {name:'Sam', age:29}
    ]
    
  }
  switchNameHandler=()=>{
   // console.log("switch handeler clicked !!");
   //this.state.person[0].name='manu'(do not mutute state directly use setState())
   this.setState({
    person:[
      {name:'shital', age:23},
      {name:'geeta', age:21},
      {name:'Nikung', age:19}
    ]
   })
 } 
  render() {
    return (
      <div className="App">
       <h1>Welcome to React !!!</h1>
       <button onClick={this.switchNameHandler}>Switch name</button>
       <Person name={this.state.person[0].name} age={this.state.person[0].age}>My hobbies are : Watching tv</Person>
       <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
       <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
