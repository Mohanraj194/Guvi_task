import React, {Component } from 'react';
import './App.css';
class Todo extends Component{
  constructor(){
    super()
      this.state={
        todolist:[],
        todo:''
      }
  }

  todotext = (e)=>{
    this.setState({todo:e.target.value})
  }

  add=()=>{

    if(!this.state.todo.length)
    {
      alert('Enter the TodoList ')
      return false
    }

    let fetchdata = [...this.state.todolist]
    let duplicate = fetchdata.filter(element=> element.toLocaleLowerCase()===this.state.todo.toLocaleLowerCase())
    if(duplicate.length){
      alert('This Item is Alread added in TodoList ')
      return false
    }
    fetchdata.push(this.state.todo)
    this.setState({todolist:fetchdata})
    this.setState({todo:''})
  }

  delete=(e)=>{
    let fetchdata = [...this.state.todolist]
   let result =  fetchdata.filter(element=> element.toLocaleLowerCase()!==e.target.id)
   this.setState({todolist:result})
  }
  render(){
    return(
    <>
      <div className="container my-5">
        <h1 className='text-center my-3'>Todo List</h1>
        <div className='col-md-4 m-auto bg bdr p-3'>
        <div className='form-group d-flex'>
          <input type="text" className="form-control" onChange={this.todotext} value={this.state.todo} placeholder="Add TodoList" />
          <button className='btn btn-success ml-1' onClick={this.add} >Add</button>
        </div>
        <div >
         {this.state.todolist.map(todolist=>(
            <div key={todolist} className='row justify-content-center'>
              <div className=' col-md-8 d-flex  my-2 p-2 bdr bg-light '>
              <div className='w-100'>
              <p >{todolist}</p>
              </div>
              <div>
                <button id={todolist} onClick={this.delete} className='btn btn-danger ml-2'>delete</button>
              </div>
              </div>
            
            </div>
         ))}
        </div>
        </div>
      </div>
    </>
    )
  }
}
export default Todo