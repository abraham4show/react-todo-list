 import React, { Component } from "react";
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/TodoList";
import Todoinput from "./components/Todoinput";

// showing vs-code github setup

class App extends Component{
  render(){
    return <div>
    <div className="container">
      <div className="row">
        <div className="col-4 bg-danger">hello</div>
        <div className="col-4 bg-warning">hello</div>
        <div className="col-4 bg-primary">hello</div>
        <Todoinput />
        <Todo />
       
      </div>
    </div>
    </div>
  }
}

export default App;




