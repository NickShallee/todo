import {Todo} from './todo';

export class App {

  constructor() {
    this.list = [];
    this.toAdd = '';
  }

  addTodo() {
  	if (this.toAdd.trim() === '') {
  		return false;
  	}

  	this.list.push(new Todo(this.toAdd));
  	this.toAdd = '';
  }

  remove(item) {
  	this.list.splice(this.list.indexOf(item), 1);
  }

}
