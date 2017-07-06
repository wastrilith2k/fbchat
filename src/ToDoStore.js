import {observable, computed} from 'mobx';
import {Fb} from './firebase';
import {map, toJS} from 'mobx';


class ToDos {
    @observable todos = map({});
    constructor(){
        Fb.todos.on('value', (snapshot) => {
            console.log(snapshot.val());
            this.todos = snapshot.val()
        })
    }

    @computed get json() {
        return toJS(this.todos);        
    }

    add = name => {
        const id =Fb.todos.push().key;
        this.update(id, name);
    }

    update = (id, value) => {
        Fb.todos.update({[id]: {name: value }});
    }

    del = id => {
        Fb.todos.child(id).remove();
    }
}

const todos = new ToDos();
export {todos}