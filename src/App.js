import React, { Component } from 'react';

import Todos from './components/Todos';

import './App2.css';
import Header from './components/layout/header';
import AddTodos from './components/AddTodos';
import About from './components/pages/About';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
state = {
  todos:[]
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({ todos: res.data }))
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

// Add Todo 
addTodo = (title) => {
  const newTodo ={
    id : uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos : [...this.state.todos, newTodo ] });
}
  render (){
    // console.log('App :', this.state.todos);
    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodos addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delTodo={this.delTodo}></Todos>
              </React.Fragment>
            )}></Route>

            <Route path="/about" component={About}
            ></Route>
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
