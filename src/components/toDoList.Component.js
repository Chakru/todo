import React, { Component } from 'react'
import toDoItem, { ToDoItem } from './toDoItem.Component'

export class ToDoList extends Component {
    render() {
        return(
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">ToDo List</h3>
                <ToDoItem/>
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
            </ul>
        )
    }
}

export default ToDoList
