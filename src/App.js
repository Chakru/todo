import React, { Component } from 'react';
import ToDoInput from './components/toDoInput.component';
import ToDoItem from './components/toDoItem.Component';

import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid";

class App extends Component
{
  state =
  {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const newItem =
    {
      id: this.state.id,
      item: this.state.item
    }
    const updatedItem = [...this.state.items, newItem];

    this.setState({
      items: updatedItem,
      item:"",
      id:uuid,
      editItem: false
    })
    console.log(updatedItem)
  } 
  render()
  {
    return(
      <div className = "container">
        <div className = "row">
          <div className = "col-10 mx-auto col-md-8 mt-4">
            <h3 className = "text-capitalize text-center">
              Todo List
            </h3>
            <ToDoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <ToDoItem/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
