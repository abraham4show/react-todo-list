 import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/TodoList";
import Todoinput from "./components/Todoinput";

// showing vs-code github setup

class App extends Component{ 
   state={
    items:[
      {id:1,title:'wake up'},
      {id:2,title:' brakefast'},
      {id:3,title:'wake up'}
    ],
    id: uuidv4(),
    item:'', 
    editItem:false
   };

handleChange = (e)=>{
  console.log('handle change');
}

handleSubmit = (e)=>{
  console.log('handle submit');
}

clearList = ()=> {
  console.log('clear list');
}

handleEdit = (id) =>{
  console.log(`handle edit ${id}`);
}

handleDelete = (id)=>{
  console.log('handle delete');
}




  render(){    
    return <div>
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4" >
          <h3 className="text-capitalize text-center">
            todo input
          </h3>
        </div> 
        <Todoinput 
        item={this.state.item} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        editItem={this.state.editItem}
        />

        <Todo 
        items={this.state.items} 
        clearList={this.clearList}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        />
       
      </div>
    </div>
    </div>
  }
}

export default App ;
// export default uuid;




