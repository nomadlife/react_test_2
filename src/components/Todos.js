import React, { Component } from 'react';

class Todos extends Component {
  render(){
      console.log('Todos : ',this.props.todos);
      
      return(
        <div>
        <h1> Todos </h1>
        </div>
      )
  }
}

export default Todos;
