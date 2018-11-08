import React, { Component } from 'react'
import axios from 'axios'


import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

        this.refresh();
    }

    // metodo para pega dados para a list
    refresh(){
        axios.get(`${URL}?sort=creat`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}));
    }

    //metodo para receber a mudança do componente
    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    //metodo usado pelo onClick do componente TodoForm
    handleAdd(){
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
            .catch(function (error) {
                console.log(error);
          });
    }

    // metodo para remover item
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }


    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true })
            .then(resp => this.refresh())
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false })
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader 
                    name='Tarefas' 
                    small='Cadastro'></PageHeader>

                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />

                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove} 
                    handleMarkAsDone={this.handleMarkAsDone} 
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
    
}