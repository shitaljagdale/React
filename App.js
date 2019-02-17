import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const app =props=>{
  const[personsState,setPersonState]=useState(
    {
      persons:[
        {name:'Jhon', age:24},
        {name:'MAx', age:26},
        {name:'Sam', age:29}
      ]
  
    }
    
  )
  const switchNameHandler=()=>{
    setPersonState({
      persons:[
        {name:'shital', age:23},
        {name:'geeta', age:21},
        {name:'Nikung', age:19}
      ]
     })

  }
  
    return (
      <div className="App">
       <h1>Welcome to React !!!</h1>
       <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
  
    }

    

export default app;
