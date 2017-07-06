import React from 'react';
import {todos} from './ToDoStore';

export default class AddItem extends React.Component {

    handleAddItem = () =>{
        let name = this.refs.addItem.value;
        todos.add(name);
    }

    render() {

        return (
            <div>
                Add Item:
                <input type="text" ref="addItem" /><br />
                <button onClick={this.handleAddItem}>Add</button>
            </div>
        )
    }

}