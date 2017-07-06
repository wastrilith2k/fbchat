import React from 'react';
import {map} from 'lodash';
import {observer} from 'mobx-react';
import {todos} from './ToDoStore';

@observer
export default class ToDosListComponent extends React.Component {
    del = id => {
        todos.del(id);
    };

    render() {
        return (
        <ul id="chatlist">
            {map(todos.json, (it, key) => (
                <li onClick={this.del.bind(this,key)} 
                    key={key}>{it.name}</li>)
            )}
        </ul>   
        ); 
    }
}
