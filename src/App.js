import React, { Component } from 'react';

import Todos from './components/Todos';

import './App2.css';
import Header from './components/layout/header';
import AddTodos from './components/AddTodos';

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

// Del todo
delTodo = (id) => {
  console.log(id);
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  
}
  render (){
    // console.log('App :', this.state.todos);
    
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodos/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo}></Todos>
        </div>
      </div>
    );
  }
}

export default App;
