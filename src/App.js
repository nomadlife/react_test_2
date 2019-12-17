import React, { Component } from 'react';
import Todos from './components/Todos';

import './App2.css';

class App extends Component {
state = {
  todos:[
    {
      id:1,
      title:'Take out the trash',
      completed:false
    },
    {
      id:2,
      title:'Dinner with wife',
      completed:false
    },
    {
      id:3,
      title:'Meeting with boss',
      completed:false
    }
  ]
}

markComplete = (id) => {
  console.log('From app.js', id);
  this.setState({ todos:this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  })});
  
}

  render (){
    // console.log('App :', this.state.todos);
    
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}></Todos>
      </div>
    );
  }
}

export default App;
