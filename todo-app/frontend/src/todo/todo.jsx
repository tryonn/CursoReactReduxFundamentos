import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }


    //metodo usado pelo onClick do componente TodoForm
    handleAdd(){
        console.log(this);
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList />
            </div>
        )
    }
}