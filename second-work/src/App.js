 import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from "./components/TodoList";
import Todoinput from "./components/Todoinput";

// showing vs-code github setup

class App extends Component{ 
   state={
    items:[],
    id: uuidv4(),
    item:'', 
    editItem:false
   };

handleChange = (e)=>{
  this.setState({
    item:e.target.value
  })
}

handleSubmit = (e)=>{
  e.preventDefault();
  const newItem = {
    id:this.state.id,
    title:this.state.item
  }

  const updatedItems = [...this.state.items,newItem]

  this.setState({
    items:updatedItems,
    item:'',
    id:uuidv4(),
    editItem:false
  })
}

clearList = ()=> {
  this.setState({
    items:[]
  })
}

handleEdit = (id) => {
    const filteredItem = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
        items: filteredItem, // This should be updated with the filtered list
        item: selectedItem.title, // The title of the selected item
        id: id,
        editItem: true
    });
}


handleDelete = (id)=>{
  const filteredItem = this.state.items.filter(item=>item.id !== id);
   this.setState({
    items:filteredItem
   
    
  })
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




